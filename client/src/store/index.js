import { createStore } from 'vuex'

import { Auth } from './modules/auth'
import { Blog } from './modules/blog'

export default createStore({
  state: {
    loading: false,
    hint: null
  },

  getters: {
    getLoading(state) {
      return state.loading;
    },

    getHint() {
      return state.hint;
    }
  },

  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },

    setHint(state, value) {
      state.hint = value;

      setTimeout(() => {
        state.hint = null;
      }, 3000);
    }
  },
  
  actions: {

  },
  
  modules: {
    auth: Auth,
    blog: Blog
  }
})
