<template>
    <section class="modal__wrap">
        <div class="modal" :style="props?.width ? 'width:' + props?.width : 'width:90%'">
            <slot></slot>
            <button v-if="showClose" class="btn__close" type="button" @keydown.enter="closeModal($event)"
                @click="closeModal($event)">
                <span>닫기</span>
            </button>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
// import { useStore } from 'vuex';
import { DialogStore } from "@/store/modules/dialog";
import { defineProps } from 'vue';


const store = DialogStore();
const props = defineProps({
    'width': {
        type: String,
        default: "90%"
    },
    'showClose': {
        type: Boolean,
        default: false
    },
})

const closeModal = () => {
    console.log('close modal layer');
    // store.commit('openModal', false);
    store.openModal(false);
};


</script>

<style scoped lang="scss">
.modal {
    position: relative;
    // width: 90%;
    min-height: 50%;
    background: $white;
    border-radius: 20px;
    padding: 20px;

    &__wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // z-index: 150;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.5);
    }

    :deep &__container {
        width: 100%;
        height: 100%;
        font-size: size(24);
        @include center-element;
    }

    .btn {
        &__close {
            position: absolute;
            top: 0;
            right: 0;
            width: size(50);
            height: size(50);

            span {
                @include hide-text;
            }

            &:before,
            &:after {
                position: absolute;
                top: 0;
                right: size(20);
                z-index: 5;
                content: ' ';
                height: size(40);
                width: size(2);
                background-color: #000;
            }

            &:before {
                transform: rotate(45deg);
            }

            &:after {
                transform: rotate(-45deg);
            }
        }
    }
}
</style>
