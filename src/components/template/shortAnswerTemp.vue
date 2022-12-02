<template>
    <section class="contents">문항 유형 [단답형]</section>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'shortAnswerTemp',
    setup() {
        // const store = useStore();

        let data = ref({});

        return {
            data,
        };
    },
});
</script>

<style scoped lang="scss">

</style>
