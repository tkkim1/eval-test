<template>
  <div v-html="head"></div>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <div class="col flex">
          <div class="text-h8 header-text">KREAD 진단평가</div>
          <div style="flex: 0.6; display: inline-flex; align-items: center">
            <q-linear-progress stripe rounded size="16px" :value="value" color="grey-7" />
          </div>
        </div>
        <div class="col text-right">
          <q-chip>
            {{ user_name }}
          </q-chip>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-px-md">
        <div class="row">
          <div class="col">
            <q-scroll-area style="height: 90vh; max-width: 50vw; padding: 30px">
              <template v-bind:key="index" v-for="(exam, index) in exam.exam_list">
                <div v-if="index === eIdx" v-html="exam.body"></div>
              </template>
            </q-scroll-area>
          </div>
          <div class="bg-grey-4" style="width: 0.5rem"></div>
          <div class="col flex" style="padding: 30px">
            <div style="width:100%">
              <template v-bind:key="eIndex" v-for="(exam, eIndex) in exam.exam_list">
                <template  v-bind:key="qIndex" v-for="(question, qIndex) in exam.questions">
                  <div v-if="eIndex === eIdx">
                    <div v-if="qIdx === 0 && qIndex === qIdx" v-html="exam.title"></div>
                    <div
                      class="question"
                      v-if="qIndex === qIdx"
                      v-html="question"
                    ></div>
                  </div>
                </template>
              </template>
              
            </div>
            <div class="footer">
              <div v-if="topic_num === 9 && qIdx === 2" style="display:flex; justify-content: center">
                <q-btn
                  color="primary"
                  :size="md"
                  :label="`채점하기`"
                  @click="submitScore"
                />
              </div>
              <div v-if="topic_num !== 9 || qIdx !== 2" style="display:flex; justify-content: end">
                <q-btn outline color="primary" icon="arrow_forward" @click="getNextQuestion"/>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { GlobalStore } from "@/store";
import { DialogStore } from '@/store/modules/dialog';
import data from '@/json/questions/data.json';

