<template>
  <div id="app1">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
    <img src="./img/zzmx.jpg">
  </div>
</template>

<script>
import getData from "./util";

export default {
  name: "app1",
  data() {
    return {
      msg: "Welcome to Your Vue.js"
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
};
</script>

<style lang="scss">
#app1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  h1 {
    color: cyan;
  }
  img {
    width: 20%;
  }
}
</style>