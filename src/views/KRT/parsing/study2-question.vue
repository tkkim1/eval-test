// 개별 문항 컴포넌트 // 문항 조회 API 호출 //
${this.lcmsApiUrl}/api/v2/qbank/problem?problemId=${problemId}&dsSvcVersion=${this.contentVersion}
// → problemId 값은 시험지 템플릿으로부터 전달 받은 데이터 // → contentVersion :
main 템플릿 생성 단계에서 ‘콘텐츠 버전 조회 API’ 호출 후 VUEX에 셋팅한 값 //
JSON data 파싱하여 템플릿 구성
<template>
  <!-- 헤더 영역 -->
  <div class="container tray-header template" v-if="isTray === true">
    <div class="header-inner" @click.stop="closeTray()">
      <span class="problemId">{{ problemId }}</span>
      <div class="context">
        <span class="kRead" v-if="kreadScore">{{ kreadScore }}</span>
      </div>
      <template v-for="(item, idx) in quesHeader" :key="`quesHeader_${idx}`">
        <template v-if="checkType(item, 'header') === 'textBox'">
          <headerTextbox
            :viewData="item"
            :listenData="headerListen"
            :headerTitle="headerTitle"
          />
        </template>
      </template>
    </div>
  </div>
  <!-- // 헤더 영역 -->

  <!-- 트레이 영역 -->
  <div v-if="isTrayAreaReady" :class="trayClass">
    <button
      type="button"
      v-if="isTray == true"
      class="btn__tray"
      @click="clickTrayBtn()"
      v-touch:swipe="swipeHandler"
      v-touch-options="{
        touchClass: 'active',
        swipeTolerance: 10,
        touchHoldTolerance: 200,
      }"
    ></button>

    <div id="templateMulti" class="template multi" ref="trayTemp">
      <strong v-if="important == true" class="template__important"
        >중요해요</strong
      >
      <span
        class="marking"
        :class="[markingClass, important == true ? 'withImportant' : '']"
      ></span>
      <h2 class="template__title">
        <span v-if="problemNo" class="template__title__num">{{
          problemNo
        }}</span>
        <span v-html="question"></span>
      </h2>
      <section class="direction">
        <button
          v-if="audioSrc"
          type="button"
          class="btn__play"
          @click="playAudio('C')"
        >
          음원 재생
        </button>
        <audio id="cAudio" src=""></audio>
        <!-- 이미지 -->
        <div v-if="directionImg && !directionText" class="direction__frame">
          <figure class="direction__thumb">
            <img
              :src="directionImg"
              class="direction__img"
              :alt="directionImg"
            />
          </figure>
        </div>
        <!-- 텍스트 -->
        <div v-if="!directionImg && directionText" class="direction__frame">
          <p
            class="direction__textbox"
            v-html="directionText"
            :style="[
              textAlign == 'left' ? 'text-align: left' : 'text-align: center',
            ]"
          ></p>
        </div>
        ...
      </section>
      <section id="sectionChoice" class="distracter" :class="disableResolving">
        <div
          v-if="distracterChoiceText"
          class="checkbox__wrap"
          :class="setLayout"
        >
          <label
            v-for="(opt, index) in distracterChoiceText"
            :key="`choiceList_${index}`"
            class="checkbox"
            v-touch="$dsSound.playTouch"
          >
            <input
              :disabled="showGrade"
              :type="answerList.length == 1 ? 'radio' : 'checkbox'"
              :name="answerList.length == 1 ? 'multiChoiceList' : ''"
              :value="opt.numChar"
              :true-value="opt.numChar"
              @click="updateCheckedVal(opt.numChar, index)"
              :id="`choiceList_${opt.numChar}`"
              :ref="`choiceList_${index}`"
            />
            <span
              class="checkbox__label"
              v-html="opt.text"
              :ref="opt.numChar"
            />
          </label>
        </div>
        <div
          v-if="distracterChoiceImg"
          class="checkbox__wrap"
          :class="setLayout"
        >
          <label
            v-for="(opt, index) in distracterChoiceImg"
            :key="`choiceList_${index}`"
            class="checkbox"
            v-touch="$dsSound.playTouch"
          >
            <input
              :disabled="showGrade"
              :type="answerList.length == 1 ? 'radio' : 'checkbox'"
              :name="answerList.length == 1 ? 'multiChoiceList' : ''"
              :value="opt.numChar"
              :true-value="opt.numChar"
              @click="updateCheckedVal(opt.numChar, index)"
              :id="`choiceList_${opt.numChar}`"
              :ref="`choiceList_${index}`"
            />
            <span class="checkbox__label" :ref="opt.numChar">
              <figure class="direction__thumb">
                <img :src="opt.image" class="direction__img" :alt="opt.image" />
              </figure>
            </span>
          </label>
        </div>
      </section>
    </div>
  </div>
  <!-- // 트레이 영역 -->
