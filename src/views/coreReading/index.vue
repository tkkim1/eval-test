<template>
  <splash v-show="isLoading" title="코어독해" />
  <q-layout v-show="!isLoading" view="hHh lpR fFf">
    <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <div class="col-1" :onclick="historyBack">
          <q-icon name="arrow_back_ios" size="32px" />
        </div>
        <div class="col-10" style="text-align: center;">
          <div class="text-h5">코어 독해</div>
        </div>
        <div class="col-1">
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page v-if="(!isKreadVisible)" class="q-pa-md">
        <p v-html="data?.content"></p>
        <div style="width: 100%; text-align: right;">
          <q-btn rounded label="읽기 완료" color="primary" size="lg" style="width: 300px" :onclick="stopTimer" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
  <modalLayer v-if="store.visibleModal" :width="isKreadVisible ? '90%' : '400px'">
    <!-- <VideoTest /> -->
    <div v-if="isKreadVisible" style="height: calc(100vh - 100px);">
      <q-badge rounded color="#abacad" label="비문학 지문" style="background-color: #abacad;padding: 5px 20px;" />
      <div style="color:#7ab4e7; width:100%;display: inline-flex;justify-content: center;font-size: 30px;">
        <div>Kread </div>
        <div style="background-color: #7ab4e7;color: white; border-radius: 16px;margin-left: 10px; padding:0 20px ;">
          {{ data?.kread }}</div>
      </div>
      <div style="color:black; width:100%;justify-content: center;font-size: 30px;">
        <div style="text-align: center;">{{ data?.title }}</div>
        <div style="font-size: 16px;text-align: center;">
          이번지문을 읽기 위해 권장되는 시간은 <span style="color:#7ab4e7">{{ data?.baseTime }}</span>입니다.</div>
      </div>
      <div style="width: 100%; height: calc(100vh - 340px);; display: flex; justify-content: center;">
        <div style="width: 70%; height: 100%;">
          <wordCahrt :chartText="(data.content?.replaceAll('br', ''))" />
        </div>
      </div>
      <div style="width: 100%;  display: flex; justify-content: center; margin-bottom: 20px;">
        <div class="word-chart_item">
          글자수
          <div>{{ data.item?.letter }}</div>
        </div>
        <q-separator vertical inset />
        <div class="word-chart_item">
          문단수
          <div>{{ data.item?.paragraph }}</div>
        </div>
        <q-separator vertical inset />

        <div class="word-chart_item">
          문장수
          <div>{{ data.item?.sentence }}</div>
        </div>

        <q-separator vertical inset />
        <div class="word-chart_item">
          단어수
          <div>{{ data.item?.word }}</div>
        </div>
        <q-separator vertical inset />
      </div>
      <div style="width: 100%;  display: flex; justify-content: center;">
        <q-btn rounded label="읽기 시작" color="primary" size="lg" style="width: 300px" :onclick="startTimer" />
      </div>
    </div>
    <div v-if="!isKreadVisible">
      <div style="width: 100%;  display: flex; justify-content: center;">
        <div class="text-h5">{{ time }}</div><br />
      </div>
      <div style="width: 100%;  display: flex; justify-content: center;">
        <div>표준 읽기 시간 <span style="color:#7ab4e7">{{ data?.baseTime }}</span> </div>
      </div>
      <div style="width: 100%;  display: flex; justify-content: center;">
        <img src="@/assets/images/symbols/clock.png" alt="splash" style="width: 250px; height: 250px;" />
      </div>
      <div style="width: 100%;  display: flex; justify-content: center;">
        표준 읽기 시간보다 {{ diffTime > 0 ? diffTime + '초 빨리' : (diffTime * -1) + '초 늦게' }} 읽었네요!<br />
        지문을 분석하며 문제를 풀어보아요.
      </div>
      <br />
      <div style="width: 100%;  display: flex; justify-content: center;">
        <q-btn rounded label="지문 분석 시작" color="primary" size="lg" style="width: 200px" :onclick="startTimer" />
      </div>
    </div>
  </modalLayer>
</template>

<script setup>
import { historyBack } from "@/helpers/utils"
import splash from "@/components/template/splash.vue"
import { ref, onMounted, onUnmounted } from "vue";
import { DialogStore } from "@/store/modules/dialog";
import modalLayer from '@/components/layouts/layer/modalLayer.vue';
import wordCahrt from '@/components/chart/wordCahrt.vue';
import { getCoreReacdingApi } from "@/api/modules/qbank";
import moment from "moment";

// 학습준비화면 시간
const loadingTime = 1000;
const store = DialogStore();
const isLoading = ref(null);
const isKreadVisible = ref(null);
const data = ref(null);
const diffTime = ref(null);
let startTime;
let baseTime;
const time = ref(null);

onMounted(() => {
  isLoading.value = true;
  isKreadVisible.value = false;
  setTimeout(() => {
    getCoreReacdingApi({}, (rs) => {
      isLoading.value = false;
      isKreadVisible.value = true;
      store.openModal(true);
      data.value = { ...rs, baseTime: moment('2022-10-01 00:00:00').add(rs.time, 's').format('m분ss초') };
    })
  }, loadingTime)
})

const startTimer = () => {
  isKreadVisible.value = false;
  startTime = moment();
  baseTime = moment().add(data.value.time, "s")
  store.openModal(false);
}
const stopTimer = () => {
  store.openModal(true);
  time.value = moment(moment() - startTime).format('mm분 ss초');
  diffTime.value = Math.round(moment.duration(baseTime.diff(moment())).asSeconds())
}

onUnmounted(() => {
  isLoading.value = true;
  isKreadVisible.value = true;
  store.openModal(false);
})
</script>

<style scoped lang="scss">
.word-chart_item {
  padding: 0px 20px;
  text-align: center;
}
</style>
