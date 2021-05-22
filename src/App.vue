<template>
  <Header />
  <el-container>
    <el-aside></el-aside>
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
  <!-- <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" /> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* margin-top: 60px; */
}
.element-plus-logo {
  width: 50%
}
</style>
