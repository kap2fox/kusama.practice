<template>
  <div style="margin-top: 1rem; margin-bottom: 1rem">

    <details style="  border: 2px solid black;">
        <summary style="border: 1px">
          <div style="display: inline;" v-html="title"></div>

        </summary>
          <div class="content">
            <slot/>
          </div>
    </details>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {

  },
  created () {
  },
}
</script>

<style scoped>

details > summary {
  border: 2px solid black;
  cursor: pointer;
  padding: .5rem 1rem;
}

details > summary > * {
  display: inline;
}

details > div {
  //border: 2px solid black;
  margin-top: 0;
  padding: 1rem;
}

</style>