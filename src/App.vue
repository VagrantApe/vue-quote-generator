<template>
    <div class="container">
    <app-progress-bar :quotesLength="quotes.length" :maxQuotes="maxQuotes">
    </app-progress-bar>
    <hr>
    <app-quote-inputs ></app-quote-inputs>
    <hr>
    <app-quotes-container v-if="quotes.length > 0" :quotes="quotes"></app-quotes-container>
    <app-footer>Info: Click on a quote to delete it</app-footer>
    </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import QuoteInputs from "./components/QuoteInputs.vue";
import QuotesContainer from "./components/QuotesContainer.vue";
import Footer from "./components/Footer.vue";
import { eventBus } from "./main";

export default {
  data: () => {
    return {
      quotes: [],
      maxQuotes: 10
    };
  },
  components: {
    appProgressBar: ProgressBar,
    appQuoteInputs: QuoteInputs,
    appQuotesContainer: QuotesContainer,
    appFooter: Footer
  },
  created: () => {
    eventBus.$on("quoteWasAdded", quote => {
      if (this.quotes.length >= this.maxQuotes)
        return alert("Delete a quote before adding more!");
      if (quote == "") return;
      this.quotes.push(quote);
    });
    eventBus.$on("quoteWasRemoved", index => {
      this.quotes.splice(index, 1);
    });
  }
};
</script>

<style>
</style>
