<template>
  <div class="sentence-input">
    <b-field label="Sentence">
            <b-input maxlength="256" v-model="sentence" type="textarea"></b-input>
        </b-field>
   <b-button @click="submitSentence">Submit</b-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    sentence: '',
  }),
  methods: {
    submitSentence() {
      this.$store.dispatch('createSentence', this.sentence);
    },
  },
};
</script>

<style lang="sass">
.sentence-input
  width: 50%
  margin: auto

</style>
