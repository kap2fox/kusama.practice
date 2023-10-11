<template></template>
  
<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>


<script>
  import translations from '@/data/locales/translations.yaml'
export default {
  props: {
      pageTitle: { type: String, default: '' },
      pageDescription: { type: String, default: '' },
      pageImage: { type: String, default: '' },
      pageImageWidth: { type: String, default: '1280' },
      pageImageHeight: { type: String, default: '765' },
      pageLang: {type: String, default: 'en'},
      coursePage: {type: Boolean, default: false},
      coursePageList: {type: Boolean, default: false}
  },

  data() {
    return {
      allLocales: ["en", "ru", "es", "de", "it", "pt"],
      locale: 'en',
      metaTitle: '',
      metaDescription: '',
      metaImage: ''
    }
  },

  watch: {
    '$route.path'() {
      this.metaTitle = this.getMetaInfo(this.pageTitle);
      this.metaDescription = this.getMetaInfo(this.pageDescription)
      this.metaImage = this.pageImage;
    }
  },

  computed: {
    image() {
      if(this.pageImage != '') {
        return this.$static.metadata.siteUrl + this.metaImage + '-' + this.locale + '.png'
      }
      else{
        return this.$static.metadata.siteUrl + '/og/index.png'
      }
    },

    url(){
      return this.$static.metadata.siteUrl + this.$route.fullPath
    },

    translations() {
      return translations;
    },

    googleCourseInfo() {
      if(this.coursePage) {
        return  [{
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Course',
            name: this.pageTitle,
            description: this.pageDescription,
            provider: {
              '@type': "Organization",
              name: "Kusama Academy",
              sameAs: "https://kusama.academy/"
            },
            headline: this.pageTitle,
            image: this.image
          }
        }]
      } else if (this.coursePageList) {
        return [{
          type: 'application/ld+json',
          json: {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Course",
                url: "https://kusama.academy/en/learn/kusama-theory-practice/",
                name: this.getMetaInfo("Introduction Course"),
                description: this.getMetaInfo("Welcome to the Course!"),
                provider: {
                  '@type': "Organization",
                  name: "Kusama Academy",
                  sameAs: "https://kusama.academy/"
                }
              }
            }
          ]},
        }]
      } else {
        return []
      }
    },
  },

  methods: {
    getLocale() {

      this.allLocales.map(locale => {
        if(this.$route.path.includes(`/${locale}/`)) {
          this.locale = locale;
        } 
      })
    },

    getMetaInfo(alias) {
      let hasAlias = 0

      for (const item of this.translations) {
        if (item.alias === alias){
          hasAlias++
          
          // Check if there is translation for current alias, if no show default locale string
          if (eval(`item.${this.locale}`)){
            return eval(`item.${this.locale}`)
          }
          else {
              return eval(`item.en`)
          }
        }
      }

      if(hasAlias == 0) {
        return alias;
      }
    }
  },

  metaInfo() {
    const locale = this.locale;
    const title =  this.metaTitle + ' / ' + this.$static.metadata.siteName;
    const description = this.metaDescription;
    const image = this.image;
    return {
      title: title,
      htmlAttrs: {
        lang: locale,
        amp: true
      },
      meta: [
        { key: 'description', name: 'description', content: description },

        { name: "yandex-verification", content: "291ac12dc046e37f" },

        // Some Open Graph Tags
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: this.$static.metadata.siteName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { property: "og:image:width", content: this.pageImageWidth },
        { property: "og:image:height", content: this.pageImageHeight },
        { property: "og:url", content: this.url },



      ],
      script: this.googleCourseInfo
    };
  },

  created() {
    this.getLocale();
    this.metaTitle = this.getMetaInfo(this.pageTitle);
    this.metaDescription = this.getMetaInfo(this.pageDescription)
    this.metaImage = this.pageImage;
  }
};
</script>