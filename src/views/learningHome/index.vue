<template>
  <q-header reveal class="bg-white text-black" height-hint="98">
    <q-toolbar>
      <div class="row" style="width:100%;">
        <div class="col" style="font-size: 20px;">
          <b>독해트레이닝</b>
        </div>
        <div class="col-6">
        </div>
        <div class="col" style="text-align: right;">
          <q-icon :name="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" @click="$q.fullscreen.toggle()"
            size="30px" />
          <q-icon name="o_notifications" size="30px" style="margin:0 0 0 20px;" />
          <q-icon name="o_settings" size="30px" style="margin:0 20px;" />
          <q-icon name="o_exit_to_app" size="30px" :onclick="logOut" />
        </div>
      </div>
    </q-toolbar>
  </q-header>
  <q-drawer class="bg-grey-2" show-if-above style="border-radius: 30px;">
    <q-list padding>
      <router-link to="/learninghome">
        <div class="menu-item">
          <q-icon name="home" size="35px" style="margin-right: 10px;"></q-icon> 홈
        </div>
      </router-link>
      <router-link to="/knowledgemap">
        <div class="menu-item">
          <q-icon name="menu_book" size="35px" style="margin-right: 10px;"></q-icon>지식맵
        </div>
      </router-link>
      <router-link to="/incorrectnote">
        <div class="menu-item">
          <q-icon name="content_paste" size="35px" style="margin-right: 10px;"></q-icon>오답노트
        </div>
      </router-link>
      <router-link to="/analysisreport">
        <div class="menu-item">
          <q-icon name="leaderboard" size="35px" style="margin-right: 10px;"></q-icon>학습 분석 리포트
        </div>
      </router-link>
      <router-link to="/mypage">
        <div class="menu-item">
          <q-icon name="person" size="35px" style="margin-right: 10px;"></q-icon>마이 페이지
        </div>
      </router-link>
      <router-link to="/test">
        <div class="menu-item">
          <q-icon name="person" size="35px" style="margin-right: 10px;"></q-icon>테스트 페이지
        </div>
      </router-link>
      <!-- <div class="menu-item">
          <q-icon name="exit_to_app" size="35px" style="margin-right: 10px;"></q-icon>Exit
        </div> -->
    </q-list>
  </q-drawer>
  <q-page-container>
    <div class="row" style="width:100%;  padding-left: 20px;">
      <div class="col-6 home-content-box">
        <div class="text-h5">
          <b>
            안녕하세요, 대교님
          </b>
        </div>
        <div class="text-h5" style="color: #547cfa;">
          <b>
            오늘의 학습을 진행해 주세요.
          </b>
        </div>
        <br />
        <q-item clickable class="bg-grey-2">
          <q-item-section side>
            <q-avatar rounded size="30px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>내일은 <b>추천학습이 예정</b>되어있습니다. <span caption>2022-10-18</span>
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            X
          </q-item-section>
        </q-item>
        <br />
        <div>
          오늘의 학습
        </div>
        <br />
        <q-card>
          <q-card-section>
            <div class="row ">
              <div class="text-h5">
                <b>
                  Lesson <span style="color:#547cfa;font-weight: 600;">49</span>
                </b>
              </div>
              <q-space />
              <router-link to="/corereading">
                <q-btn>학습하기</q-btn>
              </router-link>
            </div>
            <q-linear-progress rounded size="15px" :value="progress" class="q-mt-sm" />
            <br />
            <div>학습내용</div>
            <div class="lesson-box">
              <div class="row">
                <div class="col-4 self-center" style="text-align: center;">
                  <div class="text-h5">
                    문학
                  </div>
                </div>
                <div class="col">
                  <q-chip>현대시</q-chip>달콤하고 기분 좋은 꿈<br />
                  <q-chip>현대시</q-chip>달콤하고 기분 좋은 꿈
                </div>
              </div>
            </div>
            <br />
            <div class="lesson-box">
              <div class="row">
                <div class="col-4 self-center" style="text-align: center;">
                  <div class="text-h5">
                    비문학
                  </div>
                </div>
                <div class="col">
                  <q-chip>현대시</q-chip>달콤하고 기분 좋은 꿈<br />
                  <q-chip>현대시</q-chip>달콤하고 기분 좋은 꿈
                </div>
              </div>
            </div>
          </q-card-section>

        </q-card>
      </div>
      <div class="col-6">
        <div class="column" style="height: calc(100vh - 50px)">
          <div class="col-2">
            <div class="row">
              <div class="col self-center" style="text-align: center;">
                <div class="lesson-box">
                  레벨
                  <div>
                    Lv.2
                  </div>
                </div>
              </div>
              <div class="col self-center" style="text-align: center;">
                <div class="lesson-box">
                  지금까지 읽은 지문
                  <div>
                    52개
                  </div>
                </div>
              </div>
            </div>
            <div class="text-h6" style=" padding:0px 20px;">
              대교님의 학습유형은?
            </div>
          </div>
          <div class="col-2">
            <div class="lesson-box self-center" style="text-align: center;">
              <div class="text-h6" style="">
                😎
              </div>
              <br />
              <div class="text" style="">
                "비문학형"
              </div>
            </div>
          </div>
          <div class="col">
            <barChart />
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { DialogStore } from "@/store/modules/dialog";
import { GlobalStore } from '@/store';
import barChart from "@/components/chart/barChart.vue";
import { useRouter } from "vue-router"
import { ref, onMounted, computed } from 'vue';
import { useQuasar } from 'quasar';

const store = DialogStore();
const globalStore = GlobalStore();
const router = useRouter();
const value = 0.2;
const alert = ref(null);
const progress = 0.3;

const $q = useQuasar();

const chartText = `다문화학습자의 교육을 위해서는 한국어 교육이 이루어져야 기초학습 부진과 학습결손을 면할 수 있으므로 한국어능력향상이 우선 과제이며 이를 해결하기 위해서는 다문화학습자의 한국어 교육을 위한 교수학습 방법과 교재 개발이 필요하다.
  문학지문을 활용한 중학교 한국어 교육은 다문화학습자의 학습동기와 흥미를 유발해주는 효과적인 교수학습 방법이다.가치 있는 문학 작품을 선별하여 중학생의 가치관 형성에 도움을 주는 다문화 관련 문학지문을 선정하고, 작품을 읽고 중요한 낱말의 뜻을 익혀 어휘력을 길러주어, 문장 속에서 단어의 다양한 의미를 이해하여 글의 내용을 파악하는 기초 한국어 교육을 실시한다.
  이와 같은 한국어 교육은 문학 작품을 감상하고 내면화하여 느낌을 말하고 글로 표현하는 과정 속에서 가치관 교육까지 아울러 가능하며, 문학지문 속에 담긴 이야기와 그림을 통해 나라마다 다양한 문화를 비교함으로써 쉽고 재미있는 다문화 교육을 병행할 수 있다.`;
const visibleModal = computed(() => store.visibleModal);
alert.value = false;

const openAlert = () => {
  alert.value = true;
}


const openDialog = () => {
  store.openModal(true);
};

const logOut = () => {

  globalStore.setToken(undefined);
  globalStore.setReToken(undefined);
  router.push('/login')
}


</script>

<style scoped lang="scss">
.menu-box {
  background-color: lightgrey !important;
}

.menu-item {
  font-size: 25px;
  display: flex;
  margin: 20px;
  padding: 10px;
}

.menu-item:hover {
  background-color: gray;
  border-radius: 30px;
  color: white;
}

.home-content-box {
  padding: 10px;
}

.lesson-box {
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
}
</style>
