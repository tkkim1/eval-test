<template>
  <div>
    <label for="item">
      <input type="checkbox" name="item" id="item" />{{ sampleData }}
    </label>
    <button @click="onDelete">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'CompetitionItem',
    components: {},
    data() {
      return {
        sampleData: 'sampleData123',
      }
    },
    methods: {
      onDelete() {
        alert('onDelete~!!')
      },
    },
  }
</script>

<style scoped></style>
