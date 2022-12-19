<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <div class="col-1" :onclick="historyBack">
          <q-icon name="arrow_back_ios" size="32px" />
        </div>
        <div class="col-10" style="text-align: center;">
          <div class="text-h5">지식맵</div>
        </div>
        <div class="col-1">
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <div v-html="foo"></div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="js">
import { historyBack } from "@/helpers/utils"
import axios from 'axios'

export default {
  name: 'knowledgeMap',
  data() {
    return {
      foo: null,
      historyBack
    }
  },
  mounted() {
    const parser = new DOMParser();
    this.foo = axios.get(`${process.env.VUE_APP_URL}/assets/questions/00_poetry/M1.html`).then(res => {this.foo = res.data; console.log(parser.parseFromString(res.data, 'text/html'));});
  }
}
</script>

<style scoped lang="scss">
@import "http://localhost:8080/assets/questions/00_poetry/M1_style.css"
</style>
