<template>
  <div>
    <h1>WorldCup 일정/결과</h1>
    <AddBox />
    <CompetitionItem />
  </div>
</template>

<script>
  import AddBox from './compo/AddBox.vue'
  import CompetitionItem from './compo/CompetitionItem.vue'

  export default {
    name: 'WorldCup',
    components: {CompetitionItem, AddBox},
    data() {
      return {
        // sampleData: 'sampleData',
      }
    },
    methods: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
  }
</script>

<style scoped></style>
