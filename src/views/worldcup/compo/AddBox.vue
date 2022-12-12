<template>
  <div>
    <input type="text" name="tbox" id="tbox" placeholder="input text..." />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
  export default {
    name: 'addBox',
    components: {},
    data() {
      return {
        sampleData: 'sampleData',
      }
    },
    methods: {
      submit() {
        alert('submit !!!')
      },
    },
  }
</script>

<style scoped></style>
