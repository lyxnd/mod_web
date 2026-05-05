<template>
  <div class="gallery-wrap">
    <div class="page-title-row">
      <span class="title-bar"></span>
      <h1 class="page-title">Gallery</h1>
    </div>
    <p class="page-subtitle">Click any image to view in full screen.</p>

    <div class="gallery-grid">
      <div
          v-for="(img, index) in images"
          :key="index"
          class="img-card"
          @click="showImage(index)"
      >
        <div class="img-frame">
          <img :src="img" class="img" alt="screenshot"/>
          <div class="img-overlay">
            <span class="zoom-icon">⤢</span>
          </div>
        </div>
      </div>
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
      this.currentIndex = index;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
}
</script>

<style scoped>
.gallery-wrap {
  padding: 4px 2px;
}

/* === Title === */
.page-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.title-bar {
  display: inline-block;
  width: 5px;
  height: 28px;
  border-radius: 3px;
  background: linear-gradient(180deg, #6d28d9, #b45309);
}

.page-title {
  font-size: 24px;
  font-weight: 800;
  color: #1a0b2e;
  margin: 0;
  letter-spacing: -0.3px;
}

.page-subtitle {
  margin: 0 0 20px 17px;
  color: #6b7280;
  font-size: 14px;
}

/* === Grid === */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

/* === Card === */
.img-card {
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.img-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(109, 40, 217, 0.20);
}

.img-frame {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 12px;
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  background: rgba(255, 255, 255, 0.55);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.img-card:hover .img {
  transform: scale(1.06);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 11, 46, 0.55), transparent 55%);
  opacity: 0;
  transition: opacity 0.25s ease;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 12px;
}

.img-card:hover .img-overlay {
  opacity: 1;
}

.zoom-icon {
  font-size: 22px;
  color: #ffffff;
  background: rgba(109, 40, 217, 0.9);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  line-height: 1;
}
</style>
