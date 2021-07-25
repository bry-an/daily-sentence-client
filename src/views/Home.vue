<template>
<div class="home">
<h1 class="is-size-1">Welcome to My Daily Sentence</h1>
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
    class="sentence-input-container">
    <label for="sentence-input">Today's sentence</label>
    <textarea maxlength="256" id="sentence-input" v-model="sentence"/>
   <b-button @click="submitSentence">Submit</b-button>
   <hr/>
   <h3 class="is-size-3">Previous daily sentences</h3>
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
import { mapGetters } from 'vuex';
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
        submitSentence() {
            this.$store.dispatch('createSentence', { text: this.sentence });
        },
    },
    mounted() {
        this.$store.dispatch('fetchSentences');
    },
};
</script>

<style lang="sass">

.home
    font-family: 'Cedarville Cursive', cursive

#sentence-input
  width: 50%
  margin: 2rem auto
  font-family: 'Cedarville Cursive', cursive
  display: block
  font-size: 2rem

h2
  @apply is-size-1

.sentence-container
  margin-top: 1rem

</style>
