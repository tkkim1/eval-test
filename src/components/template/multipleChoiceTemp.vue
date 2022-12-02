<template>
    <section class="contents">문항 유형 [선택형]</section>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'multipleChoiceTemp',
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
