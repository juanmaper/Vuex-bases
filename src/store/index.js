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
    }
  },

  actions: {
    async incrementRandomInt( context ) {

      const randomInt = await getRandomInt()

      context.commit('incrementBy', randomInt)
    }
  }
}) 