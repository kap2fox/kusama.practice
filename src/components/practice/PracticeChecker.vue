<template>
  <div>
    <div style="border-top: 1px solid black; padding: 1rem; font-family: monospace">
      <div>
        <p style="margin-bottom: 1rem">task_id: <b>{{ taskId }}</b></p>
        <div v-if="$parent.accountAddress">
          <p>task_status: <span
              :style="task_res==='task not completed'?'color:orange':task_res==='success'?'color:#0cae2f':''"><b>{{
              task_res
            }}</b></span></p>
          <div v-if="question" style="margin-bottom: 1rem">
            <p style="margin-bottom: 0.5rem">{{ question }}</p>
             <input style="width: 100%" type="text" v-model="input" placeholder="answer"/>
          </div>

          <div class="check_button" @click="()=>{buttonLock=true;checkTask()}" v-if="!buttonLock">
            {{ buttonLock ? 'Checking...' : 'Check task' }}
          </div>
        </div>
        <div v-else>
          <span style="color: orange">Choose account and sign auth message to check this practice</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    taskId: {
      type: String,
      required: true
    },
    practiceCheckerUrl: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      answers: [],
      task_res: '',
      input: '',
      buttonLock: false

    }
  },
  methods: {
    checkTask(){
      this.buttonLock = true
      fetch(this.practiceCheckerUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          'address': this.$parent.accountAddress,
          'signature': this.$parent.accountSignature,
          'task_id': this.taskId,
          'input': this.input
        })
      }).then((res) => res.json()).then(data => {
        this.task_res = data.result
      })
      this.buttonLock = false
    },
    getTaskRes() {
      fetch(this.practiceCheckerUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          'address': this.$parent.accountAddress,
          'signature': this.$parent.accountSignature,
          'task_id': this.taskId,
          'get_result': true
        })
      }).then((res) => res.json()).then(data => {
        this.task_res = data.result
      })

    }
  },
  created() {
    this.getTaskRes()
  },
  updated() {
    this.getTaskRes()
  },


}
</script>

<style>
.check_button {
  display: inline;
  border: 1px solid #0cae2f;
  width: auto;
  cursor: pointer;
  padding: 0.5rem;
  color: #0cae2f;
  font-weight: bold;
}

.check_button:hover {
  background: #f6f6f6;
}
</style>