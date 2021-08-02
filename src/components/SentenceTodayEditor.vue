<template>
      <div
        v-if="!displayEditWindow"
        class="flex flex-col mx-auto">
        <h2 class="text-4xl text-center mt-4">
          {{formattedToday}}
        </h2>

        <div class="mt-4 text-3xl justify-center text-center flex items-center">
          <span class="mr-2">{{sentenceTodayText}}</span>
        <span @click="editIconClick" class="cursor-pointer"><PencilIcon /></span>
        </div>
      </div>
      <div v-else class="w-1/2 mx-auto">
        <div class="date-header pl-2 pt-1 shadow">
            {{formattedToday}}
        </div>
        <textarea
            maxlength="256"
            class="mx-auto h-6 focus:outline-none focus:shadow resize-none h-16 p-3 pt-9 w-full"
            id="sentence-input"
            v-model="sentenceText"/>
            <div class="w-1/5 m-auto flex justify-center">
               <button
                    class="py-2 px-3 my-2 bg-latte border rounded
                        font-source w-full text-lg apperance-none focus:ring-2 focus:ring-blue"
                    @click="submitSentence">
                    Submit
                </button>
            </div>
    </div>

</template>

<script>
import { format } from 'date-fns';
import { mapGetters } from 'vuex';
import propOr from 'ramda/src/propOr';
import PencilIcon from './icons/Pencil.vue';

export default {
    name: 'TodaySentence',
    components: { PencilIcon },
    data() {
        return {
            sentenceText: '',
            isEditing: false,
        };
    },
    computed: {
        ...mapGetters(['sentenceToday', 'hasSentenceToday']),
        formattedToday() {
            return format(new Date(), 'MMMM do yyyy');
        },
        displayEditWindow() {
            return this.hasSentenceToday
                ? this.isEditing === true
                : true;
        },
        sentenceTodayText() {
            return propOr('', 'text', this.sentenceToday);
        },
    },
    methods: {
        editIconClick() {
            this.isEditing = true;
            // add existing sentence text to input field
            this.sentenceText = this.sentenceTodayText;
        },
        submitSentence() {
            if (this.hasSentenceToday) {
                return this.$store.dispatch('updateSentence', { id: this.sentenceToday.id, text: this.sentenceText })
                    .then((res) => {
                        if (res.status === 200) {
                            this.isEditing = false;
                        }
                    });
            }
            return this.$store.dispatch('createSentence', { text: this.sentenceText });
        },
        escapeListener(event) {
            if (event.key === 'Escape') {
                this.isEditing = false;
            }
        },
    },
    mounted() {
        window.addEventListener('keyup', this.escapeListener);
    },
    destroyed() {
        window.removeEventListener('keyup', this.escapeListener);
    },
};

</script>
<style lang="scss">
@import '../styles.scss';
#sentence-input {
  font-family: 'Cedarville Cursive', cursive;
  display: block;
  font-size: 2rem;
  background-image: repeating-linear-gradient($latte 0px, $latte 30px, $avocadoToast 31px);
  line-height: 31px;
  height: 16rem;
}

.date-header {
  font-family: 'Cedarville Cursive', cursive;
  display: block;
  font-size: 2rem;
  background-image: repeating-linear-gradient($latte 0px, $latte 28px, $avocadoToast 31px);
  line-height: 31px;
  margin: auto;
}
.sentence-container {
  margin-top: 1rem
}
</style>
