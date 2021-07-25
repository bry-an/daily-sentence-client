<template>
<div class="home">
<h1 class="text-2xl">Welcome to My Daily Sentence</h1>
  <div
    v-if="isSavedSentenceToday">

    <h2 class="text-2xl">
      {{today}}
    </h2>

    <div class="mt-4">
      {{dailySavedSentence.text}}
    </div>

  </div>
  <div
    v-else
    class="sentence-input-container">
    <div class="date-header pl-2 pt-1 shadow">
        {{today}}
    </div>
    <textarea
        maxlength="256"
        class="mx-auto h-6 focus:outline-none focus:shadow resize-none h-16 p-3 pt-9"
        id="sentence-input"
        v-model="sentence"/>
   <button class="p-2 my-2 bg-latte border rounded" @click="submitSentence">Submit</button>
   <hr/>
   <h3 class="text-xl">Previous daily sentences</h3>
  </div>
  <div class="sentence-container">
  <Journal />
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
import Journal from '../components/Journal.vue';

export default {
    name: 'Home',
    components: {
        SentenceCard,
        Journal,
    },
    data: () => ({
        sentence: 'July 25',
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

<style lang="scss">
@import '../styles.scss';
.home {
  font-family: 'Cedarville Cursive', cursive;
}

.date-header {
  width: 50%;
  font-family: 'Cedarville Cursive', cursive;
  display: block;
  font-size: 2rem;
  background-image: repeating-linear-gradient($latte 0px, $latte 28px, $avocadoToast 31px);
  line-height: 31px;
  margin: auto;
}

#sentence-input {
  width: 50%;
  font-family: 'Cedarville Cursive', cursive;
  display: block;
  font-size: 2rem;
  background-image: repeating-linear-gradient($latte 0px, $latte 30px, $avocadoToast 31px);
  line-height: 31px;
  height: 16rem;
}

.sentence-container {
  margin-top: 1rem
}

</style>
