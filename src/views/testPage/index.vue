<template>
  <q-header reveal elevated class="bg-white text-black">
    <q-toolbar>
      <div class="col-1" :onclick="historyBack">
        <q-icon name="arrow_back_ios" size="32px" />
      </div>
      <div class="col-10" style="text-align: center;">
        <div class="text-h5">학습 분석 리포트</div>
      </div>
      <div class="col-1">
      </div>
    </q-toolbar>
  </q-header>
  <q-footer bordered class="bg-white text-primary">
    <BottomLayout :timer-enable="isReady" sec="0" :tkey="tab" @onChangeProblems="onChangeProblems" />
  </q-footer>
  <q-page-container>
    <q-page class="q-pa-md">
      <!-- <div class="border-title_box_right" id="bill_to">
          <div id="content">
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            Stuff goes here.<br> For example, a bill-to address
            a
            asdqweq
            eqw

            dhyyt
            t
            a
            asdqweq
            eqw

            dhyyt
            t
          </div>
          <div class="border-title">Bill To</div>
        </div> -->
      <!-- <template v-for="(item, idx) in quesHeader" :key="`quesHeader_${idx}`">
          <template v-if="dataToParse.getHeaderCheckType(item, 'header') === 'textBox'">


          </template>
        </template> -->
      <!-- <div class="text-box" v-html="headerHtml"></div> -->
      <div class="row">
        <div class="col" style="height: calc(100vh - 150px)">
          <q-scroll-area visible style="height:100%; padding:0px 10px;">
            <qbankHeaderVue :v-if="questionHeader" :questionHeader="questionHeader" />
          </q-scroll-area>
        </div>
        <div class="col" style="padding: 10px;">
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
            align="justify">
            <template v-for="(item, index) in problems">
              <q-tab :name="item.index" :label="item.index" />
            </template>
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <template v-for="(item, index) in problems">
              <q-tab-panel :name="item.index">
                <div>
                  <strong v-if="important == true" class="template__important">중요해요</strong>
                  <!-- <div class="marking-wrong" :class="[markingClass, important == true ? 'withImportant' : '']"></div> -->
                  <div
                    :class="index === 1 ? 'marking-correct' : index === 2 ? 'marking-hcorrect' : index === 3 ? 'marking-wrong' : 'marking-fwrong'">
                  </div>
                  <h5 class="template__title">
                    <span v-if="item?.problemNo" class="template__title__num">{{ item?.problemNo
                    }}.</span>
                    <span v-html="item?.question"></span>
                    <div v-if="item?.directionText" class="direction__frame">
                      <p class="direction__textbox" v-html="item?.directionText"
                        :style="[textAlign == 'left' ? 'text-align: left' : 'text-align: center']"></p>
                    </div>
                  </h5>
                </div>

              </q-tab-panel>

            </template>

          </q-tab-panels>
        </div>
      </div>
    </q-page>
  </q-page-container>

</template>

<script setup>
import { getQbankApi } from "@/api/modules/qbank";
import dataToParse from "@/helpers/qbankParser/dataParse";
import { styleTags } from "@/helpers/qbankParser/styleTags";
import { historyBack } from "@/helpers/utils"
import { onMounted, ref } from "vue";
import qbankHeaderVue from "@/components/qbank/qbankHeader.vue";
import BottomLayout from "@/components/layouts/bottom/bottomLayout.vue";
const questionHeader = ref(null);
const problemInfo = ref(null);
const problems = ref(null);
const tab = ref('');
const important = ref(true);
const markingClass = ref('a');
const isReady = ref(false);


onMounted(() => {
  const callBack = (rs) => {
    // console.log('getHeaderTitle');
    // console.log(dataToParse.getHeaderTitle(rs));
    // console.log('getQuestionHeader');
    // console.log(dataToParse.getQuestionHeader(rs));
    console.log(rs);
    console.log('getQuestion');
    console.log(dataToParse.getQuestion(rs));
    console.log('getAnswer');
    console.log(dataToParse.getAnswer(rs));
    console.log('getAnswerExplain');
    console.log(dataToParse.getAnswerExplain(rs));
    console.log('getListen');
    console.log(dataToParse.getListen(rs));
    console.log('getHeaderListen');
    console.log(dataToParse.getHeaderListen(rs));
    console.log('getQuestionBody');
    console.log(dataToParse.getQuestionBody(rs));

    // let headerHtml = '';
    let headerObj = dataToParse.getQuestionHeader(rs);
    questionHeader.value = dataToParse.getQuestionHeader(rs);
    problemInfo.value = {
      problemNo: 20,
      question: dataToParse.getQuestion(rs),
      directionText: ""
    }
    problems.value = [
      { index: '1', problemNo: 1, seq: 'k001', done: false, question: dataToParse.getQuestion(rs), },
      { index: '2', problemNo: 2, seq: 'k002', done: true, question: dataToParse.getQuestion(rs) },
      { index: '3', problemNo: 3, seq: 'k003', done: true, question: dataToParse.getQuestion(rs) },
      { index: '4', problemNo: 4, seq: 'k004', done: false, question: dataToParse.getQuestion(rs) }
    ]
    tab.value = '1';
    isReady.value = true;

  }
  getQbankApi({ version: '1.00.01', problemId: '382781' }, callBack)
})

const onChangeProblems = (val) => {
  if (val === 'next') {
    tab.value = (Number(tab.value) + 1) + "";
  } else if (val === 'prev') {
    tab.value = (Number(tab.value) - 1) + "";
  }
} 
</script>

<style scoped lang="scss">
.text-box :deep {
  img {

    position: relative;
    top: 4px;
  }

  p {
    margin-bottom: 0px;
  }
}


.text-box {
  border: 1px solid;
  padding: 10px;
}

.marking {


  &-correct {
    background-image: url('@/assets/images/correct.png');
    background-position: 50%;
    background-size: cover;
    width: 90px;
    height: 80px;
    position: fixed;
    top: 128px;
    left: 50%;

  }

  &-hcorrect {
    background-image: url('@/assets/images/hcorrect.png');
    background-position: 50%;
    background-size: cover;
    width: 90px;
    height: 80px;
    position: fixed;
    top: 128px;
    left: 50%;

  }

  &-wrong {
    background-image: url('@/assets/images/wrong.png');
    background-position: 50%;
    background-size: cover;
    width: 90px;
    height: 80px;
    position: fixed;
    top: 128px;
    left: 50%;

  }

  &-fwrong {
    background-image: url('@/assets/images/fwrong.png');
    background-position: 50%;
    background-size: cover;
    width: 90px;
    height: 80px;
    position: fixed;
    top: 128px;
    left: 50%;

  }
}

/* .border-title_box_top {
  border: #3c5a86 1px solid;


  // display: inline-flex;
  .border-title {
    font-size: 16px;
    position: relative;
    margin: auto;
    top: -14px;
    // margin-left: -20px;
    display: inline;
    background-color: white;
  }
}

.border-title_box_left {
  border: #3c5a86 1px solid;

  display: inline-flex;

  .border-title {
    font-size: 16px;
    position: relative;
    margin: auto;
    top: -8px;
    margin-left: -20px;
    margin-right: 10px;
    display: inline;
    background-color: white;
    height: fit-content;
  }
}

.border-title_box_right {
  border: #3c5a86 1px solid;

  display: inline-flex;

  .border-title {
    font-size: 16px;
    position: relative;
    margin: auto;
    top: -8px;
    margin-left: 10px;
    margin-right: -20px;
    display: inline;
    background-color: white;
    height: fit-content;
  }
} */
</style>
