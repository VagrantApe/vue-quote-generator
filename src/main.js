import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  name: 'eventBus',
  methods: {
    addQuote(quote) {
      this.$emit('quoteWasAdded', quote);
    },
    removeQuote(quote) {
      this.$emit('quoteWasRemoved', quote);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})