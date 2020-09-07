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
  <div class="sentence-container">
    <sentence-card
      v-for="sentence in sentences"
      :key="sentence._id"
      :sentence="sentence"
    >

    </sentence-card>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { format } from 'date-fns';
import SentenceCard from '../components/SentenceCard.vue';

export default {
  name: 'Home',
  components: {
    SentenceCard,
  },
  data: () => ({
    sentence: '',
  }),
  computed: {
    ...mapGetters(['dailySavedSentence', 'sentences']),
    isSavedSentenceToday() {
      return Object.prototype.hasOwnProperty.call(this.dailySavedSentence, '_id');
    },
    today() {
      return format(new Date(), 'MMMM do yyyy');
    },
  },
  methods: {
    ...mapActions(['fetchSentences']),
    submitSentence() {
      this.$store.dispatch('createSentence', { text: this.sentence });
    },
  },
  mounted() {
    this.fetchSentences();
  },
};
</script>

<style lang="sass">
.sentence-input
  width: 50%
  margin: auto

h2
  @apply is-size-1

.sentence-container
  margin-top: 1rem

</style>
