<template>
    <div class="inputs">
      <slot class="input-header" :style="{textAlign: 'left'}"></slot>
      <div class="text-area" :style="{textAlign: 'center'}">
        <textarea v-model="quote" @change="updateQuote" ></textarea>
      </div>
      <div class="quote-submit" :style="{textAlign: 'center'}">
        <button @click="addQuote">Add Quote</button>
      </div>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: () => {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote: quote => {
      eventBus.addQuote(this.quote);
      this.quote = "";
    },
    updateQuote: evt => {
      this.quote = evt.target.value;
    }
  }
};
</script>

<style>
.inputs {
  margin: 0 auto;
  width: 80%;
}

textarea {
  width: 80%;
  height: 100px;
}
</style>
