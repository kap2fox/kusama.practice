// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const crypto = require('crypto');
const fsExtra = require("fs-extra");
const createImage = require("node-html-to-image");
const generateHtml = require("./functions/generateHtml");
const yaml = require("js-yaml");

let allPossiblePaths = [];
let allPossiblePathsPlayground = [];

require.extensions['.yaml'] = function(module, filename) { // To safely load .yaml file via require
  module.exports = yaml.load(fs.readFileSync(filename, 'utf8'));
}

// const courses = require('./src/data/online-courses.yaml')

// For generated images configuration
const defaultOptions = {
  typeName: "Course",
  backgroundColors: [
    "#fffc00"
  ],
  imgWidth: "1280px",
  imgHeight: "650px",
  domain: "kusama.academy",
  basePath: "src/pages/learn/",
  outputDir: "static/og/"
};

// This is helper function to simplify code. Output - image file. arrayPath - array of sections on image.
const generateImage = (output, arrayPath, options) => {
  fsExtra.access(output, (error) => { // Generate covers for courses
    if (error) {
      createImage({
        output,
        html: generateHtml(arrayPath, options)
      }).then(() => {
        console.log('Image was created successfully!')
        console.log(output)
        console.log(options)
        console.log(arrayPath)
      }).catch(e => console.log(e.message))
    } else {
      console.log(`The image ${output.split('/')[output.split('/').length-1]} already exists!`)
    }
  })
}

module.exports = function (api) {

  const options = { ...defaultOptions };

  api.loadSource(async  (actions) => {

    const collection = actions.getCollection('Course');


    actions.addSchemaTypes(`
      type Course implements Node @infer {
        lastUpdate: Date
      }
    `)

    collection.data().map( (e) => {

      if(e.path.includes('/en/')) {
        allPossiblePaths.push({path: e.path, name: e.fileInfo.name})
      }
    })




    // courses.forEach((course) => {
    //
    //   fsExtra.ensureDirSync(options.basePath + course.path)
    //
    //
    //   collection.data().forEach((lesson) => { // Generate images for lessons themselves
    //
    //     if (lesson.internal.typeName === options.typeName) {
    //
    //
    //       const imgName = lesson.fileInfo.name;
    //       const lessonNamePart = lesson.title.substr(0, lesson.title.indexOf(','));
    //       const lessonTitle = lessonNamePart ? lesson.title.replace(lessonNamePart, '').slice(2).trim() : lesson.title;
    //       const locale = lesson.fileInfo.path.slice(0,2);
    //       const dir = lesson.fileInfo.directory.slice(9);
    //       const output = `${options.outputDir}${dir}/${imgName}-${locale}.png`
    //       const lessonOptions = [...lesson.metaOptions, lessonTitle];
    //       generateImage(output, lessonOptions, options)
    //
    //
    //     }
    //
    //   })
    // })



  })

  api.onCreateNode(options => {
    let data = fs.readFileSync(`courses${options.path.slice(0, -1)}.md`).toString().split("\n");
    const upd = fs.statSync(`courses${options.path.slice(0, -1)}.md`, (err, stats) => {
      return stats.mtime;
    })

    const allHashes = require('./src/data/courses-hashes.yaml');

    const getHash = ( content ) => {				
      var hash = crypto.createHash('md5');

      data = hash.update(content, 'utf-8');

      gen_hash= data.digest('hex');
      return gen_hash;
    }

      //Creating a readstream to read the file
      let myReadStream = fs.createReadStream(`courses${options.path.slice(0, -1)}.md`);

      let rContents = '' 
      myReadStream.on('data', function(chunk) {
          rContents += chunk;
      });
      myReadStream.on('error', function(err){
          console.log(err);
      });
      myReadStream.on('end',function(){
          const content = getHash(rContents) ;

          const isExistHash = allHashes ? allHashes.find(h => h.hash === content) : null;
          const isExistPath = allHashes ? allHashes.find(h => h.link === options.path) : null;
          if(!isExistHash && !isExistPath) {
          let stream = fs.createWriteStream("./src/data/courses-hashes.yaml", {flags:'a'});
stream.once('open', function(fd) {
stream.write(`\n- link: ${options.path} 
  hash: ${content} 
  lastUpdate: ${upd.mtime} 
  updated${options.path}: true \n`
              );
              stream.end();
          });
        }

        allHashes && allHashes.forEach(h => {
          if(h[`updated${options.path}`] && new Date(h.lastUpdate).toDateString() !== new Date().toDateString()) {
            let str = `updated${options.path}: true`;
            let newStream = fs.readFileSync("./src/data/courses-hashes.yaml", 'utf-8');
            const newValue = newStream.replace(str, `updated${options.path}: false `);
            fs.writeFileSync('./src/data/courses-hashes.yaml', newValue, 'utf-8');
          }
        })
      
          allHashes && allHashes.forEach(hash => {

            if(hash.hash !== content && hash.link === options.path) {
       
              let str = `hash: ${hash.hash}`;
              let str2 = `lastUpdate: ${hash.lastUpdate}`
              let str3 = `updated${options.path}: false`
              let newStream = fs.readFileSync("./src/data/courses-hashes.yaml", 'utf-8');
              const newValue = newStream.replace(str, `hash: ${content}`).replace(str2, `lastUpdate: ${upd.mtime}`).replace(str3, `updated${options.path}: true`);
              fs.writeFileSync('./src/data/courses-hashes.yaml', newValue, 'utf-8');
              options.lastUpdate = upd.mtime;
              console.log(upd.mtime)
            } else if (hash[`updated${options.path}`] === true && hash.link === options.path) {
              options.lastUpdate = upd.mtime;
              console.log(upd.mtime)
            } 
          })

          if (allHashes.every(e => e.hash !== content)) {
            console.log(content)
            
          }
      });
  })  

  api.createPages(({ createPage }) => {

    // all locales
    const locales = ["ru", "it", "es", "de", "pt" ];

    const localesAll = ["ru", "it", "es", "de", "pt", "en"];


    const createNewRedirect = (path, redirect, ) => {
      localesAll.forEach(l => {
        createPage(
          {
              path: `/${l}${path}`,
              component: 'src/pages/redirect.vue',
              context: {
                redirect: redirect
              }
          }
        )
      })
    }



    allPossiblePaths.forEach(node => {

      const path = node.path.substring(4);

      locales.forEach(locale => {
        if (fs.existsSync(`courses/${locale}/${path.slice(0,-1)}.md`)) {
          console.log('exists');
        } else {
          createPage({
            path: `/${locale}/${path}`,
            component: './src/templates/AvailableCoursesTranslations.vue',
          })
        }
      })
    })
  })
}
