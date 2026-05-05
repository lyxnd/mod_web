<template>
  <div class="entities-container">
    <div v-if="!entities || entities.length === 0" class="empty-state">
      <div class="empty-icon">🐲</div>
      <p>Loading entities…</p>
    </div>
    <template v-else>
    <div class="entity-card" v-for="entity in entities" :key="entity.name" :id="'row-' + entity.name">

      <!-- Header: name + model button -->
      <div class="card-header">
        <h2 class="entity-name">{{ entity.name }}</h2>
        <div v-if="entity.hasModel">
          <button class="model-btn render"
            @click="changeRenderedModel(entity.modelUrl)"
            v-if="renderModelUrl !== entity.modelUrl">
            <span class="dot pulse"></span>
            <span>渲染模型</span>
          </button>
          <button class="model-btn stop"
            @click="cancelRenderModel"
            v-if="renderModelUrl === entity.modelUrl">
            <span>✕</span>
            <span>禁用渲染</span>
          </button>
        </div>
      </div>

      <!-- Carousel: full width, 16:9 aspect ratio, no crop -->
      <div class="carousel-wrap" v-if="entity.images && entity.images.length">
        <el-carousel height="100%" :autoplay="true">
          <el-carousel-item v-for="(image, index) in entity.images" :key="index">
            <img :src="image" class="carousel-image"/>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- Stats row: 4 equal columns below carousel -->
      <div class="stats-row">
        <div class="stat-item stat-hp">
          <span class="stat-icon">❤</span>
          <span class="stat-label">Max HP</span>
          <span class="stat-value">{{ entity.max_hp }}</span>
        </div>
        <div class="stat-item stat-atk">
          <span class="stat-icon">⚔</span>
          <span class="stat-label">Attack</span>
          <span class="stat-value">{{ entity.attack_damage }}</span>
        </div>
        <div class="stat-item stat-spd">
          <span class="stat-icon">💨</span>
          <span class="stat-label">Speed</span>
          <span class="stat-value">{{ entity.speed }}</span>
        </div>
        <div class="stat-item stat-def">
          <span class="stat-icon">🛡</span>
          <span class="stat-label">Armor</span>
          <span class="stat-value">{{ entity.armor }}</span>
        </div>
      </div>

      <!-- 3D Model Viewer -->
      <div class="model-viewer-wrap" v-if="entity.hasModel && renderModelUrl === entity.modelUrl">
        <ModleViewer :model-url="entity.modelUrl"/>
      </div>

      <!-- Description -->
      <div class="info-section" v-if="entity.description">
        <h4 class="section-label">Description</h4>
        <p class="section-text">{{ entity.description }}</p>
      </div>

      <!-- Skills -->
      <div class="info-section" v-if="entity.skill && entity.skill.length">
        <h4 class="section-label">Skills</h4>
        <div class="skills-list">
          <div class="skill-item" v-for="(skill, index) in entity.skill" :key="index">
            <span class="skill-num">{{ index + 1 }}</span>
            <span class="skill-text">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="info-section" v-if="entity.additional">
        <h4 class="section-label">Additional Information</h4>
        <p class="section-text">{{ entity.additional }}</p>
      </div>

    </div>
    </template>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import ModleViewer from "@/components/mod/ModleViewer.vue";
import { fetchEntities } from "@/util/file_reader.js";

const entities = ref([]);
const renderModelUrl = ref('');

const changeRenderedModel = (url) => { renderModelUrl.value = url; };
const cancelRenderModel = () => { renderModelUrl.value = ''; };

const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;

onMounted(() => {
  fetchEntities(globalVar.lang).then(result => {
    entities.value = result.value;
  });
});
</script>

<style scoped>
.entities-container {
  padding: 8px 4px;
}

.entity-card {
  background: rgba(255, 255, 255, 0.45);
  border: 1.5px solid rgba(83, 91, 242, 0.28);
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(83, 91, 242, 0.07);
  transition: box-shadow 0.2s;
}

.entity-card:hover {
  box-shadow: 0 8px 28px rgba(83, 91, 242, 0.14);
}

/* Header */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(83, 91, 242, 0.15);
}

.entity-name {
  font-size: 22px;
  font-weight: bold;
  color: #3b0764;
  margin: 0;
}

/* Carousel: 16:9 wrapper, image fills without cropping */
.carousel-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.04);
}

.carousel-wrap :deep(.el-carousel),
.carousel-wrap :deep(.el-carousel__container) {
  height: 100% !important;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Stats: 4 equal columns matching carousel width */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 6px;
  border-radius: 10px;
  text-align: center;
  gap: 3px;
}

.stat-hp  { background: rgba(34, 197, 94, 0.1);  border: 1px solid rgba(34, 197, 94, 0.3); }
.stat-atk { background: rgba(239, 68, 68, 0.1);  border: 1px solid rgba(239, 68, 68, 0.3); }
.stat-spd { background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); }
.stat-def { background: rgba(234, 179, 8, 0.1);  border: 1px solid rgba(234, 179, 8, 0.3); }

.stat-icon  { font-size: 16px; line-height: 1; }
.stat-label { font-size: 11px; font-weight: bold; color: #6b7280; }
.stat-value { font-size: 20px; font-weight: bold; color: #1a1a2e; }

/* Model viewer */
.model-viewer-wrap {
  margin-bottom: 14px;
  border-radius: 10px;
  overflow: hidden;
}

/* Info sections */
.info-section {
  margin-top: 12px;
}

.section-label {
  font-size: 13px;
  font-weight: bold;
  color: #6d28d9;
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.section-label::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 13px;
  background: #6d28d9;
  border-radius: 2px;
  flex-shrink: 0;
}

.section-text {
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 14px;
  color: #374151;
  line-height: 1.7;
  background: rgba(109, 40, 217, 0.04);
  padding: 10px 14px;
  border-radius: 8px;
  margin: 0;
}

/* Skills */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  background: rgba(109, 40, 217, 0.04);
  border-radius: 8px;
  border-left: 3px solid rgba(109, 40, 217, 0.25);
}

.skill-num {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(109, 40, 217, 0.12);
  border-radius: 50%;
  font-size: 11px;
  font-weight: bold;
  color: #5b21b6;
}

.skill-text {
  font-size: 14px;
  color: #374151;
  line-height: 1.5;
}

/* === Model buttons === */
.model-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border: none;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  min-height: 32px;
}

.model-btn:hover { transform: translateY(-1px); }

.model-btn.render {
  background: linear-gradient(135deg, #6d28d9, #4a1c8a);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.30);
}

.model-btn.render:hover {
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  box-shadow: 0 6px 16px rgba(109, 40, 217, 0.42);
}

.model-btn.stop {
  background: rgba(239, 68, 68, 0.10);
  color: #b91c1c;
  border: 1.5px solid rgba(239, 68, 68, 0.40);
}

.model-btn.stop:hover {
  background: rgba(239, 68, 68, 0.20);
  border-color: #b91c1c;
}

.model-btn .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d4f7c0;
  display: inline-block;
}

.model-btn .dot.pulse {
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.4); opacity: 0.6; }
}

/* === Empty State === */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(83, 91, 242, 0.30);
  border-radius: 12px;
  color: #6b7280;
}

.empty-icon { font-size: 42px; margin-bottom: 10px; }

@media (max-width: 480px) {
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
