import getRandomInt from '@/helpers/getRandomInt'
import { createStore } from 'vuex'

export default createStore({

  state: {
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0
  },

  mutations: {
    increment( state ) {
      state.count++
      state.lastMutation = 'increment'
    },
    incrementBy( state, value ) {
      state.count += value
      state.lastMutation = 'incrementBy ' + value
      state.lastRandomInt = value
    },
    setLoading( state, value ) {
      state.isLoading = value
    }
  },

  actions: {
    async incrementRandomInt({ commit }) {

      commit('setLoading', true)
      const randomInt = await getRandomInt()

      commit('incrementBy', randomInt)
      commit('setLoading', false)
    }
  },

  getters: {
    squaredCount( state ) {
      return state.count ** 2
    }
  }
}) 