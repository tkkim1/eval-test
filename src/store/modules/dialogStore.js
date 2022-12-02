// const state = () => ({
//     alertOption: {
//         open: false,
//         message: '',
//         buttonText: '',
//     },
//     confirmOption: {
//         open: false,
//         message: '',
//         ok: '',
//         cancel: '',
//         callback: () => {},
//     },
// });

// const mutations = {
//     openAlertDialog(state, value) {
//         state.alertOption = {
//             open: true,
//             message: value.message,
//             buttonText: value.buttonText,
//         };
//         console.log('[Vuex] openAlertDialog ===', state.alertOption);
//     },
//     closeAlertDialog(state) {
//         state.alertOption = {
//             open: false,
//             message: '',
//             buttonText: '',
//         };
//         console.log('[Vuex] closeAlertDialog ===', state.alertOption);
//     },
//     openConfirmDialog(state, value) {
//         state.confirmOption = {
//             open: true,
//             message: value.message,
//             cancel: value.cancel,
//             ok: value.ok,
//             callback: value.callback
//                 ? value.callback
//                 : console.error(
//                       '[Vuex] openConfirmDialog ::: callback 함수가 정의되지 않았습니다.',
//                   ),
//         };
//         console.log('[Vuex] openConfirmDialog ===', state.confirmOption);
//     },
//     closeConfirmDialog(state, value) {
//         state.confirmOption = {
//             open: false,
//             message: '',
//             cancel: '',
//             ok: '',
//             callback: state.confirmOption.callback
//                 ? state.confirmOption.callback(value)
//                 : console.error(
//                       '[Vuex] closeConfirmDialog ::: callback 함수가 정의되지 않았습니다.',
//                   ),
//         };
//         console.log('[Vuex] closeConfirmDialog ===', state.confirmOption);
//     },
// };

// export default {
//     namespaced: true,
//     state,
//     mutations,
// };
