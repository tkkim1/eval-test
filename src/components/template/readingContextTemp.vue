<template>
    <section class="contents">지문</section>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'readingContextTemp',
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
