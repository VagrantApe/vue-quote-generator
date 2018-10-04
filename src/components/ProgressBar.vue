<template>
    <div class="row">
      <div class="progress">
        <div class="progress-bar text-center" role="progressbar" aria-valuenow="60" aria-valuemax="100"
          :style="{width: (quotesLength / maxQuotes) * 100 + '%'}">
          {{quotesLength}} / {{maxQuotes}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    quotesLength: Number,
    maxQuotes: Number
  }
};
</script>

<style>
</style>
