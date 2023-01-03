<template>
    <div class="row fullscreen">
        <div class="col">
            <div class="text-h8 q-pa-sm text-bold">KReaD 진단평가</div>
            <div class="q-mt-xl text-h6 text-bold text-center">
                상위 1% 학습법으로 독해학습을 시작해 보세요.
            </div>
            <div class="q-mt-lg text-center">
                <p class="q-mb-none">중등독해 트레이닝 프로그램에서는</p>
                <p class="q-mb-none">
                    자신의 KReaD 지수에 맞게 잘 다듬어진 다양한 분야의 글을
                    마음껏 읽고
                </p>
                <p class="q-mb-none">양질의 기출 문제를 풀어볼 수 있습니다.</p>
                <p class="q-mb-none">
                    KReaD 진단평가를 통해 학습지의 KReaD 지수와 독해에서 부족한
                    영역을 확인해 보세요.
                </p>
            </div>
            <div class="q-mt-xl text-center q-ml-xl">
                <p class="q-mb-none">
                    알맞은 난이도의 영어 책을 선택하는데 렉사일 지수를 참고할 수
                    있습니다.
                </p>
                <p class="q-mb-none">
                    렉사일은 자신의 현재 독해력 수준을 측정하여 지적 호기심을
                    갖고,
                </p>
                <p>
                    지적 성취를 얻을만한 독서를 할 수 있도록 책을 선택할 때
                    도움을 주기 위한 지수입니다.
                </p>
                <p class="q-mb-none">
                    영어실력 향상을 위하여 영어 원서를 읽는다면 자신의 렉사일
                    지수와 일치하거나
                </p>
                <p class="q-mb-none">
                    다소 높은 책을 선택하고, 평소 흥미가 없거나 어려운 분야의
                    책을 읽어야 한다면
                </p>
                <p>
                    렉사일 지수가 다소 낮은 책을 선택하는 것이 효과적일 수
                    있습니다.
                </p>
                <p class="q-mb-none">
                    미국을 비롯한 전 세계 응시자 표본의 객관적인 영어 실력을
                    평가받을 수 있으며,
                </p>
                <p class="q-mb-none">
                    정기적인 응시를 통해 읽기 능력의 향상 여부를 측정할 수
                    있습니다.
                </p>
            </div>
        </div>
        <div class="col bg-grey-4 text-center flex center">
            <div class="q-mx-xl" style="flex: 1">
                <q-form
                    @submit="onSubmit"
                    ref="loginFormRef"
                    class="q-gutter-md"
                >
                    <div>
                        <p class="header-label">이름</p>
                        <q-input
                            bg-color="white"
                            outlined
                            v-model="name"
                            :dense="dense"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    '이름을 입력해 주세요.',
                            ]"
                        />
                    </div>
                    <div>
                        <p class="header-label">이메일</p>
                        <q-input
                            bg-color="white"
                            outlined
                            v-model="email"
                            :dense="dense"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    '이메일을 입력해 주세요.',
                            ]"
                        />
                    </div>
                    <div>
                        <p class="header-label">학년</p>
                        <q-select
                            filled
                            name="grade"
                            v-model="grade"
                            :options="options"
                            option-value="value"
                            option-label="label"
                            option-disable="inactive"
                            :rules="[
                                (val) =>
                                    (val && val.label !== '') ||
                                    '학년을 선택해 주세요.',
                            ]"
                        />
                    </div>
                    <div>
                        <p class="header-label">전화번호</p>
                        <q-input
                            bg-color="white"
                            outlined
                            v-model="phoneNumber"
                            :dense="dense"
                            lazy-rules
                            :rules="[
                                (val) =>
                                    (val && val.length > 0) ||
                                    '전화번호를 입력해 주세요.',
                            ]"
                        />
                    </div>
                </q-form>
                <div class="login-btn q-mt-xl">
                    <q-btn
                        outline
                        rounded
                        color="primary"
                        @click="onSubmit"
                        type="submit"
                        label="진단평가 시작하기"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { GlobalStore } from '@/store';
import { useRouter } from 'vue-router';
import { loginApi } from '@/api/modules/login';

const $q = useQuasar();
const router = useRouter();

const name = ref('');
const email = ref('');
const grade = ref('');
const phoneNumber = ref('');
const loginFormRef = ref(null);

const options = [
    {
        value: 1,
        label: '예비초-중1',
    },
    {
        value: 2,
        label: '중2',
    },
    {
        value: 3,
        label: '중3',
    },
];

const onSubmit = () => {
    console.log(grade);

    loginFormRef.value.validate().then((success) => {
        if (success) {
            const saveCallback = async (data) => {
                if (data) {
                    const globalStore = GlobalStore();

                    globalStore.setUserInfo({
                        name: name.value,
                        email: email.value,
                        grade: grade.value.value,
                        phoneNumber: phoneNumber.value,
                    });
                    router.push('/');
                }
            };
            loginApi(
                {
                    stdntNm: name.value,
                    email: email.value,
                    phoneNo: phoneNumber.value,
                },
                saveCallback,
            );
        } else {
            $q.notify({
                color: 'red-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: '모든 항목을 입력해 주세요.',
            });
        }
    });
};
</script>

<style scoped lang="scss">
.center {
    justify-content: center;
    align-items: center;
}

.header-label {
    margin-bottom: 8px;
    text-align: left;
    font-weight: 500;
}
</style>
