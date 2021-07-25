<template>
<div class="sentence-card">
    <span class="date">{{formattedDate}}</span>
    <div class="text-lg">
        {{ text }}
    </div>
</div>
</template>

<script>
import { propOr } from 'ramda';
import { format } from 'date-fns';

export default {
    name: 'SentenceCard',
    props: {
        sentence: {
            type: Object,
            required: true,
            default: () => ({}),
        },
    },
    computed: {
        text() {
            return propOr('', 'text', this.sentence);
        },
        formattedDate() {
            const createdAt = propOr(new Date(), 'createdAt', this.sentence);
            return format(new Date(createdAt), 'MM/dd/yyyy');
        },
    },
};
</script>

<style lang="scss">
@import "../styles.scss";

.sentence-card {
    width: 50%;
    margin: 3rem auto;
}
.box {
    background-color: $paprika;
    color: $coffee;
}

.date {
    font-weight: bold;
    font-size: 1.5rem;
}

</style>