export default {
  name: "knowledgeMap",
  setup() {
    let exam = reactive({
      exam_list: []
    });
    let head = ref(null);
    let eIdx = ref(0);
    let qIdx = ref(0);
    let value = ref(0.1);
    let topic_num = ref(0);
    let submission = [];
    let final_result = [];
    let result = [];
    let kread = 1200;
    let problem_id = 1;
    let is_marking = false;
    const globalStore = GlobalStore();
    const alertStore = DialogStore();
    let user_name = globalStore.getUserInfo.name;

    const getExamElements = (str) => {
      exam.exam_list = [];
      const parser = new DOMParser();
      const examList = parser.parseFromString(str, "text/html").documentElement.querySelectorAll(".exam");
      //헤더 css적용
      head.value = parser.parseFromString(str, "text/html").documentElement.querySelector("head").innerHTML;
      //body
      examList.forEach(val => {

        let title = '';
        let body = '';
        let questions = [];
        
        title = val.querySelector(".title").innerHTML;
        body = val.querySelector(".body").innerHTML;
        const arr = val.querySelectorAll(".question");
        
        arr.forEach((element, index) => {
          if(is_marking) {
            const items = element.querySelectorAll(".item");
            const examNm = data.find(v => v.topic === String(topic_num.value).padStart(2, '0')).exam_nm;
            const submissions = final_result.find(v => v.exam_nm === examNm && v.problem_id === index+1).submission;

            items.forEach((el, idx) => {
              if(submissions.indexOf(idx+1) > -1) {
                el.className = 'item active';
              }
            })
          }
          questions.push(element.innerHTML);
        });

        exam.exam_list.push({
          title,
          body,
          questions
        })
      })
    };

    const getNextQuestion = (e) => {
      e.preventDefault();
      e.stopPropagation();

      // if(submission.length === 0) {
      //   alertStore.openAlertDialog({
      //     message: '정답을 선택해 주세요',
      //     buttonText: '확인'
      //   })
      //   return;
      // }
      
      //점수
      if(!is_marking) {
        const topicNo = String(topic_num.value).padStart(2, '0');
        const findData = data.find(v => v.topic === topicNo);
        result.push({
          exam_nm: findData.exam_nm,
          problem_id: problem_id,
          submission: [...submission],
          is_right: checkIsRight()
        })
        final_result = [...final_result, ...result];
        console.log(result);
      }
      
      /**
       * 지문, 문제 paging
       */
      //다음 문제
      if(qIdx.value < exam.exam_list[eIdx.value].questions.length - 1) {
        qIdx.value++;
        problem_id++;
      }else {
        //다음 지문
        if(exam.exam_list.length > 0) {
          if(exam.exam_list.length > eIdx.value + 1) {
            problem_id++;
            eIdx.value++;
            qIdx.value = 0;
          }else {
            problem_id = 1;
            if(topic_num.value < 9) {
              //kread 지수 계산
              calcKread();
              value.value = value.value + 0.1;
              topic_num.value++;
              const topic = String(topic_num.value).padStart(2, '0');
              let url = data.find(v => v.topic === topic && v.grade === String(kread)).path;
              axios.get(`${process.env.VUE_APP_URL}` + url).then((res) => {
                eIdx.value = 0;
                qIdx.value = 0;
                getExamElements(res.data);
              })
            }
          }
          
        }
      }
      submission = [];
      result = [];
    }

    /**
     * kread 점수 계산
     */
    const calcKread = () => {
      const topicNo = String(topic_num.value).padStart(2, '0');
      const findData = data.find(v => v.topic === topicNo);
      let rightNum = final_result.filter(v => v.exam_nm === findData.exam_nm && v.is_right).length;

      if(topic_num.value === 0) {
        const grade = globalStore.userInfo.grade;

        switch (rightNum) {
          case 9:
          case 8:
            kread = grade===3?1600:grade===2?1500:1400;
            break;
          case 7:
          case 6:
            kread = grade===3?1550:grade===2?1450:1350;
            break;
          case 5:
            kread = grade===3?1500:grade===2?1400:1300;
            break;
          case 4:
          case 3:
            kread = grade===3?1450:grade===2?1350:1250;
            break;
          case 2:
          case 1:
          case 0:
            kread = grade===3?1400:grade===2?1300:1200;
            break;
        }
      }else {
        if(rightNum >= 2) {
          if(kread < 1600) {
            kread += 50;
          }
        } else if(rightNum === 0) {
          if(kread > 1200) {
            kread -= 50;
          }
        }
      }
    }

    /**
     * 숫자 특수문자 변환
     */
    const changeNumber = (text) => {
      if(text.indexOf('⑤') > -1) {
        return 5;
      } else if(text.indexOf('④') > -1) {
        return 4;
      } else if(text.indexOf('③') > -1) {
        return 3;
      } else if(text.indexOf('②') > -1) {
        return 2;
      } else if(text.indexOf('①') > -1) {
        return 1;
      }
    }

    /**
     * 정오답 여부 체크
     */
    const checkIsRight = () => {
      const answer = document.getElementsByClassName('answer');
      let answerArr = [];
      let flag = true;

      for(let i=0; i<answer.length; i++) {
        const num = changeNumber(answer[i].innerText);
        answerArr.push(num);
      }
      
      if(submission.length === answerArr.length) {
        submission.map(v => {
          if(answerArr.indexOf(v) < 0) {
            flag = false;
          }
        })
      }else {
        flag = false;
      }
      return flag;
    }

    const submitScore = () => {

      // if(submission.length === 0) {
      //   alertStore.openAlertDialog({
      //     message: '정답을 선택해 주세요',
      //     buttonText: '확인'
      //   })
      //   return;
      // }
      window.removeEventListener('click', itemClickListener);

      const topicNo = String(topic_num.value).padStart(2, '0');
      const findData = data.find(v => v.topic === topicNo);

      final_result.push({
        exam_nm: findData.exam_nm,
        problem_id: problem_id,
        submission: [...submission],
        is_right: checkIsRight()
      });

      console.log(final_result);

      is_marking = true;
      eIdx.value = 0;
      qIdx.value = 0;
      topic_num.value = 0;
      let url = data.find(v => v.exam_nm === final_result[0].exam_nm).path; 

      axios
        .get(`${process.env.VUE_APP_URL}` + url)
        .then((res) => {
            getExamElements(res.data);
        });
    }

    const itemClickListener = (e) => {
      e.path.map(el => {
        //다중 선택 방지  
        var elements = document.querySelectorAll('.active');

        if(elements && elements.length > 1) {
          elements.forEach(data => {
            if(data.innerText.indexOf(e.target.innerText) < 0) {
              data.classList.remove('active');
              submission.shift();
            }
          })
        }
        //정답 클릭 이벤트
        if(el.className?.indexOf('item') > -1) {
          el.classList.toggle('active');
          if (el.className.indexOf('active') < 0) {
            const remove = changeNumber(e.target.innerText);
            const idx = submission.indexOf(remove);
            submission.splice(idx, 1);
          }else {
            submission.push(changeNumber(el.innerText));
          }
        }
      })
    }

    onMounted(() => {
      let url = data.find(v => v.topic === '00' && v.grade === 'M' + globalStore.userInfo.grade).path; 

      axios
        .get(`${process.env.VUE_APP_URL}` + url)
        .then((res) => {
            getExamElements(res.data);
            window.addEventListener('click', itemClickListener)
        });
    })

    return {
      //variables
      exam,
      head,
      eIdx,
      qIdx,
      value,
      topic_num,
      result,
      submission,
      kread,
      user_name,
      is_marking,
      //function
      getExamElements,
      getNextQuestion,
      calcKread,
      changeNumber,
      checkIsRight,
      submitScore,
      itemClickListener
    };
  }
};
</script>

<style scoped lang="scss">
.header-text {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

.hello {
  width: 100%;
  height: 500px;
}

.read-the-docs {
  color: #888;
}

.chart-modal {
  @include center-element;
}

.question {
  &:deep(.item) {
    cursor: pointer;
  }
  &:deep(.active) {
    background-color: #e4e4e4;
    padding: 0.1rem;
    border-radius: 0.2rem;
  }
  &:deep(.comment) {
    display: none;
  }
  &:deep(.comment-active) {
    cursor: pointer;
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
}
</style>
