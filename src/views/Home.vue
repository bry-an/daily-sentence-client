<template>
    <section class="home">
            <h1 class="text-6xl text-center mt-8">My Daily Sentence</h1>
            <div class="mt-12">
           <SentenceTodayEditor />
           </div>
      </section>
</template>

<script>
import SentenceTodayEditor from '../components/SentenceTodayEditor.vue';

export default {
    name: 'Home',
    components: {
        SentenceTodayEditor,
    },
    data() {
        return {
            sentenceText: '',
        };
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
</style>
