// 헤더 영역 : 공통
// hasOwnProperty를 사용하여 객체에 프로토타입을 확인하여 재귀 구현
const dataToParse = {
  getListen: function (data) {
    let result = {}
    try {
      result['path'] =
        data.content.problem.listen == null ? '' : data.content.problem.listen
      let etcCd06 = data.content.problem.etc.etcCd06
      if (etcCd06 == '01') {
        result['type'] = 'nonAuto'
      } else {
        result['type'] = 'auto'
        result['limitCnt'] = parseInt(etcCd06) - 1
      }
    } catch (error) {
      console.log(error)
    }
    return result
  },
  getHeaderTitle: function (data) {
    let result = ''
    try {
      if (data.content.header != null) {
        result =
          data.content.header.etc.etcTxt01 == null
            ? ''
            : data.content.header.etc.etcTxt01
      }
    } catch (error) {
      console.log(error)
    }
    return result
  },
  getHeaderListen: function (data) {
    let result = {}
    try {
      if (data.content.header != null) {
        result['path'] =
          data.content.header.etc.etcTxt06 == null
            ? ''
            : data.content.header.etc.etcTxt06
        let etcCd04 = data.content.header.etc.etcCd04
        if (etcCd04 == '01') {
          result['type'] = 'nonAuto'
        } else {
          result['type'] = 'auto'
          result['limitCnt'] = parseInt(etcCd04) - 1
        }
      }
    } catch (error) {
      console.log(error)
    }

    return result
  },
  getQuestion: function (data) {
    let titleArr = data.content.problem.question.texts[0]
    let findList = dataToParse.getElement(titleArr.elements)
    let titleQues = ''
    findList.forEach((item, idx) => {
      if (item.type == 'char') {
        //첫char가 공백이면 무시
        if (idx == 0 && item.content.trim() == '') {
          console.log('first white')
        } else {
          titleQues = titleQues + item.content
        }
      }
    })
    return titleQues
  },
  getQuestionHeader: function (data) {
    let resultQesArr = []
    if (data.content.header != null) {
      let contentQuesArr = data.content.header.headerContent.texts
      contentQuesArr.forEach(item => {
        let findList = dataToParse.getElement(item.elements)
        if (findList.length > 0) {
          findList[0].parentAlign = dataToParse.getHasOwnProperty(item, 'align')
            ? item.align
            : null
        }
        resultQesArr.push(findList)
      })
      console.log('header', resultQesArr)
    }
    return resultQesArr
  },
  getQuestionBody: function (data) {
    let contentQuesArr = data.content.problem.question.texts.slice(1)
    let resultQesArr = []
    contentQuesArr.forEach(item => {
      let findList = dataToParse.getElement(item.elements)
      if (findList.length > 0) {
        findList[0].parentAlign = dataToParse.getHasOwnProperty(item, 'align')
          ? item.align
          : null
      }
      resultQesArr.push(findList)
    })
    console.log('body', resultQesArr)
    return resultQesArr
  },
  getAnswer: function (data) {
    let answerData = data.content.solution.answer.texts[0]
    let findList = dataToParse.getElement(answerData.elements)
    console.log('answer', findList)
    return findList
  },
  getDragDropAnswer: function (data) {
    let answerData = data.content.solution.answer.detail
    let findList = []
    answerData.forEach(element => {
      findList.push(element.answer)
    })
    console.log('DragDropSevenAnswer', findList)
    return findList
  },
  getElement: function (elements) {
    let itemList = []
    for (let i = 0; i < elements.length; i++) {
      var object = elements[i]
      for (var property in object) {
        //일반적인으로 elements로 존재 하는 경우
        if (
          typeof object[property] == 'object' &&
          dataToParse.getHasOwnProperty(object[property], 'elements') &&
          object[property].elements.length > 0
        ) {
          let findList = dataToParse.getElement(object[property].elements)

          let parent = {
            type: property,
            content: object[property].content,
            elements: findList,
          }
          //자식이 tragtext인 경우 부모에 value 추가
          if (property == 'dragItem' && findList.length > 0) {
            if (findList[0].type == 'dragText') {
              parent['value'] = object[property].value
            }
          }
          //자식이 toolTipText인 경우 부모에 text 추가
          if (property == 'toolTipText' && findList.length > 0) {
            let text = object[property].text
            let decodeText = unescape(text)
            parent['text'] = decodeText
          }
          parent['align'] = dataToParse.getHasOwnProperty(
            object[property],
            'align',
          )
            ? object[property].align
            : null

          parent['textIndent'] = dataToParse.getHasOwnProperty(
            object[property],
            'textIndent',
          )
            ? object[property].textIndent
            : null

          parent['decorations'] = dataToParse.getHasOwnProperty(
            object[property],
            'decorations',
          )
            ? object[property].decorations
            : null

          parent['marginLeft'] = dataToParse.getHasOwnProperty(
            object[property],
            'marginLeft',
          )
            ? object[property].marginLeft
            : null

          parent['marginRight'] = dataToParse.getHasOwnProperty(
            object[property],
            'marginRight',
          )
            ? object[property].marginRight
            : null

          itemList.push(parent)
        }
        //table 이면  rows를 타야함.
        else if (
          typeof object[property] == 'object' &&
          dataToParse.getHasOwnProperty(object[property], 'rows') &&
          object[property].rows.length > 0
        ) {
          let findList = dataToParse.getElement(object[property].rows)
          let parent = {
            type: property,
            content: object[property].content,
            elements: findList,
          }
          parent['backImage'] = dataToParse.getHasOwnProperty(
            object[property],
            'backImage',
          )
            ? object[property].backImage
            : null

          itemList.push(parent)
        }
        //cells이면
        else if (Array.isArray(object[property]) && property == 'cells') {
          let calls = object[property]
          for (let j = 0; j < calls.length; j++) {
            let findList = dataToParse.getElement(calls[j].elements)
            let parent = {
              type: property,
              content: object[property].content,
              elements: findList,
            }
            itemList.push(parent)
          }
        }
        //마지막 요소 수집
        else if (typeof object[property] == 'object') {
          let resultItem = {}
          resultItem.type = property
          if (property == 'image') {
            resultItem.path = object[property].path
            resultItem.sound = object[property].sound
            resultItem.iedata = object[property].iedata
          }
          if (property == 'char') {
            resultItem.content = object[property].content
            if (
              dataToParse.getHasOwnProperty(object[property], 'decorations')
            ) {
              resultItem.decorations = object[property].decorations
            }
          }
          if (property == 'text') {
            resultItem.content = object[property].content
          }
          if (property == 'dropArea') {
            resultItem.multiDrop = object[property].multiDrop
            resultItem.numIndex = object[property].numIndex
          }
          if (property == 'dragItem') {
            resultItem.value = object[property].value
            resultItem.content = object[property].content
          }
          if (property == 'toolTipText') {
            let text = object[property].text
            let decodeText = unescape(text)
            resultItem.text = decodeText
            resultItem.content = object[property].content
          }
          if (object[property].elements != undefined) {
            resultItem.elements = object[property].elements
          }
          itemList.push(resultItem)
        }
      }
    }
    return itemList
  },
  getCheckType: function (itemList, root) {
    let type = ''
    if (itemList.length == 0) {
      type = 'br'
    }
    //일반적
    else if (itemList.length == 1) {
      type = dataToParse.findType(itemList[0])
    }
    //내용으로 바로 시작 하지 않고 공백이 있는 경우
    else {
      for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].type == 'char' && itemList[i].content.trim() == '') {
          continue
        } else {
          type = dataToParse.findType(itemList[i])
          break
        }
      }
    }
    console.log('root=' + root + ' type=' + type)
    return type == '' ? 'br' : type
  },
  findType: function (item) {
    let type = ''
    let temp = item.type
    if (item.type.toLowerCase() == 'textbox') {
      type = 'textBox'
    } else if (temp.toLowerCase() == 'char') {
      if (item.elements.length == 0) {
        let content = item.content
        let reg = new RegExp('(<[^>]*>)|(<[^/>]*/>)||(</[^>]*>)', 'g')
        let result = content.replace(reg, '')
        if (result == '') type = 'br'
        else type = 'text'
      } else {
        let sub = item.elements[0].type
        if (sub.toLowerCase() == 'image') {
          type = 'image_video'
        }
        if (sub.toLowerCase() == 'inputbox') {
          type = 'text'
        }
        if (sub.toLowerCase() == 'table') {
          type = 'textBox'
        }
      }
    }
    return type
  },
  getHeaderCheckType: function (itemList, root) {
    let type = ''
    if (itemList.length == 0) {
      type = 'br'
    } else {
      let temp = itemList[0].type
      if (temp.toLowerCase() == 'textbox') {
        type = 'textBox'
      } else if (temp.toLowerCase() == 'char') {
        if (
          !dataToParse.getHasOwnProperty(itemList[0], 'elements') ||
          itemList.elements == null
        ) {
          type = 'br'
        }
      }
    }
    console.log('root=' + root + ' type=' + type)
    return type == '' ? 'br' : type
  },
  getHasOwnProperty: function (object, pros) {
    return Object.prototype.hasOwnProperty.call(object, pros)
  },
  getAfterElement: function (elements) {
    let itemList = []
    for (let i = 0; i < elements.length; i++) {
      var object = elements[i]
      if (
        dataToParse.getHasOwnProperty(object, 'elements') &&
        object.elements.length > 0
      ) {
        let findList = dataToParse.getAfterElement(object.elements)
        let parent = {
          type: object.type,
          content: object.content,
          elements: findList,
        }
        //자식이 tragtext인 경우 부모에 value 추가
        if (object.type == 'dragItem' && findList.length > 0) {
          if (findList[0].type == 'dragText') {
            parent['value'] = object.value
          }
        }
        //자식이 toolTipText 경우 부모에 text 추가
        if (object.type == 'toolTipText' && findList.length > 0) {
          parent['text'] = object.text
        }
        if (object.align != null) {
          parent['align'] = object.align
        }
        itemList.push(parent)
      } else {
        let resultItem = {}
        resultItem.type = object.type
        if (object.type == 'image') {
          resultItem.path = object.path
          resultItem.iedata = object.iedata
        }
        if (object.type == 'char') {
          resultItem.content = object.content
        }
        if (object.type == 'text') {
          resultItem.content = object.content
        }
        if (object.type == 'dropArea') {
          resultItem.multiDrop = object.multiDrop
          resultItem.numIndex = object.numIndex
        }
        if (object.type == 'dragItem') {
          resultItem.value = object.value
          resultItem.content = object.content
        }
        if (object.type == 'toolTipText') {
          resultItem.text = object.text
          resultItem.content = object.content
        }
        if (object.elements != undefined) {
          resultItem.elements = object.elements
        }
        itemList.push(resultItem)
      }
    }
    return itemList
  },
  getAnswerExplain: function (data) {
    let contentArr = data.content.solution.explain.texts
    let resultArray = []
    contentArr.forEach(item => {
      let findList = dataToParse.getElement(item.elements)
      resultArray.push(findList)
    })
    console.log('AnswerExplain', resultArray)
    return resultArray
  },
  getAnswerHint: function (data) {
    let contentArr = data.content.solution.hint.texts
    let resultArray = []
    contentArr.forEach(item => {
      let findList = dataToParse.getElement(item.elements)
      resultArray.push(findList)
    })
    console.log('AnswerHint', resultArray)
    return resultArray
  },
  getTotalCnt: function (data) {
    let result
    try {
      result =
        data.content.problem.totalCnt == null
          ? ''
          : data.content.problem.totalCnt
    } catch (error) {
      console.log(error)
      result = ''
    }
    return result
  },
  getKreadScore: function (data) {
    let result
    try {
      result =
        data.content.header.etc.etcTxt03 == null
          ? ''
          : data.content.header.etc.etcTxt03
    } catch (error) {
      console.log(error)
      result = ''
    }
    return result
  },
  transferStyleTag: function (textArea) {
    // ToolTipText 태그 적용을 위해 주석 처리
    // tooltiptext가 존재 하는 경우 인코딩 치환
    /*let reg = new RegExp('(<TOOLTIPTEXT[^>]*>)');
		let regTmp = textArea.match(reg);
		if (regTmp != null) {
			let resultReg = textArea.split(reg);
			for (let i = 0; i < resultReg.length; i++) {
				if (resultReg[i] == '') {
					continue;
				} else {
					let idx = resultReg[i].indexOf('<TOOLTIPTEXT');
					if (idx == 0) {
						// textArea = textArea.replace(resultReg[i], unescape(resultReg[i]));
						textArea = textArea.replace(resultReg[i], '');
					}
				}
			}
		}*/
    let result = textArea
      .replace(/<(BOLD)>/g, '<strong>')
      .replace(/<(\/BOLD)>/g, '</strong>')
      .replace(/<(ITALIC)>/g, '<i>')
      .replace(/<(\/ITALIC)>/g, '</i>')
      .replace(/<(UNDERLINE)>/g, '<u style="text-underline-position: under;">')
      .replace(/<(\/UNDERLINE)>/g, '</u>')
      .replace(/<(STRIKEOUT)>/g, '<del>')
      .replace(/<(\/STRIKEOUT)>/g, '</del>')
      .replace(/<(SHAPECHAR)/g, '<span class="deco-shapeChar"')
      .replace(/<(\/SHAPECHAR)>/g, '</span>')
      .replace(/<(HIDEBLOCK)>/g, '<span class="deco-hideBlock">')
      .replace(/<(\/HIDEBLOCK)>/g, '</span>')
      .replace(/<(CHARBOX)>/g, '<span class="deco-charBox">')
      .replace(/<(\/CHARBOX)>/g, '</span>')
      .replace(/<(BREAKLINE)>/g, '<span class="deco-breakLine">')
      .replace(/<(\/BREAKLINE)>/g, '</span>')
      .replace(/<(ITEMPOINT)/g, '<span class="deco-itemPoint"')
      .replace(/<(\/ITEMPOINT)>/g, '</span>')
      // .replace(/<(TOOLTIPAREA)/g, `<details class="tooltipBox"><summary`)
      // .replace(/<(\/TOOLTIPAREA)>/g, '</summary></summary></details>')
      // .replace(/<(TOOLTIPTEXT)/g, `<details class="tooltipText"><summary`)
      // .replace(/<(\/TOOLTIPTEXT)>/g, '</summary></summary></details>');

      // ToolTipText 태그 적용을 위해 주석 해제
      .replace(/<(TOOLTIPAREA)/g, '')
      .replace(/<(\/TOOLTIPAREA)>/g, '')
    // .replace(/<(TOOLTIPTEXT)/g, '')
    // .replace(/<(\/TOOLTIPTEXT)>/g, '');
    //console.log(textArea);
    return result
  },
  transferToolTipTextTag: function (textArea) {
    let result = textArea
      .replace(/<(TOOLTIPTEXT)/g, `<details class="tooltipBox"><summary`)
      .replace(/<(\/TOOLTIPTEXT)>/g, '</summary></details>')
    //console.log(textArea);
    return result
  },
}
module.exports = dataToParse
