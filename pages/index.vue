<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel height="700px" class="carousel">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="banner"
        :style="`background:url(${item}) center center no-repeat;`">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return {
      banners: [
        "http://157.122.54.189:9095/assets/images/th01.jfif",
        "http://157.122.54.189:9095/assets/images/th02.jfif"
      ]
    }
  }
}
</script>

<style scoped lang="less">
.carousel{
  min-width: 1000px;
}
.banner{
  height: 700px;
}
</style>