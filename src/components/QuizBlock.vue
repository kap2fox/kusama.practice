<template>
  <div>
    <h3 style="margin-bottom: 1rem">Question: </h3>

    <div style="font-style: italic; margin-bottom: 1rem" v-for="question in question_parts">{{ question}}</div>

    <div v-if="quizType==='choose'">
      <div  v-for="(answer, ind) in answers">
        <input style="padding-right: 10px" type="radio" :id="id_prefix+answer.id" :value="answer.id" v-model="selectedAnswer" />
        <label style="margin-left: 10px" :for="id_prefix+answer.id">{{answer.text}}</label>
      </div>
      <div class="flex-end">
        <div class="flex-end" v-html="result_icon"/>
        <button style="margin-top: 1rem; margin-bottom: 1rem; text-align: right" @click="()=>sendChooseAnswer([this.selectedAnswer])">Answer</button>
      </div>

    </div>

    <div v-if="quizType==='multichoose'">
      <div  v-for="(answer, ind) in answers">
        <input style="padding-right: 10px" type="checkbox" :id="id_prefix+answer.id" :value="answer.id" v-model="selectedAnswer" />
        <label style="margin-left: 10px" :for="id_prefix+answer.id">{{answer.text}}</label>
      </div>
      <div class="flex-end">
        <div class="flex-end" v-html="result_icon"/>
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
        <div class="flex-end" v-html="result_icon"/>
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
      question_parts: '',
      answers: [],
      quizType: '',
      userAnswers: {},
      selectedAnswer: [],
      result_icon: '',
      id_prefix: '',
      tick_icon: '<svg style="margin-right: 2rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 256 256" xml:space="preserve">\n' +
          '<defs>\n' +
          '</defs>\n' +
          '  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">\n' +
          '    <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,170,28); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>\n' +
          '    <path d="M 38.615 71.654 L 16.332 38.93 h 8.008 l 13.19 10.708 c 6.222 -10.351 20.164 -22.904 31.018 -28.718 h 6.077 C 60.582 31.819 46.34 53.763 38.615 71.654 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>\n' +
          '  </g>\n' +
          '</svg>',
      cross_icon: '<svg style="margin-right: 2rem;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="32" viewBox="0 0 256 256" xml:space="preserve">\n' +
          '<defs>\n' +
          '</defs>\n' +
          '<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">\n' +
          '\t<path d="M 13.4 88.492 L 1.508 76.6 c -2.011 -2.011 -2.011 -5.271 0 -7.282 L 69.318 1.508 c 2.011 -2.011 5.271 -2.011 7.282 0 L 88.492 13.4 c 2.011 2.011 2.011 5.271 0 7.282 L 20.682 88.492 C 18.671 90.503 15.411 90.503 13.4 88.492 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>\n' +
          '\t<path d="M 69.318 88.492 L 1.508 20.682 c -2.011 -2.011 -2.011 -5.271 0 -7.282 L 13.4 1.508 c 2.011 -2.011 5.271 -2.011 7.282 0 l 67.809 67.809 c 2.011 2.011 2.011 5.271 0 7.282 L 76.6 88.492 C 74.589 90.503 71.329 90.503 69.318 88.492 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(236,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>\n' +
          '</g>\n' +
          '</svg>',
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
        // alert(JSON.stringify(data))
        this.result_icon = data.result? this.tick_icon: this.cross_icon
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
          'answers': answerId
        })
      }).then((res) => res.json()).then(data => {
        // alert(JSON.stringify(data))
        this.result_icon = data.result? this.tick_icon: this.cross_icon
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
          this.question_parts = data.question.split("\n")
          this.quizType = data.type
          this.answers = data.answers
          this.id_prefix = this._uid
        }).catch((e) => {
          this.question_parts = ["FAILED TO GET QUESTION"]
        })
;
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

      .checkmark {
      display: inline-block;
      transform: rotate(45deg);
      height: 25px;
      width: 12px;
      margin-left: 60%;
      border-bottom: 7px solid #78b13f;
      border-right: 7px solid #78b13f;
    }

</style>