</template>

<script>
    export default {
    	methods: {
    		/** 문항(content) 조회 */
    		async getProblemData(problemId) {
    			this.content = {};
    			const data = await this.$axios
    				.get(`${this.lcmsApiUrl}/api/v2/qbank/problem?problemId=${problemId}&dsSvcVersion=${this.contentVersion}`)
    				.then(response => response.data.data);
    			if (data?.content) {
    				this.content = data.content;

    				// 헤더 영역 설정
    				// json data > content > header
    				this.quesHeader = dataToParse.getQuestionHeader(data);
    				this.headerTitle = dataToParse.getHeaderTitle(data);
    				this.headerListen = dataToParse.getHeaderListen(data);
    				this.kreadScore = dataToParse.getKreadScore(data);

    				// 트레이 영역 설정
    				this.parsingContent();
    				// ...
                }

    		/** content 파싱 */ 
    		parsingContent() {
    			const content = this.content;	// 문항조회 API response data.content

    			for (const key in content) {
    				// 문제 구성 데이터 (json data > content > problem)
    				if (key == 'problem') {
    					const testYn = content[key].testYn; // 채점 가능
    					const listen = content[key].listen; // 듣기 파일
    					const question = content[key].question;
    					const choice = content[key].choice;
    					const etc = content[key].etc;
    					const etcCd04 = etc.etcCd04; // 문항 형태 변형
    					const etcCd06 = etc.etcCd06; // 음원 재생 방법(01:수동재생, 02~04:자동재생)
    					const etcCd07 = etc.etcCd07; // 트레이 여부
    					const etcTxt04 = etc.etcTxt04; // 선지 선택 개수(2, 3)
    					const etcCd02 = etc.etcCd02; // 문제 중요도

    					if (etcCd07 != 'Y') {
    						this.isTray = false;
    						this.setIsTrayVal(false);
    					} else {
    						this.setIsTrayVal(true);
    					}

    					if (etcTxt04 != '') {
    						this.checkedLimit = etcTxt04;
    					} else {
    						this.checkedLimit = '1';
    					}

    					if (question != null) {
    						if (testYn != '') {
    							this.testYn = testYn;
    						}
    						if (listen != '') {
    							if (etcCd04 == '04') {
    								this.videoSrc = this.qbankAssetUrl + listen;
    							} else {
    								this.audioSrc = this.qbankAssetUrl + listen;
    								if (etcCd06 == '01') {
    									this.audioType = 'M'; // 수동
    								} else {
    									this.audioType = 'A'; // 자동
    									this.audioLimit = parseInt(etcCd06) - 1; // 02:재생 1회, 03:재생 2회, 04:재생 3회
    								}
    							}
    						}
    						this.parsingQuestion(question, etcCd04);
    					}
    					if (choice != null) {
    						this.parsingChoice(choice);
    					}

    					if (etcCd02 == 'Y') {
    						this.important = true;
    					}

    				// 정답 구성 데이터 (json data > content > solution)
    				} else if (key == 'solution') {
    					const answer = content[key].answer;
    					const explain = content[key].explain;
    					const hint = content[key].hint;
    					if (answer != null) {
    						this.setAnswer(answer);
    						this.setAnswerList(this.answerObjList.map(v => v.answer));
    						this.answerCount = this.answerObjList.length;
    						this.setDetailAnswer(this.answerDetailList);
    					}
    					if (explain != null) {
    						this.parsingExplain(explain);
    						this.setAnswerDesc(this.explainText);
    					}
    					if (hint != null) {
    						this.parsingHint(hint);
    						this.setHintData(this.hintText);
    					}
    				}
    			}
    		};
  // ...
            }
        }
        }
</script>
