<template>
  <div> 
      <!--只能写一个根目录标签 -->
      <p>这里有文字</p>
  </div>
</template>

<!-- 暴露数据-->
<script>
    export default{
        data(){
            return{
                msg:'hello home'
            }
        }
    }
</script>


<style scoped> 
    p{
        color: red;
    }

</style>