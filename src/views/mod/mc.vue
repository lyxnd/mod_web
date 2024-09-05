<template>
  <div id="box">
    <div id="header">
      <Navbar/>
    </div>
    <div id="content">
      <CarouselComp/>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/mod/navbar.vue";
import CarouselComp from "@/components/mod/carousel.vue";

export default {
  name:'mcComp',
  components: {
    Navbar,
    CarouselComp
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#header {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2; /* 确保导航栏位于所有内容之上 */
}

#content {
  top: 64px;
  margin-top: 64px; /* 确保内容部分不被固定的导航栏遮挡，64px 是导航栏的高度 */
  padding: 20px; /* 添加一些内边距，以提高内容的可读性 */
}
</style>
