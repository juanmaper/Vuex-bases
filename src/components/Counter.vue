<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

  <h1>mapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters.squaredCount }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  computed: {
    countComputed() {
      return this.$store.state.count
    },
    ...mapState(['count', 'lastMutation', 'isLoading'])
  },
  
  methods: {
    increment() {
      this.$store.commit('increment')
    },

    incrementBy( value ) {
      this.$store.commit('incrementBy', value)
    },
    ...mapActions(['incrementRandomInt'])
  }
}
</script>
