<template>
  <div>
    <h3 style="margin-bottom: 0">Question: </h3>

    <div style="font-style: italic">{{ question }}</div>

    <div v-if="quizType==='choose'">
      <div  v-for="answer in answers">
        <input style="padding-right: 10px" type="radio" :id="answer.id" :value="answer.id" v-model="selectedAnswer" />
        <label style="margin-left: 10px" :for="answer.id">{{answer.text}}</label>
<!--        <div style="margin-top: 1rem">-->
<!--          <button @click="()=>sendChooseAnswer(answer.id)">{{ answer.text }}</button>-->
<!--        </div>-->
      </div>
      <div class="flex-end">
        <button style="margin-top: 1rem; margin-bottom: 1rem; text-align: right" @click="()=>sendChooseAnswer(this.selectedAnswer)">Answer</button>
      </div>

    </div>

    <div v-if="quizType==='enter'">
      <div v-for="answer in answers">
        <div style="margin-top: 1rem">
          <span>{{ answer.text}}: <input style="font-size: 18px; padding-left: 5px; padding-right: 5px; float: right" @input="(event) => changeUserAnswers(answer.id, event.target.value.trim())"/></span>
        </div>
      </div>
      <div class="flex-end">
        <button style="margin-top: 1rem; margin-bottom: 1rem; text-align: right" @click="()=>sendEnterAnswer()">Answer</button>
      </div>



    </div>
    <hr/>
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
      userAnswers: {},
      selectedAnswer: '',
    }
  },
  methods: {
    changeUserAnswers(answerId, answer){
      this.userAnswers[answerId] = answer
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
      .flex-end {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
      }
</style>