<template>
    <div ref="chartdiv" style="width:100%; height: 100%;"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const chartdiv = ref(null);
const props = defineProps([
    'chartData'
])
let root;
onMounted(() => {
    root = am5.Root.new(chartdiv.value);

    // root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX"
        })
    );

    // Define data
    let data = [{
        category: "문학",
        value1: 75,
    },
    {
        category: "비문학",
        value1: 94,
    }
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
            min: 0,
            max: 100,
            numberFormat: "#'%'",
            renderer: am5xy.AxisRendererY.new(root, {}),
        })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
            renderer: am5xy.AxisRendererX.new(root, {}),
            categoryField: "category",
            tooltip: am5.Tooltip.new(root, {})
        })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value1",
            categoryXField: "category",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}%"
            })
        })
    );

    series1.columns.template.setAll({
        fillOpacity: 0.5,
        strokeWidth: 2,
        width: 50,
        cornerRadiusTL: 20,
        cornerRadiusTR: 20
    });
    series1.data.setAll(data);

    // let series2 = chart.series.push(
    //     am5xy.ColumnSeries.new(root, {
    //         name: "Series",
    //         xAxis: xAxis,
    //         yAxis: yAxis,
    //         valueYField: "value2",
    //         categoryXField: "category"
    //     })
    // );
    // series2.data.setAll(data);

    // Add legend
    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    // let activeState = polygonTemplate.states.create("active");
    // activeState.properties.fill = chart.colors.getIndex(4);

    // // Create an event to toggle "active" state
    // polygonTemplate.events.on("hit", function (ev) {
    //     ev.target.isActive = !ev.target.isActive;
    // })

    // Make stuff animate on load
    series1.appear(2000);
    // series2.appear(1500);
    chart.appear(1000, 100);


})

onUnmounted(() => {
    root.dispose();
})
</script>

<style scoped lang="scss">

</style>
