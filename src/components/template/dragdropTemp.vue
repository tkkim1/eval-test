<template>
    <section class="contents">
        문항 유형 [드래그앤 드랍]

        <router-link to="/dragula">View Library 'dragula'</router-link>
    </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'dragdropTemp',
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
a {
    display: block;
    margin: size(50);
    text-decoration: underline;
}
</style>
