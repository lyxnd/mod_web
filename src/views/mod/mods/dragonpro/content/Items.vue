<template>
  <div class="items-container">
    <div v-if="!itemProperty || itemProperty.length === 0" class="empty-state">
      <div class="empty-icon">🗡</div>
      <p>Loading items…</p>
    </div>
    <div v-else class="items-grid">
      <div class="item-card" v-for="item in itemProperty" :key="item.name" :id="'row-' + item.name">
        <div class="card-header">
          <div class="icon-wrapper">
            <img v-if="item.icon" :src="item.icon" class="item-icon" alt="icon"/>
            <div v-else class="icon-placeholder">?</div>
          </div>
          <h3 class="item-name">{{ item.name }}</h3>
        </div>
        <div class="card-body">
          <div class="prop-row" v-if="item.approach">
            <span class="prop-label">Approach</span>
            <span class="prop-value">{{ item.approach }}</span>
          </div>
          <div class="prop-row" v-if="item.usage">
            <span class="prop-label">Usage</span>
            <span class="prop-value">{{ item.usage }}</span>
          </div>
          <div class="prop-row" v-if="item.attribute">
            <span class="prop-label">Attribute</span>
            <span class="prop-value">{{ item.attribute }}</span>
          </div>
          <div class="prop-row" v-if="item.sneak">
            <span class="prop-label">Sneak</span>
            <span class="prop-value">{{ item.sneak }}</span>
          </div>
          <div class="prop-row" v-if="item.erupt">
            <span class="prop-label">Erupt</span>
            <span class="prop-value">{{ item.erupt }}</span>
          </div>
          <div class="prop-row" v-if="item.additional">
            <span class="prop-label">Additional</span>
            <span class="prop-value">{{ item.additional }}</span>
          </div>
        </div>
        <div class="card-images" v-if="item.additionalImg && item.additionalImg.length">
          <el-image
            v-for="(img, index) in item.additionalImg"
            :key="index"
            :src="img"
            fit="cover"
            class="thumb"
            @click="openPreview(item.additionalImg)"
          />
        </div>
      </div>
    </div>
    <ImagePreviewDialog ref="previewDialog" :images="previewImages" />
    <el-backtop :right="40" :bottom="40" />
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import ImagePreviewDialog from "@/components/ImagePreviewDialog.vue";
import { fetchItems } from "@/util/file_reader.js";

const itemProperty = ref([]);
const previewDialog = ref(null);
const previewImages = ref([]);

const openPreview = (images) => {
  previewImages.value = images;
  previewDialog.value.openDialog();
};

const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;

onMounted(() => {
  fetchItems(globalVar.lang).then(result => {
    itemProperty.value = result.value;
  });
});
</script>

<style scoped>
.items-container {
  padding: 8px 4px;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
}

.item-card {
  position: relative;
  background:
      radial-gradient(circle at top right, rgba(109, 40, 217, 0.05), transparent 50%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(91, 33, 182, 0.22);
  border-radius: 12px;
  padding: 14px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
}

.item-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #6d28d9, #b45309);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.item-card:hover {
  box-shadow: 0 8px 22px rgba(91, 33, 182, 0.15);
  transform: translateY(-3px);
  border-color: rgba(91, 33, 182, 0.45);
}

.item-card:hover::before { opacity: 1; }

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(109, 40, 217, 0.20);
  border-radius: 12px;
  color: #6b7280;
  grid-column: 1 / -1;
}

.empty-icon { font-size: 42px; margin-bottom: 10px; }

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(91, 33, 182, 0.15);
}

.icon-wrapper {
  flex-shrink: 0;
}

.item-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  image-rendering: pixelated;
  border-radius: 6px;
  background: rgba(91, 33, 182, 0.07);
  padding: 4px;
  display: block;
}

.icon-placeholder {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(91, 33, 182, 0.07);
  border-radius: 6px;
  font-size: 20px;
  color: #9ca3af;
}

.item-name {
  font-size: 15px;
  font-weight: bold;
  color: #3b0764;
  line-height: 1.3;
  word-break: break-word;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.prop-row {
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.prop-label {
  flex-shrink: 0;
  font-weight: bold;
  color: #5b21b6;
  background: rgba(91, 33, 182, 0.08);
  padding: 1px 7px;
  border-radius: 4px;
  font-size: 12px;
  min-width: 62px;
  text-align: center;
  line-height: 1.8;
}

.prop-value {
  color: #374151;
  font-size: 13px;
  line-height: 1.6;
  word-break: break-word;
}

.card-images {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(91, 33, 182, 0.1);
}

.thumb {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  object-fit: cover;
}
</style>
