<template>
    <div class="text-box" v-html="headerHtml"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, defineProps, watch, isProxy, toRaw } from 'vue';
import dataToParse from "@/helpers/qbankParser/dataParse";
import { styleTags } from "@/helpers/qbankParser/styleTags";

const headerHtml = ref(null);

const props = defineProps({
    'questionHeader': {
        default: []
    }
});


watch(() => props.questionHeader, (newValue) => {
    // const questionHeader = JSON.parse(JSON.stringify(newValue));
    const questionHeader = toRaw(newValue);
    questionHeader.map(item => {
        if (dataToParse.getHeaderCheckType(item, 'header') === 'textBox') {
            item[0].elements.map(itemEl => {
                let itemStyle = '';
                let itemHtml = '';
                if (itemEl.type === 'text') {
                    Object.keys(itemEl).map(itemElKey => {
                        if (itemElKey === 'elements') {
                            itemEl[itemElKey].map(elItem => {
                                if (elItem.content === " ") {

                                    itemHtml += "<br/>"
                                } else {
                                    console.log(elItem.content);
                                    if (elItem.content) {
                                        itemHtml += (dataToParse.transferStyleTag(elItem.content));
                                    }
                                }
                            })
                        } else if (styleTags[itemElKey] && itemEl[itemElKey] !== null) {
                            itemStyle += (styleTags[itemElKey] + ":" + itemEl[itemElKey] + (typeof itemEl[itemElKey] === 'number' ? "px;" : ";"));
                        }
                    })
                    headerHtml.value = (headerHtml.value ? headerHtml.value : "") + `<p style=" ${itemStyle}" >${itemHtml}</p>`;
                } else if (itemEl.type === 'image') {
                    Object.keys(itemEl).map(itemElKey => {
                        if (styleTags[itemElKey] && itemEl[itemElKey] !== null) {
                            itemStyle += (styleTags[itemElKey] + ":" + itemEl[itemElKey] + (typeof itemEl[itemElKey] === 'number' ? "px;" : ";"));
                        }
                    });
                    headerHtml.value = (headerHtml.value ? headerHtml.value : "") + `<img src="${itemEl.path}" style="${itemStyle}" />`;
                }
            })

            console.log('headerHtml');
            console.log(headerHtml.value);
        }
    })
})

onMounted(() => {

})

onUnmounted(() => {
    // 
})
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
