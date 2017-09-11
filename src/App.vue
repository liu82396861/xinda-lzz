<template>
  <div id="app">
    <!--<div>这是页面顶部</div>-->
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view> 
    <!--路由组件-->
    <!--<div>这是页面底部</div>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
