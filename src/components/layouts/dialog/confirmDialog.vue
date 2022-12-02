<template>
    <section class="confirm__wrap">
        <div class="confirm">
            <div class="confirm__message" v-html="confirmOption.message || ''"></div>
            <footer class="btn__wrap">
                <button class="btn__cancel" type="button" @keydown.enter="closeConfirm(false)"
                    @click="closeConfirm(false)">
                    {{ confirmOption.cancel || '취소' }}
                </button>
                <button class="btn__ok" type="button" @keydown.enter="closeConfirm(true)" @click="closeConfirm(true)">
                    {{ confirmOption.ok || '확인' }}
                </button>
            </footer>
        </div>
    </section>
</template>

<script>
import { computed } from 'vue';
// import { useStore } from 'vuex';
import { DialogStore } from "@/store/modules/dialog";

export default {
    name: 'confirm-dialog',
    setup() {
        const store = DialogStore();
        const confirmOption = computed(
            // () => store.state.dialogStore.confirmOption,
            () => store.confirmOption,
        );

        const closeConfirm = (value) => {
            // console.log('close confirm');
            store.closeConfirmDialog();
            // store.commit('dialogStore/closeConfirmDialog', value);
        };

        return {
            confirmOption,
            closeConfirm,
        };
    },
};
</script>

<style scoped lang="scss">
.confirm {
    overflow: hidden;
    width: size(900);
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
                font-size: size(24);
                font-weight: 500;
            }
        }

        &__ok {
            background: $black;
            color: $white;
        }

        &__cancel {
            background: gray;
        }
    }
}
</style>
