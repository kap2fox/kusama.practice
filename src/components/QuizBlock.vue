<template>
  <div>
    <h3>Question: {{ question }}</h3>
    <div v-if="quizType==='choose'">
      <div v-for="answer in answers">
        <div style="margin-top: 1rem">
          <button @click="()=>sendChooseAnswer(answer.id)">{{ answer.text }}</button>
        </div>
      </div>
    </div>
    <div v-if="quizType=='enter'">
      <div v-for="answer in answers">
        <div style="margin-top: 1rem">
          <span>{{ answer.text }}: <input @input="(event) => changeUserAnswers(answer.id, event.target.value.trim())"/></span>
        </div>
      </div>
      <button @click="()=>sendEnterAnswer()">Answer</button>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    quizId: {
      type: String,
      required: true
    },
    quizUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      question: '',
      answers: [],
      quizType: '',
      userAnswers: {}
    }
  },
  methods: {
    changeUserAnswers(questionId, answer){
      this.userAnswers[questionId] = answer
    },
    sendEnterAnswer() {
      fetch(this.quizUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          'action': 'answer',
          'quiz_id': this.quizId,
          'answers': this.userAnswers
        })
      }).then((res) => res.json()).then(data => {
        alert(JSON.stringify(data))
      })
    },
    sendChooseAnswer(answerId) {
      fetch(this.quizUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          'action': 'answer',
          'quiz_id': this.quizId,
          'answers': [answerId]
        })
      }).then((res) => res.json()).then(data => {
        alert(JSON.stringify(data))
      })

    }
  },
  created() {
    // Simple GET request using fetch
    fetch(this.quizUrl + '?' + new URLSearchParams({
      'action': 'read',
      'quiz_id': this.quizId
    }))
        .then(response => response.json())
        .then(data => {
          this.question = data.question
          this.quizType = data.type
          this.answers = data.answers
        });
  },


}
</script>

<style scoped>

</style>