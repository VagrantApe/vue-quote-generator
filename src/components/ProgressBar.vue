<template>
    <div class="progress-bar">
      <div class="progress-bar text-center" style="background-color: blue; margin: 0; color: white;" :style="{width: quotesLength/10*100 + '%'}">
        <span><slot></slot></span>
      </div>
    </div>
</template>

<script>
export default {
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
