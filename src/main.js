import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    addQuote(quote) {
      this.$emit('quoteWasAdded', quote);
    },
    removeQuote(index) {
      this.$emit('quoteWasRemoved', index);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})