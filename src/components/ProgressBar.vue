<template>
    <div class="progress-bar">
      <div class="progress-bar text-center" style="background-color: blue; margin: 0; color: white;" :style="{width: quotes/10*100 + '%'}">
						<span>{{quotes + '/10'}}</span>
					</div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      quotes: this.quotesLength || 0
    };
  },
  props: {
    quotesLength: Number
  }
};
</script>

<style>
.progress-bar {
  width: 100%;
  height: 20px;
  background-color: #eee;
  margin: auto;
  transition: width 500ms;
}
</style>
