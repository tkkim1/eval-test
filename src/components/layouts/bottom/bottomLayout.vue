<template>
    <q-footer>
        <div class="footer row">
            <div class="col" :onclick="prevProblem">
                <div v-show="tkey && tkey !== '1'">
                    <q-icon name="arrow_back_ios" size="32px" />이전 문제
                </div>
            </div>
            <div class="footer-center col">
                <div>
                    <div class="timer">
                        <q-spinner-hourglass size="32px" style="color:white" />
                        <div>{{ getTimeStringSeconds(timerSec) }}</div>
                    </div>
                </div>
            </div>
            <div class="footer-last col">
                <div class="row">
                    <div class="col">
                        <template v-for="(item, idx) in props.problems">
                            <q-chip :color="item.done ? 'primary' : 'gray'" text-color="white">{{ item?.index }}
                            </q-chip>
                        </template>
                    </div>
                    <div class="col">
                        <div v-show="tkey && problems && Number(tkey) < (problems.length)" :onclick="nextProblem">
                            다음문제
                            <q-icon name="arrow_forward_ios" size="32px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-footer>
</template>

<script setup>
import { ref, watch, defineProps, onUnmounted, onMounted } from 'vue';
import { getTimeStringSeconds } from "@/helpers/utils"
const timerSec = ref(null);
timerSec.value = 0;

let secInterval;

const emit = defineEmits(['onChangeProblems']);

const props = defineProps({
    'timerEnable': {
        default: false
    },
    'sec': {
        default: 0
    },
    'tkey': {
        default: '1'
    },
    'problems': {
        default: [
            { index: '1', seq: 'k001', done: false },
            { index: '2', seq: 'k002', done: true },
            { index: '3', seq: 'k003', done: true },
            { index: '4', seq: 'k004', done: false }
        ]
    }
});

watch(props, (newV, oldV) => {
    clearInterval(secInterval);
    if (props.timerEnable) {
        // todo: 기존 측정시간 timeKey 에 해당하는 store에 저장
        // oldV
        timerSec.value = Number(newV.sec);
        secInterval = setInterval(() => { timerSec.value = (timerSec.value) + 1; }, 1000);
    } else {

    }
});
onMounted(() => {
    // console.log('onMounted ~~!!!!');
    // console.log(props.sec);
    // timerSec.value = Number(props.sec);
    // secInterval = setInterval(() => { timerSec.value += 1; }, 1000);

})

onUnmounted(() => {
    // clearInterval(secInterval);
})

const nextProblem = () => {
    console.log('nextProblem');
    emit('onChangeProblems', 'next');
}
const prevProblem = () => {
    console.log('prevProblem');
    emit('onChangeProblems', 'prev');
}
</script>

<style scoped lang="scss">
.footer {
    height: 60px;
    background-color: white;
    color: black;
    padding: 10px;
    display: flex;
    border-top: 1px solid;
    @include center-element;

    &-last {
        text-align: end;
    }

    &-center {
        text-align: center;

        .timer {
            text-align: center;
            justify-content: center;
            align-items: center;
            margin-top: -35px;
            display: inline-block;
            background-color: #7ab4e7;
            border-radius: 60px;
            padding: 6px;
            color: white;
        }
    }
}
</style>
