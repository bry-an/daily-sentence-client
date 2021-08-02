<template>
<section class="mt-1">
    <h1 class="text-6xl text-center font-source">Earlier Daily Sentences</h1>
    <sentence-card
      v-for="sentence in sentences"
      :key="sentence._id"
      :sentence="sentence"
    >
    </sentence-card>
</section>
</template>

<script>
import { mapGetters } from 'vuex';
import SentenceCard from '../components/SentenceCard.vue';

export default {
    name: 'PreviousSentences',
    components: {
        SentenceCard,
    },
    computed: {
        ...mapGetters(['sentences']),
    },
    mounted() {
        this.$store.dispatch('fetchSentences');
    },
};
</script>
