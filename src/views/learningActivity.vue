<template>
    <readingContextTemp />

    <section class="tray">
        <multipleChoiceTemp v-if="dummyData.typeCode == $CODE.QBANK.PROBLEM.TYPE.CHOICE" />
        <essayTemp v-if="dummyData.typeCode == $CODE.QBANK.PROBLEM.TYPE.ESSAY" />
        <dragdropTemp v-if="dummyData.typeCode == $CODE.QBANK.PROBLEM.TYPE.DRAGDROP" />
        <shortAnswerTemp v-if="dummyData.typeCode == $CODE.QBANK.PROBLEM.TYPE.SHORT_ANSWER" />
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';
import readingContextTemp from '@/components/template/readingContextTemp.vue';
import multipleChoiceTemp from '@/components/template/multipleChoiceTemp.vue';
import dragdropTemp from '@/components/template/dragdropTemp.vue';
import shortAnswerTemp from '@/components/template/shortAnswerTemp.vue';
import essayTemp from '@/components/template/essayTemp.vue';

export default defineComponent({
    name: 'learningActivity',
    components: {
        readingContextTemp,
        multipleChoiceTemp,
        dragdropTemp,
        shortAnswerTemp,
        essayTemp,
    },
    setup() {
        // const store = useStore();

        let dummyData = ref({
            typeCode: '04',
        });

        return {
            dummyData,
        };
    },
});
</script>

<style scoped lang="scss">

</style>
