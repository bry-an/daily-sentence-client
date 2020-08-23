<template>
<div>
  <div
    v-if="isSavedSentenceToday"
    class="has-text-grey-darker">

    <h2 class="is-size-1">
      {{today}}
    </h2>

    <div class="is-size-2 mt-4">
      {{dailySavedSentence.text}}
    </div>

  </div>
  <div
    v-else
    class="sentence-input">
    <b-field label="Sentence">
            <b-input maxlength="256" v-model="sentence" type="textarea"></b-input>
        </b-field>
   <b-button @click="submitSentence">Submit</b-button>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { format } from 'date-fns';

export default {
  name: 'Home',
  data: () => ({
    sentence: '',
  }),
  computed: {
    ...mapGetters(['dailySavedSentence']),
    isSavedSentenceToday() {
      return Object.prototype.hasOwnProperty.call(this.dailySavedSentence, '_id');
    },
    today() {
      return format(new Date(), 'MMMM do yyyy');
    },
  },
  methods: {
    submitSentence() {
      this.$store.dispatch('createSentence', { text: this.sentence });
    },
  },
};
</script>

<style lang="sass">
.sentence-input
  width: 50%
  margin: auto

h2
  @apply is-size-1

</style>
