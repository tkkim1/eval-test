<script setup>
  import {ref, computed, defineEmits} from 'vue'

  const props = defineProps({
    name: String,
    birth: Number,
  })
  const age = computed(() => 2021 - props.birth)

  const emit = defineEmits(['test-emit'])

  // const onSubmitToUp = () => {
  //   console.log('----onSubmitToUp----')
  //   emit('testEmit', 'test123')
  // }
</script>

<template>
  <h1>baby</h1>
  name : {{ name }} birth : {{ birth }} age : {{ age }}
  <button @click="emit('test-emit', props.name)">emit 전달</button>
</template>

<style scoped></style>
