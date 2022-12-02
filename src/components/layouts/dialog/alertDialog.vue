<template>
    <section class="alert__wrap">
        <div class="alert">
            <div class="alert__message" v-html="alertOption.message || ''"></div>
            <footer class="btn__wrap">
                <button type="button" @keydown.enter="closeAlert($event)" @click="closeAlert($event)"
                    v-html="alertOption.buttonText || '닫기'"></button>
            </footer>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue';
import { DialogStore } from "@/store/modules/dialog";

export default {
    name: 'alert-dialog',
    setup() {
        const store = DialogStore();
        const alertOption = computed(() => store.alertOption);

        const closeAlert = () => {
            console.log('close alert');
            store.closeAlertDialog();
            // store.commit('dialogStore/closeAlertDialog');
        };

        return {
            alertOption,
            closeAlert,
        };
    },
};
</script>

<style scoped lang="scss">
.alert {
    overflow: hidden;
    width: size(800);
    border-radius: size(54);
    box-sizing: border-box;
    background: $white;

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 150;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &__message {
        padding: size(60) size(40);
        font-size: size(28);
        text-align: center;
    }

    .btn {
        &__wrap {
            display: flex;

            button {
                flex: 1;
                height: size(140);
                padding: size(40);
                background: $black;
                color: $white;
                font-size: size(24);
                font-weight: 500;
            }
        }
    }
}
</style>
