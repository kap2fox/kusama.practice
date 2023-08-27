<template>
  <div>
    <hr style="margin-top: 1rem"/>
    <hr/>
    <h2 style="margin-bottom: 10px; margin-top: 10px">You could leave your feedback about this lesson here: </h2>
    <textarea style="width: 100%; height: 150px; border-width: 2px; padding: 10px;" v-model="comment"></textarea>

    <div class="flex-end">
      <button style="margin-top: 1rem; margin-bottom: 1rem; text-align: right" @click="()=>submitFeedback()">
        Submit
        </button>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  props: {
    formUrl: {
      type: String,
      required: true
    },
    lessonLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: '',
    }
  },
  methods: {
    submitFeedback() {
      console.log(this.comment)
      console.log(this.formUrl)

      fetch(this.formUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          'lesson_label': this.lessonLabel,
          'comments': this.comment,
        })
      }).then((res) => res.json()).then(data => {
        console.log(JSON.stringify(data))
        alert("Thank you for your feedback")
      })
    }
  },
  created() {
  },


}
</script>

<style scoped>
      .flex-end {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
</style>