<template>
  <div> 
      <!--只能写一个根目录标签 -->
      <p>欢迎来到list页面</p>
      {{msg}}
      <a href="#/home">跳转home</a>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'hello list'
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