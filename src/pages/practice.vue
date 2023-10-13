<template>
  <Layout>

    <page-title
        :title="$ts(`Course progress`)"
        :breadcrumbs="breadcrumbs"
    />

    <section class="container__narrow">

      <section>
        <h2>{{ $ts('Account manager') }}</h2>
        <AccountManager>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="create_wallet"></PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="send_roc_tx"></PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="roc_create_asset"
              question="Enter asset id of created token"
          >
          </PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="spot_launch"
          >
          </PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="lights_up"
          >
          </PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="ipfs_pin"
              question="Enter ipfs cid(Qm...) of pinned .txt file"
          ></PracticeChecker>

          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="crust_rocky_order"
              question="Enter ipfs cid(Qm...) of pinned .txt file"
          ></PracticeChecker>
          <PracticeChecker
              practiceCheckerUrl="https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-18e93402-1ffe-47e8-be1d-e28a6ac871f1/checker/check_task"
              taskId="crust_shadow_order"
              question="Enter ipfs cid(Qm...) of pinned .txt file"
          ></PracticeChecker>


        </AccountManager>

      </section>


    </section>

  </Layout>
</template>

<script>

// import courses from '@/data/online-courses.yaml';
import translations from '@/data/locales/translations.yaml';
import AccountManager from "../components/practice/AccountManager.vue";

export default {

  components: {
    AccountManager,
    PageTitle: () => import('~/components/PageTitle.vue'),
    MetaInfo: () => import('~/components/MetaInfo.vue'),
    Loader: () => import('~/components/Loader.vue'),
  },

  data() {
    return {
      breadcrumbs: [
        {
          to: '/',
          text: 'Kusama.Practice'
        }
      ],

      // courses: [
      //   this.$ts('Introduction course'),
      //   this.$ts('Boston Dynamics Spot Software Developing')
      // ],

      gscript: process.env.GRIDSOME_GS_CERTIFICATE,
      captcha: process.env.GRIDSOME_CAPTCHAID,

      // course: this.$ts(courses[0].title),
      account: '',
      name: '',
      email: '',
      discord: '',

      result: this.$response

    }
  },

  computed: {
    // courses() {
    //   return courses;
    // },
    translations() {
      return translations;
    },
    enCourse() {
      return this.courseNameForGS(this.course);
    }
  },

  methods: {
    form() {
      let respInterval = setInterval(() => {
        this.result = this.$response
      }, 1000)

      if (this.$response === 'success' || this.$response === 'error') {
        clearInterval(respInterval)
      }
    },

    courseNameForGS(alias) {
      for (const item of this.translations) {
        if (item[this.$locale] === alias) {
          return eval(`item.en`)
        }
      }
    }
  }
}
</script>

<style scoped>

form.wait button, form.success button {
  pointer-events: none;
  cursor: not-allowed;
}

form.wait button {
  filter: grayscale(1);
  opacity: 0.4;
}

form.success button {
  --btn-color: var(--color-green);
}

form.wait .loader {
  width: 20px;
  height: 20px;
}
</style>