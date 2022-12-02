<template>
    <HeaderLayout />
    <section class="container">
        <aside class="btn__wrap">
            <button type="button" classs="btn" @click="openDialog('alert')">
                ALERT
            </button>
            <button type="button" classs="btn" @click="openDialog('confirm')">
                CONFIRM
            </button>
            <button type="button" classs="btn" @click="openDialog('modal')">
                MODAL
            </button>
        </aside>
        <learningActivity />
        <modalLayer v-if="visibleModal">
            <div class="modal__container">MODAL LAYER CONTAINER</div>
        </modalLayer>
    </section>
</template>

<script>
import { defineComponent, getCurrentInstance, computed } from 'vue';
// import { useStore } from 'vuex';
import { DialogStore } from "@/store/modules/dialog";
import HeaderLayout from '@/components/layouts/header/headerLayout.vue';
import learningActivity from '@/views/learningActivity.vue';
import modalLayer from '@/components/layouts/layer/modalLayer.vue';

export default defineComponent({
    name: 'mainView',
    components: {
        HeaderLayout,
        learningActivity,
        modalLayer,
    },
    setup() {
        // const store = useStore();
        const store = DialogStore();
        const app = getCurrentInstance();
        const message = app.appContext.config.globalProperties.$MESSAGE;
        const visibleModal = computed(() => store.visibleModal);

        const checkConfirm = (payload) => {
            console.log('payload ===', payload);
            if (payload) {
                console.log('define function when click ok btn');
            } else {
                console.log('define function when click cancel btn');
            }
        };

        let openDialog = (type) => {
            console.log('type ===', type);
            switch (type) {
                case 'alert':
                    // store.commit('dialogStore/openAlertDialog', {
                    //     message: message.ALERT.NO_01,
                    //     buttonText: '확인',
                    // });
                    store.openAlertDialog({
                        message: message.ALERT.NO_01,
                        buttonText: '확인',
                    });
                    break;
                case 'confirm':
                    // store.commit('dialogStore/openConfirmDialog', {
                    //     message: message.CONFIRM.NO_01,
                    //     cancel: '닫기',
                    //     ok: '확인',
                    //     callback: checkConfirm,
                    // });
                    store.openConfirmDialog({
                        message: message.CONFIRM.NO_01,
                        cancel: '닫기',
                        ok: '확인',
                        callback: checkConfirm,
                    });
                    break;
                case 'modal':
                    // store.commit('openModal', true);
                    store.openModal(true);
                    break;
            }
        };
        return {
            visibleModal,
            openDialog,
        };
    },
});
</script>

<style scoped lang="scss">
.btn {
    &__wrap {
        display: flex;
        justify-content: space-between;

        button {
            flex: 1;
            margin: size(20);
            padding: size(20);
            background: lightgray;
            border-radius: size(20);
            font-size: size(26);
        }
    }
}
</style>
