<template>
    <div class="container">
    <app-header>Quotes Added</app-header>
    <app-progress-bar></app-progress-bar>
    <hr>
    <app-quote-inputs></app-quote-inputs>
    <hr>
    <app-quotes-container></app-quotes-container>
    <app-footer></app-footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import ProgressBar from "./components/ProgressBar.vue";
import QuoteInputs from "./components/QuoteInputs.vue";
import QuotesContainer from "./components/QuotesContainer.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    appHeader: Header,
    appProgressBar: ProgressBar,
    appQuoteInputs: QuoteInputs,
    appQuotesContainer: QuotesContainer,
    appFooter: Footer
  }
};
</script>

<style>
</style>
