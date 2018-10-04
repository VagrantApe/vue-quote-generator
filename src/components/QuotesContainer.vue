<template>
    <div class="row">
      <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="removeQuote(index)">
        {{quote}}
      </app-quote>
    </div>
</template>

<script>
import { eventBus } from "../main";
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    removeQuote: index => {
      eventBus.removeQuote(index);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: inline-block;
}

li {
  border: 2px solid black;
  min-width: 20%;
  box-shadow: 2px 2px;
  padding: 5px;
  margin: 10px;
  word-wrap: break-word;
  display: inline-block;
  font-size: 15px;
}
</style>
