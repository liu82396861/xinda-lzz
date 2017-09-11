<template>
  <div> 
      <!--只能写一个根目录标签 -->
      <!--<p>欢迎来到这个什么地方</p>-->
      <div>这是业务头部，应该是有个搜索框</div>
      <router-view></router-view>
      <div>这是底部，有文字说</div>
      <!--{{msg}}-->
      <!--<a href="#/list">跳转list</a>-->
  </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
    p{
        color: red;
    }

</style>