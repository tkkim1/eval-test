<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <div class="col-1" :onclick="historyBack">
          <q-icon name="arrow_back_ios" size="32px" />
        </div>
        <div class="col-10" style="text-align: center;">
          <div class="text-h5">마이페이지</div>
        </div>
        <div class="col-1">
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        마이페이지
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { historyBack } from "@/helpers/utils"

</script>

<style scoped lang="scss">

</style>
