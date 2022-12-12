// 시험지 템플릿(문제풀이 화면) 
// 시험지 조회 API 호출
// ${this.lcmsApiUrl}/api/v2/qbank/exams?examNmLike=${examCode}&dsSvcVersion=${this.contentVersion}
// → examCode : 유닛리스트(getUnitList) API 호출 결과값으로, 유닛 클릭 이벤트 발생 VUEX에 값 셋팅 후 문제풀이 템플릿에서 사용 
// → contentVersion : main 템플릿 생성 단계에서 ‘콘텐츠 버전 조회 API’ 호출 후 VUEX에 셋팅한 값

// 시험지 정렬

// 개별 문항 컴포넌트에 데이터 전달
// <comp :info="list.info" />

<template>
  <div
    class="container activity-container"
    :class="[isTrayVal == true ? 'tray' : 'notTray']"
  >
    <div
      v-for="(list, index) in examList"
      :key="index"
      :order="list.order"
      :data-index="index"
    >
      <activity-header
        v-if="
          list.order === pageNum &&
          list.typeCode != $CODE.QBANK.PROBLEM.TYPE.RESULT
        "
        :isIntro="list.typeCode == $CODE.QBANK.PROBLEM.TYPE.INTRO"
        :examInfo="list.examNm"
      />
      <template v-if="!isWrongAnswer">
        <progress-bar
          v-if="
            list.typeCode != $CODE.QBANK.PROBLEM.TYPE.INTRO &&
            list.order == pageNum &&
            list.typeCode != $CODE.QBANK.PROBLEM.TYPE.RESULT
          "
          :questionTotalCount="questionTotalCount"
          :questionNumber="
            lessonType != 'TL'
              ? list.typeCode != $CODE.QBANK.PROBLEM.TYPE.INTRO
                ? tempPageNum - 1
                : tempPageNum
              : tempPageNum
          "
        />
      </template>

      <template v-if="list.order === pageNum">
        <intro
          v-if="list.typeCode == $CODE.QBANK.PROBLEM.TYPE.INTRO"
          :info="list.info"
          @startLearning="clickStart(list.qType)"
        ></intro>
        <multiChoice
          v-else-if="
            list.typeCode == $CODE.QBANK.PROBLEM.TYPE.CHOICE_4 ||
            list.typeCode == $CODE.QBANK.PROBLEM.TYPE.CHOICE_5
          "
          :info="list.info"
          @currentProblemId="getCurrentProblemId"
        />
        <multiOX
          v-else-if="list.typeCode == $CODE.QBANK.PROBLEM.TYPE.MULTI_OX"
          :info="list.info"
        />
        <unitResult
          v-else-if="list.typeCode == $CODE.QBANK.PROBLEM.TYPE.RESULT"
        />
      </template>

      <div
        class="btn__wrap"
        :class="[
          list.typeCode != $CODE.QBANK.PROBLEM.TYPE.INTRO &&
          list.typeCode != $CODE.QBANK.PROBLEM.TYPE.KREAD &&
          list.typeCode != $CODE.QBANK.PROBLEM.TYPE.FIND_CONTENTS &&
          list.typeCode != $CODE.QBANK.PROBLEM.TYPE.RESULT &&
          trayState != 'close'
            ? isTrayVal == true
              ? 'btn__wrap--fixed'
              : 'btn__wrap--fixed--white'
            : '',
        ]"
        v-if="list.order == pageNum"
      >
        <template
          v-if="
            list.typeCode != $CODE.QBANK.PROBLEM.TYPE.INTRO &&
            trayState != 'close'
          "
        >
          ...
          <template v-if="!isWrongAnswer">
            <button
              v-if="
                lessonType === 'TL'
                  ? list.order > 1 && trayState != 'close'
                  : list.order > 2 && trayState != 'close'
              "
              type="button"
              class="btn__move btn__move--prev"
              @click.once="clickPrev()"
            >
              PREV {{ list.order }}
            </button>
          </template>
          <!-- 문항검수인 경우, 조건 없이 다음 문항 이동 가능하도록 처리 -->
          <template v-if="IS_QUESTION_INSPECT == true">
            ...
            <template v-if="!isWrongAnswer">
              <button
                type="button"
                class="btn__move btn__move--next"
                @click.once="clickNext()"
              >
                NEXT
              </button>
            </template>
          </template>
          <template v-else>
            <button
              v-if="
                (list.order < examList.length &&
                  isTrayVal != true &&
                  visibleNext == true) ||
                (list.typeCode == $CODE.QBANK.PROBLEM.TYPE.KREAD
                  ? true
                  : visibleNext) ||
                submittedAnswer
              "
              type="button"
              class="btn__move btn__move--next"
              @click.once="clickNext()"
            >
              NEXT
            </button>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      async requestExam() {
        try {
          let examCode = this.examCode
          const url = `${this.lcmsApiUrl}/api/v2/qbank/exams?examNmLike=${examCode}&dsSvcVersion=${this.contentVersion}`
          const response = await this.$axios.get(url)

          if (response?.data?.data) {
            let result = []
            let tempOrder = 1
            let qNo = 0
            let examArr = []

            const data = response.data.data
            data.examNms.map((item, index) => {
              const items = item.split('_')

              // set current examNm
              this.setCurrentExamName(item)

              let type = items[3] // ex. STK_10_02_1R_0
              let order =
                type == this.$CODE.CLASS.READING
                  ? 1
                  : type == this.$CODE.CLASS.LISTEN_SPEAKING
                  ? 2
                  : type == this.$CODE.CLASS.WRITING
                  ? 3
                  : 4

              let examObj = {
                id: data.examIds[index], // 시험지 번호
                name: item, // 시험지명
                order, // 시험지 순서
                type, // 시험지 유형(읽기/듣고말하기/쓰기) 코드
              }
              examArr.push(examObj)
            })

            examArr
              .sort((a, b) => a.order - b.order)
              .map(el => {
                const resultData = data.examMaps[el.id].sort(
                  (a, b) => a.order - b.order,
                )

                resultData.map(item => {
                  let examType = item.examNm.split('_')[3]
                  let problemResultAnswer = ''
                  let correctMarkingIcon = ''
                  if (problemResultData?.length > 0) {
                    // ...
                    problemResultData.forEach(resProblem => {
                      if (resProblem.qbankProblemId == item.problemId) {
                        if (resProblem.answer3) {
                          problemResultAnswer = resProblem.answer3
                          if (resProblem.correctYn == 'Y') {
                            //3회차 정답
                            correctMarkingIcon = 'correct--try_3'
                            this.setMarkingIcon(correctMarkingIcon)
                          }
                        }
                        // ...
                      }
                      let infoObj = {
                        qNo: qNo < 10 ? '0' + qNo : qNo, //
                        qId: item.problemId,
                        examNm: item.examNm,
                        examGoal: goal, // 라우터로 받아오는 값
                        formTypeCode: item.etcCd09,
                        variationCode: item.etcCd04,
                        submittedAnswer: problemResultAnswer, // 학습시작 API 호출 결과 값으로 받아오는 정답 데이터
                        cornerState: this.cornerState, // 학습시작 API 호출 결과 값으로 받아오는 학습상태코드
                        correctMarkingIcon: correctMarkingIcon,
                      }
                      // ...
                      item.info = infoObj
                      result.push(item)
                    })
                  }
                })
              })
          }
        } catch (err) {
          this.$xApi.error(err)
          console.log(err)
          return
        }
      },
    },
  }
</script>
