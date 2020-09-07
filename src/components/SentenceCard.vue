<template>
<div class="box sentence-card">
    {{sentence.text}}

</div>

</template>

<script>
export default {
  name: 'SentenceCard',
  props: {
    sentence: {
      type: String,
      required: true,
      default: () => true,
    },
  },
  computed: {
    sentenceDate: () => this.sentence.date || Date.now(),
  },

};
</script>

<style lang="scss">

.sentence-card {
    width: 50%;
    margin: auto;
}

</style>
