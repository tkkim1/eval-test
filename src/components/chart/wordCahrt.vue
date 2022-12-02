<template>
    <div class="hello" ref="chartdiv" style="width:100%;height: 100%;"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as am5 from '@amcharts/amcharts5';
import * as am5wc from '@amcharts/amcharts5/wc';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const chartdiv = ref(null);
const props = defineProps([
    'chartText'
]);

let root;
onMounted(() => {
    setTimeout(() => {
        root = am5.Root.new(chartdiv.value);

        root.setThemes([am5themes_Animated.new(root)]);

        let series = root.container.children.push(am5wc.WordCloud.new(root, {
            maxCount: 100,
            minWordLength: 2,
            maxFontSize: am5.percent(35),
            text: props.chartText,
            autoResize: true
        }));
        series.labels.template.setAll({
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            fontFamily: "Courier New",
            fill: '#7ab4e7'
        });
    }, 300)
})

onUnmounted(() => {
    root.dispose();
})
</script>

<style scoped lang="scss">

</style>
