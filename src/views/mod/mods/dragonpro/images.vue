<template>
  <div>
    <div v-for="(img, index) in images" :key="index" class="imgs" @click="showImage(index)">
      <img :src="img" class="img">
    </div>
    <vue-easy-lightbox
        v-if="visible"
        :visible="visible"
        :imgs="images"
        :index="currentIndex"
        @hide="handleHide"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

import boss from '@/assets/boss.png';
import chainbreak from '@/assets/chainbreak.png';
import effects from '@/assets/effects.png';
import villagerTrades from '@/assets/villagerTrades.png';

export default {
  name: 'imagesComp',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      images: [boss, chainbreak, effects, villagerTrades],
      visible: false,
      currentIndex: 0
    }
  },
  methods: {
    showImage(index) {
      this.currentIndex=index;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0; // 如果索引超出数组长度，则回绕到0
      }
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
}
</script>

<style>
.imgs {
  width: 20%; /* Set width for each thumbnail container */
  height: 20%;
  display: inline-block; /* Display thumbnails inline */
}
.img {
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  margin: 10px;
  cursor: pointer;
}
</style>
