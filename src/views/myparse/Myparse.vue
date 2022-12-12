<template>
  <div>
    <input type="text" :value="sample" @change="onChange" />
    <button @click="onDelete">delete</button><br />
    <button @click="funStartParsing">myClick</button><br />
    <button @click="cut">cut</button><br />
    <textarea
      name="contents"
      id="mytext"
      v-model="contents"
      cols="80"
      rows="5"
    ></textarea>
    <textarea
      name="mytext"
      id="mytext"
      cols="80"
      rows="30"
      v-model="sample"
    ></textarea>
    <p class="cc">ex {{ exam }}</p>
    <!-- <template v-for="ii in testList">
      {{ ii }}
      <div class="test" v-html="ii"></div>
    </template> 
    -->
    <div class="test" v-html="testStr"></div>
    <div id="cut">cut</div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import sourceHtml from './contents.js'

  let sample = ref('sample')
  let testStr = ref('<h1 style="background-color:skyblue">testStr</h1>')
  let exam = ref('<h1>aa</h1>')
  let contents = ref()

  let aaa = 'wholeText'
  let pppp = ''
  const funStartParsing = async () => {
    console.log('----start----!!!!!!!!!!!!!!!!!!!!!!')
    let ddd = new DOMParser()

    // let domdom = ddd.parseFromString(contents.value, 'text/html')
    let domdom = ddd.parseFromString(sourceHtml, 'text/html')
    // let bbbb = domdom.getElementsByTagName('body')[0].textContent
    let bbbb = domdom.getElementsByTagName('body')[0]
    // console.log('  bbbb  : ', bbbb.textContent)
    // console.log('  contents  : ', contents.value)

    let unit = divideText(bbbb.textContent)
    // let unit = divideText(contents.value)
    establishHtml(unit)
    // let result = [tagTitle, tagBody, tagQ1, tagQ2, tagQ3]
    // for (let i in result) {
    //   console.log('----result---',result[i])
    // }
    // exam.value = result
    console.log('----end----***********************')
  }

  // indexOf로 쪼개기
  const divideText = whole => {
    let bb = whole.trim()

    // indexOf로 자를 지점 정리.
    let indexTitle = bb.indexOf('답하시오.') + 5

    let indexQ1 = bb.indexOf('(문1)')
    let indexA1 = bb.indexOf('(정답)', indexQ1 + 1)

    let indexQ2 = bb.indexOf('(문2)')
    let indexA2 = bb.indexOf('(정답)', indexQ2 + 1)

    let indexQ3 = bb.indexOf('(문3)')
    let indexA3 = bb.indexOf('(정답)', indexQ3 + 1)

    // errorCheck -1
    let checkArr = [
      indexTitle,
      indexQ1,
      indexA1,
      indexQ2,
      indexA2,
      indexQ3,
      indexA3,
    ]
    // console.log('checkArr : ', checkArr.join)
    for (let i in checkArr) {
      if (checkArr[i] < 0) {
        console.error('MY ERROR : 해당 문자열이 없단다.')
        break
      }
    }

    // 자르기
    let title = bb.slice(0, indexTitle)
    let body = bb.slice(indexTitle, indexQ1)
    let q1 = bb.slice(indexQ1, indexA1)
    let a1 = bb.slice(indexA1, indexQ2)
    let q2 = bb.slice(indexQ2, indexA2)
    let a2 = bb.slice(indexA2, indexQ3)
    let q3 = bb.slice(indexQ3, indexA3)
    let a3 = bb.slice(indexA3, bb.length)

    // console.log('----title----', q1)
    // console.log('----q1----', q1)
    return {
      title: title,
      body: body,
      question: [q1, q2, q3],
      answer: [a1, a2, a3],
    }
  }

  const establishHtml = unit => {
    // 기본html
    let wrapHtml = newTag('html', null)
    // let wrapHead = newTag('head', null)
    let headText = ` <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><meta http_quiv="content-type" content="text/html; charset=utf-8" /><link rel="stylesheet" type="text/css" href="../myCustom.css" />`
    wrapHtml.innerHTML = headText
    let wrapBody = newTag('html', null)

    // title --------------------------------
    let tagTitle = setTagTitle(unit)
    // body ---------------------------------
    let tagBody = setTagBody(unit)
    // question-----------------------------------
    let tagQ1 = setTagQuestion(unit, 0)
    let tagQ2 = setTagQuestion(unit, 1)
    let tagQ3 = setTagQuestion(unit, 2)
    // answer-----------------------------------
    let tagA1 = setTagAnswer(unit, 0)
    let tagA2 = setTagAnswer(unit, 1)
    let tagA3 = setTagAnswer(unit, 2)

    // 붙이기 시작
    wrapBody.append(tagTitle, tagBody, tagQ1, tagQ2, tagQ3, tagA1, tagA2, tagA3)
    wrapHtml.append(wrapBody)

    const wrap = newTag('div', null)
    wrap.append(wrapHtml)
    sample.value = wrap.innerHTML
  }

  const setTagTitle = unit => {
    let tagTitle = newTag('div', 'title')
    let bold = newTag('span', 'mmBold')

    // 쪼개기
    let ccc1 = unit.title.indexOf('[')
    let ccc2 = unit.title.indexOf(']') + 1
    let ddd1 = unit.title.slice(0, ccc1)
    let ddd2 = unit.title.slice(ccc1, ccc2)
    let ddd3 = unit.title.slice(ccc2, unit.title.length)

    bold.innerHTML = ddd2
    tagTitle.append(ddd1, bold, ddd3)
    return tagTitle
  }
  const setTagBody = unit => {
    let tagBody = newTag('div', 'body')
    let box = newTag('div', 'mmBox')
    let p = newTag('p', 'mm')
    p.innerHTML = unit.body
    box.append(p)
    tagBody.append(box)
    return tagBody
  }
  const setTagQuestion = (unit, index) => {
    let tagQuestion = newTag('div', 'question')
    let p = newTag('p', 'mm')
    let p1 = newTag('p', 'mmBogey')
    let p2 = newTag('p', 'mmBogey')
    let p3 = newTag('p', 'mmBogey')
    let p4 = newTag('p', 'mmBogey')
    let p5 = newTag('p', 'mmBogey')
    let bold = newTag('span', 'mmBold mmRed')
    // 쪼개기
    let ddd1 = unit.question[index].slice(0, 4)
    let ddd2 = unit.question[index].slice(4, unit.question[index].length)
    let i1 = ddd2.indexOf('①')
    let questionText = ddd2.slice(0, i1)

    // 보기 쪼개서 대입
    let {r1, r2, r3, r4, r5} = extractBogey(ddd2)
    p1.innerHTML = r1
    p2.innerHTML = r2
    p3.innerHTML = r3
    p4.innerHTML = r4
    p5.innerHTML = r5

    // 대입하기
    bold.innerHTML = ddd1
    // 붙이기
    p.append(bold, questionText, p1, p2, p3, p4, p5)
    tagQuestion.append(p)
    return tagQuestion
  }
  const extractBogey = text => {
    let i1, i2, i3, i4, i5, r1, r2, r3, r4, r5
    // let text =
    //   '이 글을 통해 알 수 있는 뼈의 재구성 과정에 대해 정리할 때, 다음 빈칸에 들어갈 알맞은 말을 고르시오.뼈의 재구성은 뼈파괴세포가 , 뼈바탕질이 새롭게 교체되면서 이루어진다. 이 과정을 통해 예전의 뼈는 새롭게 보강되고 단단해진다.① 뼈바탕질을 파괴하고② 뼈모세포를 감염시키고③ 뼈모세포의 무기물을 흡수하고④ 뼈바탕질을 여러 개 만들어 내고⑤ 뼈세포에 들어가서 뼈모세포를 생성하고'
    i1 = text.indexOf('①')
    i2 = text.indexOf('②')
    i3 = text.indexOf('③')
    i4 = text.indexOf('④')
    i5 = text.indexOf('⑤')
    r1 = text.slice(i1, i2)
    r2 = text.slice(i2, i3)
    r3 = text.slice(i3, i4)
    // 5번 문항 있을 때
    if (i5 > 0) {
      r4 = text.slice(i4, i5)
      r5 = text.slice(i5, text.length)
    } else {
      r4 = text.slice(i4, text.length)
      r5 = ''
    }
    return {
      r1: r1,
      r2: r2,
      r3: r3,
      r4: r4,
      r5: r5,
    }
  }

  const setTagAnswer = (unit, index) => {
    let tagAnswer = newTag('div', 'answer')
    let p1 = newTag('p', 'mm')
    let bold = newTag('span', 'mmBold mmRed')
    let p2 = newTag('p', 'mm')
    let bold2 = newTag('span', 'mmBold mmRed')

    // 쪼개기
    let ddd1 = unit.answer[index].slice(0, 4)
    let ddd2 = unit.answer[index].slice(4, 5)
    let ddd3 = unit.answer[index].slice(5, 9)
    let ddd4 = unit.answer[index].slice(9, unit.answer[index].length)

    console.log("ddd1 : ", ddd1,ddd2)
    console.log("ddd3 : ", ddd3 )
    console.log("ddd4 : ", ddd4 )
    // 대입하기
    bold.innerHTML = ddd1
    p1.append(bold,ddd2 )
    bold2.innerHTML = ddd3
    p2.append(bold2, ddd4)

    // 붙이기
    tagAnswer.append(p1,p2)
    return tagAnswer
  }

  const newTag = (tagName, className) => {
    let newT = document.createElement(tagName)
    if (className !== null) {
      newT.setAttribute('class', className)
    }
    return newT
  }

  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////
  const onChange = e => {
    sample.value = e.target.value
  }
  const onDelete = () => {
    sample.value = ''
  }
  const cut = () => {
    let par = document.getElementById('cut')
    console.log('par : ', par)
    let a = document.createElement('p')
    console.log('a : ', a)
    a.setAttribute('class', 'mycustom')
    a.innerHTML = 'myCustom_appended'
    par.appendChild(a)
  }

  // const setTypeUnit = () => {
  //   console.log('pppp length  : ', pppp.length)
  //   for (let i in pppp) {
  //     const hCol = pppp[i]

  //     if (hCol.hasChildNodes()) {
  //       const hCol2 = hCol.getElementsByTagName('span')
  //       for (let i in hCol2) {
  //         const hCol3 = hCol2[i]

  //         console.log('hCol3   : ', hCol3)
  //         if (hCol2[i].hasChildNodes()) {
  //           console.log('hCol2[i]   : ', hCol2[i])
  //         } else {
  //           console.log('hCol2[i] fffffff  : ', hCol2[i])
  //         }
  //       }

  //       console.log('hTag   : ', hCol)
  //     } else {
  //       console.log('hTag length  : ', hCol.length)
  //     }

  //     // title --------------------------------------------
  //     const parentTitle = newTag('div', 'title')
  //     if (hCol[i].innerHTML.includes('다음 글을')) {
  //       // console.log('titletitletitletitletitletitle title : ')
  //       const ssspan = hCol.getElementsByTagName('span')

  //       // console.log('ssspan   : ', ssspan.length)
  //       for (let i in ssspan) {
  //         let hTag2 = ssspan[i].innerHTML
  //         // console.log('hText2   : ', hText2)
  //         // span bold 찾기
  //         if (hTag2.includes('font-weight:"bold"')) {
  //           let t = newTag('span', 'myBold')
  //           t.innerHTML = hTag2
  //           parentTitle.appendChild(t)

  //           // span underline 찾기
  //           // } else if (false) {
  //           // let t = newTag('span', 'myBold')
  //           // t.innerHTML = hText2
  //           // parentTitle.appendChild(t)

  //           // 기본텍스트
  //         } else {
  //           let t = newTag('p', 'mm')
  //           t.innerHTML = hTag2
  //           parentTitle.appendChild(t)
  //         }
  //       }
  //       console.log('parentTitle : ', parentTitle)
  //       break
  //     }
  //   }
  // }

  //   const test1 = () => {
  // let dom = new DOMParser()
  // `${process.env.VUE_APP_DS_URL}../../aa.html`
  // fetch('../../assets/aa.txt').then(response => {
  //   console.log('res : ', response)
  // response.json()
  // })
  //   .then(json => json.items)
  //   }

  /*
                        시험지 객체 = {
                          id :
                          level :
                          lesson :
                          kread_score : type Number
                          is_liter : type boolean
                          range : type Number
                          index : type Number
                          feature : C, R ,W


                          title : unit
                          body : unit
                          question : [{
                            q: unit
                            selection: [unit]
                            answer_no:[number]
                            answer:
                            explain:
                          }]
                           }

        let exam = ref({
          id: '',
          level: '',
          lesson: 'testlesson',
          kread_score: -1,
          is_liter: true,

          range: -1,
          feature: '',
          title: '',
          body: '',
          question: [
            {
              q: '',
              selection: [],
              answer_no: -1,
              answer: '',
              explain: '',
            },
          ],
        })


                          units : [{
                              type : (title 1000, body 2000, question 3000)
                              class_type:
                              text:
                          }]




                         <class_type
                         >
                          20- 제목 번호
                          50- 제목 기본
                          60 - bold
                          70 - underline
                          80 - red

                          100-지문 기본
                          110 지문 이미지
                          120 지문 빈상자
                          130 지문 하단설명 tiny


                          200-문제 기본
                          210 문제 글상자
                          220 문제 빈상자


                          300-보기 기본


                          400-정답 기본


                          500-해설 기본

                          900 필요없는 거

                          <의사코드>
                          쪼개기, 트림, 문자만 남기기
                          꺽쇠로 시작하면, 그냥 넘어가
                          꺽쇠로 시작하지 않으면, 바로앞index의 태그를 확인해야 됨.
                               앞태그가 포함하는지?
                                   bold -
                                   underline
                                   IMG
                                   fontsize 9.0


                          class type에 따라 앞뒤로 태그 붙이기 - <p></p>&nbsp;  <span></span>


                          문제의 글상자 특정.
                          문제의 이미지
                          모든 보기에 <p>태그 붙이기



                            부모태그 만들기 title, body, question3
                            순서대로 만들어서 부모에 append
                              table
                              p
                              span

            <파싱 의사코드>
            body로 불러오기, unit 생성 unit.type 기입, unit.text에 대입.
            각각의 HtmlCollect에서 해당 문자열 있는지 체크,. 있으면 바로 escape from loop & unit.type에 기입.
            배열로 넣기.
                  title : 다음 글을
                  body : <table border
                  question : (문1) ~ (문2)까지만
                  question : 상동
                  question : 상동

            각 배열을 루프돌면서 (태그 체크 : img, bold, underline, color, [A])
                  title : 글번호, 지문타이틀
                  body : 기본, img, bold, underline, color, [A]
                  question : (문1) ~ (문2)까지만
                  question : 상동
                  question : 상동


            <최종적으로 exam 객체로 HTML만들기>
              element 생성 parent에 삽입.



          */

  //////////////////////////////////////////////////////////////////
  // let ddd = new DOMParser()
  // let result = ddd.parseFromString(contents, 'text/html')
  // let ppp = result.getElementsByTagName('SPAN')
  // let ppp = result.getElementsByClassName('HStyle0')
  // let ppp = result.getElementsByClassName('HStyle0')[0].childNodes[0].nodeValue

  // let aa = ppp[3]
  // let bb = aa.split('(문1)')
  // console.log(`-- aa --`, typeof aa)
  // console.log(`-- aa --`, aa)
  // testStr.value = '<h1>aaaaaaa</h1>'

  // let re = ''
  // for (let i = 0; i < ppp.length; i++) {
  //   testStr += ppp[i]
  //   //   console.log(`--${i}-- `, ppp[i])
  // }
  // console.log(`--testStr-- `, testStr)

  //////////////////////////////////////////////////////////////////
  // testStr.value = ppp
  // console.log("ppp: " + JSON.stringify(ppp));
  // console.log('ppp: %o', ppp)
  // console.log('ppp typeof: ', typeof ppp[0])
  // console.log('ppp ======================== ', ppp[0])

  //////////////////////////////////////////////////////////////////
  // const createExam = (
  //   id,
  //   level,
  //   lesson,
  //   kreadScore,
  //   isLiter,
  //   range,
  //   feature,
  //   title,
  //   body,
  //   question,
  // ) => ({
  //   id: id,
  //   level: level,
  //   lesson: lesson,
  //   kread_score: kreadScore,
  //   is_liter: isLiter,
  //   range: range,
  //   feature: feature,
  //   title: title,
  //   body: body,
  //   question: question,
  // })

  //                     // 1. 닫힘 꺽쇠로 끊기 >
  //                     //  구분자 종류 :  <  >  P  SPAN
  //                     // 그냥 삭제 : </

  // // 꺽쇠(>)로 array끊기 + trim() + Unit생성하여 array Push
  // const createUnitAndSetArr = wholeText => {
  //   let list = wholeText.split('>')

  //   for (let i in list) {
  //     console.log(`list ${i}--`, list[i])
  //     list[i] = list[i].trim()

  //     let unit = {
  //       idx: i,
  //       class_type: [], // numberArray 뷰 유형
  //       text: list[i],
  //       extra_no: -1, // 문제일때만 nubmerArray
  //     }
  //     unitArr.push(unit)
  //   }
  //   console.log('arr length : ', unitArr.length)
  // }

  // // 꺽쇠(뒷꺽쇠) 부터 전부 제거
  // const funRemoveEnd = () => {
  //   for (let i in unitArr) {
  //     const unit = unitArr[i]

  //     //   console.log('----funRemoveEnd unit---- !', unit)
  //     const gguk = '</'
  //     if (unit.text.includes(gguk)) {
  //       const iii = unit.text.indexOf(gguk)
  //       unit.text = unit.text.slice(0, iii)
  //     }
  //   }
  // }
  // //꺽쇠로 시작하는지?
  // const isStartGGUK = hText => hText[0] === '<'

  // // 해당태그 가졌는지? 예) SPAN (대문자 주의)
  // const hasTAG = (hText, tagName) => hText.includes(tagName)

  // // 각 UNIT에 타입 넣기
  // const setUnitType = () => {
  //   console.log('----arrangeUnit---- !')
  //   // console.log('----arrangeUnit---- !')
  //   for (let i in unitArr) {
  //     let hText = unitArr[i].text
  //     if (hText[0] === '<') {
  //       addType(i, 900) // 필요없는 거.
  //     }
  //     let pretext = i > 0 ? unitArr[i - 1].text : null

  //     if (pretext !== null) {
  //       if (hasTAG(pretext, 'ff0000')) addType(i, 80)
  //       if (hasTAG(pretext, 'underline')) addType(i, 70)
  //       if (hasTAG(pretext, 'bold')) addType(i, 60)
  //       if (hasTAG(pretext, '<SPAN')) console.log('SPAN TAG ~~', pretext)
  //       if (hasTAG(pretext, '<P')) console.log('P TAG ~~', pretext)
  //     }
  //   }
  // }
  // // 중복 체크 후 type PUSH
  // const addType = (i, typeNo) => {
  //   let unit = unitArr[i]
  //   if (!unit.class_type.includes(typeNo)) {
  //     unit.class_type.push(typeNo)
  //   }
  // }

  // // 1. 꺽쇠로 시작하는거 전부 삭제,
  // // 2. 닫힘꺽쇠 들어가 있는 것 닫힘꺽쇠 부분만 삭제
  // const deleteAllGGUKinARR = () => {
  //   for (let i in unitArr) {
  //     //   let hText = arr[i]
  //   }
  // }

  // // 개행 : <p></p> + nbsp
  // const appendTagAndClass = () => {
  //   // let preWord = '<p>'
  //   // for (let i in unitArr) {
  //   //   const unit = unitArr[i]
  //   //   for (let j in unit.className) {
  //   //     unit.className[j]
  //   //   }
  //   //   const className = getClsName()
  //   //   let postWord = '</p>&nbsp;'
  //   //   unit.text = [preWord, unit.text, postWord].join('')
  //   // }
  // }
</script>

<style scoped></style>
