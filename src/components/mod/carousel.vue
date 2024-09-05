<template>
  <div class="slideshow">
    <img :src="images[currentIndex]" class="slide" :key="currentIndex" alt="background">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import bg1 from '@/assets/bg1.png';
import bg2 from '@/assets/bg2.png';
import background from '@/assets/background.jpg';

export default {
  data() {
    return {
      images: [
        bg1,
        bg2,
        background
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 10000); // 每隔3秒切换一次
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.slideshow {
  width: 100%;
  height: calc(100vh - 64px); /* 减去导航栏高度，保证图片填充到导航栏下方 */
  position: relative; /* 设置相对定位 */
  bottom: 0;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片填充方式 */
  position: fixed; /* 绝对定位使图片覆盖整个容器 */
  top: 0;
  left: 0;
  z-index: -1; /* 将图片置于底层 */
}

.content {
  width: 100%;
  height: 100%;
  top:64px;
  left: 0;
  bottom:0;
  position: fixed; /* 确保内容覆盖整个 slideshow 区域 */
  z-index: 1; /* 将内容放在图片之上 */
  margin-bottom: 0;
  padding-bottom: 0;
  justify-content: center;
  align-items: center;
  overflow: auto;
}
</style>
