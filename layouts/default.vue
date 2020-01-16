<template>
  <div>
    <!-- 头部组件 -->
    <Header/>
    <!-- 相当于 router-view -->
    <nuxt />
    <!-- 页脚组件 -->
    <Footer/>
  </div>
</template>

<script>
// 导入公共的组件
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  // 注册组件
  components: {
    Header,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

ul,li,ol{
  list-style: none;
}

a{
  color: inherit;
  text-decoration: none;
}

a:hover{
  color: inherit;
}

em,i{
  font-style: normal;
}
</style>
