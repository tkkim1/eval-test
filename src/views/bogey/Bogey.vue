<script setup>
  import {ref} from 'vue'
  import Baby from './Baby.vue'

  const name = ref()
  const birth = ref()

  const checkEmit = (a) => {
    console.log('--test-emit----',a)
  }
</script>

<template>
  <h1>Bogey</h1> 

  <input type="text" v-model="name" placeholder="이름 좀.." />
  <input type="number" v-model="birth" placeholder="몇년생인지?" />
  <Baby @test-emit="checkEmit" :name="name" :birth="birth" />
</template>

<style scoped></style>
