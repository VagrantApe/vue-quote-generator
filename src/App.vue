<template>
    <div class="container">
    <app-header>Quotes Added</app-header>
    <app-progress-bar :quotes-length="quotes.length">{{quotes.length + '/10'}}</app-progress-bar>
    <hr>
    <app-quote-inputs>Quote</app-quote-inputs>
    <hr>
    <app-quotes-container v-if="quotes.length > 0" :quotes="quotes"></app-quotes-container>
    <app-footer>Info: Click on a quote to delete it</app-footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProgressBar from "./components/ProgressBar.vue";
import QuoteInputs from "./components/QuoteInputs.vue";
import QuotesContainer from "./components/QuotesContainer.vue";
import Footer from "./components/Footer.vue";
import { eventBus } from "./main.js";

export default {
  data: () => {
    return {
      quotes: []
    };
  },
  components: {
    appHeader: Header,
    appProgressBar: ProgressBar,
    appQuoteInputs: QuoteInputs,
    appQuotesContainer: QuotesContainer,
    appFooter: Footer
  },
  created() {
    eventBus.$on("quoteWasAdded", quote => {
      if (this.quotes.length >= 10 || quote == "") return;
      this.quotes.push(quote);
      console.log(this.quotes);
    });
    eventBus.$on("quoteWasRemoved", index => {
      this.quotes = this.quotes.filter(q => q != quote);
      console.log("delete clicked");
    });
  }
};
</script>

<style>
</style>
