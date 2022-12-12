import {createStore} from 'vuex'

export default createStore({
  state: {
    todos: [
      {id: 1, text: 'basketball', checked: false},
      {id: 2, text: 'soccer', checked: false},
    ],
  },
  mutations: {},
  actions: {},
  getters: {},
})
