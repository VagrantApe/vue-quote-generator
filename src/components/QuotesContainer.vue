<template>
    <ul>
      <li v-for="(quote, index) in quotes" :key="index">{{quote}}</li>
    </ul>
</template>

<script>
export default {
  props: ["quotes"]
};
</script>

<style scoped>
ul {
  list-style: none;
  display: inline-block;
}

li {
  list-style-type: none;
  border: 2px solid black;
  width: 20%;
  box-shadow: 2px 2px;
  padding: 5px;
  margin: 10px;
  word-wrap: break-word;
}
</style>
