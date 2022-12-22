import {createStore} from "vuex";

const store = createStore({
  state: {
    user: {
      data: {name: 'Me'},
      token: null
    }
  },
  getters: {},
  action: {},
  mutation: {},
  module: {}
})

export default store;
