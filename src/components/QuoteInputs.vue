<template>
    <div class="row">
      <form>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
          <label>Quote</label>
          <textarea class="form-control" rows="3" v-model="quote" placeholder="add quote here" />
        </div>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group text-center">
          <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
        </div>
      </form>
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
    addQuote() {
      eventBus.addQuote(this.quote);
      this.quote = "";
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
