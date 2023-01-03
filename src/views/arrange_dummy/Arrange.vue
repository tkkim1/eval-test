<script setup>
  import {ref, reactive} from 'vue'
  import axios from 'axios'

  const arrResult = []
  // const result = reactive({
  //   id: 'test',
  //   exam: {
  //     head: '',
  //     title: '',
  //     contents: '', //지문
  //     units: [],
  //   },
  // })
  const resultStr = ref('')

  const onResultClick = () => {
    console.log('---- arrResult ---------', arrResult)
    console.log('---- arrResult --length---', arrResult.length)
    resultStr.value = JSON.stringify(arrResult)
  }

  const initUrl = async () => {
    // const fileroot = 'http://localhost:5173' + '/questions/01/1200.html'
    // console.log(fileroot)
    examTest.forEach(item => {
      getHtml(item.id, 'http://localhost:5173/questions' + item.url)
    })
  }
  const getHtml = (id, url) => {
    axios.get(url).then(res => {
      //   console.log(res.data)
      // result.value = res.data
      start(id, res.data)
    })
  }
  const newResult = () => {
    return {
      id: 'test',
      exam: {
        head: '',
        title: '',
        contents: '', //지문
        units: [],
      },
    }
  }
  const start = (id, data) => {
    const dom = new DOMParser()
    const all = dom.parseFromString(data, 'text/html')
    const result = newResult()
    result.id = id

    // const html = document.createElement('html')
    // const head = document.createElement('head')
    // const body = document.createElement('body')

    ////////////// ---- 헤더 ---- ////////////////
    const sHead = all.getElementsByTagName('head')[0].innerHTML
    result.exam.head = sHead
    // console.log('sHead -- :',sHead)

    const pBody = all.getElementsByTagName('body')[0]
    const pExam = pBody.getElementsByClassName('exam')[0]

    ////////////// ---- 타이틀 ---- ////////////////
    const sTitle = pExam.getElementsByClassName('title')[0].innerHTML
    // console.log('sTitle -- :', sTitle)
    result.exam.title = sTitle

    ////////////// ---- 지문 ---- ////////////////
    const sBody = pExam.getElementsByClassName('body')[0].innerHTML
    result.exam.contents = sBody
    // console.log('sBody -- :', sBody)

    ////////////// ---- 문제 정리시작 ---- ////////////////
    const arrQuestions = pExam.getElementsByClassName('question')
    const resultUnits = []
    console.log(` !arrQuestions length!!   :`, arrQuestions.length)
    // console.log(` !arrQuestions !!!!   :`, arrQuestions)

    for (let i = 0; i < arrQuestions.length; i++) {
      const unit = {
        text: '',
        answer: 0,
        explanation: '',
        bogey: [],
      }
      const pQuestion = arrQuestions[i]

      ////////////// ---- 보기 추출 ---- ////////////////
      const resultBogey = []
      const arrBogey = pQuestion.getElementsByClassName('mmBogey')
      //   console.log(`arrBogey    - :`, arrBogey)

      //// 보기 딥복사
      const deepArr = [...arrBogey]

      //// 보기 대입
      for (let j = 0; j < deepArr.length; j++) {
        const pBogey = deepArr[j]
        resultBogey.push(pBogey.textContent)
        console.log(`pBogey  - :`, pBogey.textContent)
      }
      // console.log('----resultBogey----', resultBogey)
      unit.bogey = resultBogey

      ////////////// ---- 보기 삭제 ---- ////////////////
      for (let j = 0; j < 5; j++) {
        arrBogey[0].remove()
        // console.log(`arrBogey length  - :`, arrBogey.length)
      }
      ////////////// ---- 해설 및 정답, 문제 정리---- ////////////////
      const pComment = pQuestion.getElementsByClassName('comment')[0]

      unit.explanation = pComment.innerHTML
      // console.log('---- unit.explanation----', unit.explanation)
      pComment.remove()

      const pAnswer = pComment.getElementsByClassName('answer')[0]
      const no = getAnswerNo(pAnswer.innerHTML)
      // console.log('no -- :', no)
      unit.answer = no
      unit.text = pQuestion.innerHTML
      unit['bogey'] = resultBogey

      //   console.log('pComment -- :', pComment)
      //   console.log('pQuestion -- :', pQuestion)
      resultUnits.push(unit)
      // console.log('----unit----', unit)
    }
    // console.log('---- resultUnits ---------', resultUnits)

    result.exam.units = resultUnits
    arrResult.push(result)
  }

  const getAnswerNo = str => {
    switch (str) {
      case '①':
        return 1
      case '②':
        return 2
      case '③':
        return 3
      case '④':
        return 4
      case '⑤':
        return 5
      default:
        return 0
    }
  }

  /////////////////////////////////////// 시험지명 /////////////////////////////////

  // const getExamNameList = () => {
  //   const arr = []
  //   for (let i = 1; i < 10; i++) {
  //     const topicStr = i.toString().padStart(2, 0)
  //     const topicDirectory = '/' + topicStr
  //     for (let j = 1200; j < 1601; j += 50) {
  //       // console.log('---i---', j)
  //       const kreadStr = j.toString()
  //       const kreadUrl = '/' + kreadStr + '.html'
  //       arr.push({
  //         id: createExamId(topicStr, kreadStr),
  //         url: topicDirectory + kreadUrl,
  //       })
  //     }
  //   }
  //   console.log('url arr', arr)
  //   console.log('  arr', arr.length)
  // }

  //KRT_E1_M3_L_00 / KRT_E2_1200_N_03   ex) kreadStr = '1200'
  // const createExamId = (topicStr, kreadStr) => {
  //   return kreadStr.length > 3
  //     ? `KRT_E2_${kreadStr}_N_${topicStr}`
  //     : `KRT_E1_${kreadStr}_L_${topicStr}`
  // }

  const examTest = [
    {
      id: 'KRT_E1_M11_L_00',
      url: '/00/M1-1.html',
    },
    {
      id: 'KRT_E1_M12_L_00',
      url: '/00/M1-2.html',
    },
    {
      id: 'KRT_E1_M13_L_00',
      url: '/00/M1-3.html',
    },
    {
      id: 'KRT_E1_M21_L_00',
      url: '/00/M2-1.html',
    },
    {
      id: 'KRT_E1_M22_L_00',
      url: '/00/M2-2.html',
    },
    {
      id: 'KRT_E1_M23_L_00',
      url: '/00/M2-3.html',
    },
    {
      id: 'KRT_E1_M31_L_00',
      url: '/00/M3-1.html',
    },
    {
      id: 'KRT_E1_M32_L_00',
      url: '/00/M3-2.html',
    },
    {
      id: 'KRT_E1_M33_L_00',
      url: '/00/M3-3.html',
    },
  ]
  const examList = [
    {
      id: 'KRT_E2_1200_N_01',
      url: '/01/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_01',
      url: '/01/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_01',
      url: '/01/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_01',
      url: '/01/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_01',
      url: '/01/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_01',
      url: '/01/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_01',
      url: '/01/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_01',
      url: '/01/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_01',
      url: '/01/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_02',
      url: '/02/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_02',
      url: '/02/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_02',
      url: '/02/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_02',
      url: '/02/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_02',
      url: '/02/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_02',
      url: '/02/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_02',
      url: '/02/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_02',
      url: '/02/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_02',
      url: '/02/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_03',
      url: '/03/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_03',
      url: '/03/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_03',
      url: '/03/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_03',
      url: '/03/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_03',
      url: '/03/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_03',
      url: '/03/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_03',
      url: '/03/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_03',
      url: '/03/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_03',
      url: '/03/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_04',
      url: '/04/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_04',
      url: '/04/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_04',
      url: '/04/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_04',
      url: '/04/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_04',
      url: '/04/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_04',
      url: '/04/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_04',
      url: '/04/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_04',
      url: '/04/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_04',
      url: '/04/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_05',
      url: '/05/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_05',
      url: '/05/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_05',
      url: '/05/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_05',
      url: '/05/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_05',
      url: '/05/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_05',
      url: '/05/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_05',
      url: '/05/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_05',
      url: '/05/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_05',
      url: '/05/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_06',
      url: '/06/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_06',
      url: '/06/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_06',
      url: '/06/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_06',
      url: '/06/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_06',
      url: '/06/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_06',
      url: '/06/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_06',
      url: '/06/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_06',
      url: '/06/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_06',
      url: '/06/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_07',
      url: '/07/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_07',
      url: '/07/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_07',
      url: '/07/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_07',
      url: '/07/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_07',
      url: '/07/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_07',
      url: '/07/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_07',
      url: '/07/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_07',
      url: '/07/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_07',
      url: '/07/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_08',
      url: '/08/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_08',
      url: '/08/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_08',
      url: '/08/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_08',
      url: '/08/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_08',
      url: '/08/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_08',
      url: '/08/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_08',
      url: '/08/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_08',
      url: '/08/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_08',
      url: '/08/1600.html',
    },
    {
      id: 'KRT_E2_1200_N_09',
      url: '/09/1200.html',
    },
    {
      id: 'KRT_E2_1250_N_09',
      url: '/09/1250.html',
    },
    {
      id: 'KRT_E2_1300_N_09',
      url: '/09/1300.html',
    },
    {
      id: 'KRT_E2_1350_N_09',
      url: '/09/1350.html',
    },
    {
      id: 'KRT_E2_1400_N_09',
      url: '/09/1400.html',
    },
    {
      id: 'KRT_E2_1450_N_09',
      url: '/09/1450.html',
    },
    {
      id: 'KRT_E2_1500_N_09',
      url: '/09/1500.html',
    },
    {
      id: 'KRT_E2_1550_N_09',
      url: '/09/1550.html',
    },
    {
      id: 'KRT_E2_1600_N_09',
      url: '/09/1600.html',
    },
  ]
</script>

<template>
  <button @click="initUrl" style="height: 80px; width: 200px">시작~~</button>
  <button @click="onResultClick" style="height: 20px; width: 20px">
    Result~~</button
  ><br />
  <textarea cols="70" rows="30" v-model="resultStr"></textarea>
</template>

<style scoped></style>
