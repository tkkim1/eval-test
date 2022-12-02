import { defineStore } from 'pinia';
import { menuData } from '../menuData';

// AuthStore
export const DialogStore = defineStore({
    id: 'DialogState',
    state: () => ({
        alertOption: {
            open: false,
            message: '',
            buttonText: '',
        },
        confirmOption: {
            open: false,
            message: '',
            ok: '',
            cancel: '',
            callback: () => {},
        },
        visibleModal: false,
    }),
    getters: {
        menuListGet: (state) => state.menuList,
    },
    actions: {
        // getAuthMenuList
        openAlertDialog(value) {
            this.alertOption = {
                open: true,
                message: value.message,
                buttonText: value.buttonText,
            };
            console.log('[Vuex] openAlertDialog ===', this.alertOption);
        },
        closeAlertDialog() {
            this.alertOption = {
                open: false,
                message: '',
                buttonText: '',
            };
            console.log('[Vuex] closeAlertDialog ===', this.alertOption);
        },
        openConfirmDialog(value) {
            this.confirmOption = {
                open: true,
                message: value.message,
                cancel: value.cancel,
                ok: value.ok,
                callback: value.callback
                    ? value.callback
                    : console.error(
                          '[Vuex] openConfirmDialog ::: callback 함수가 정의되지 않았습니다.',
                      ),
            };
            console.log('[Vuex] openConfirmDialog ===', this.confirmOption);
        },
        closeConfirmDialog(value) {
            this.confirmOption = {
                open: false,
                message: '',
                cancel: '',
                ok: '',
                callback: this.confirmOption.callback
                    ? this.confirmOption.callback(value)
                    : console.error(
                          '[Vuex] closeConfirmDialog ::: callback 함수가 정의되지 않았습니다.',
                      ),
            };
            console.log('[Vuex] closeConfirmDialog ===', this.confirmOption);
        },
        openModal(value) {
            this.visibleModal = value;
        },
    },
});
