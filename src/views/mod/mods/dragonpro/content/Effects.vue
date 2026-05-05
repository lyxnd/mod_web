<template>
  <div class="effects-container">
    <div v-if="!effectProperty || effectProperty.length === 0" class="empty-state">
      <div class="empty-icon">✦</div>
      <p>Loading effects…</p>
    </div>
    <div v-else class="effects-grid">
      <div class="effect-card" v-for="effect in effectProperty" :key="effect.name" :id="'row-' + effect.name">
        <div class="card-header">
          <div class="icon-wrapper">
            <img v-if="effect.icon" :src="effect.icon" class="effect-icon" alt="icon"/>
            <div v-else class="icon-placeholder">✦</div>
          </div>
          <h3 class="effect-name">{{ effect.name }}</h3>
        </div>
        <div class="card-body">
          <div class="prop-row" v-if="effect.approach">
            <span class="prop-label">Approach</span>
            <span class="prop-value">{{ effect.approach }}</span>
          </div>
          <div class="prop-row" v-if="effect.usage">
            <span class="prop-label">Usage</span>
            <span class="prop-value">{{ effect.usage }}</span>
          </div>
          <div class="prop-row" v-if="effect.additional">
            <span class="prop-label">Additional</span>
            <span class="prop-value">{{ effect.additional }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { fetchEffects } from "@/util/file_reader.js";

const effectProperty = ref([]);
const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;

onMounted(() => {
  fetchEffects(globalVar.lang).then(result => {
    effectProperty.value = result.value;
  });
});
</script>

<style scoped>
.effects-container {
  padding: 8px 4px;
}

.effects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}

.effect-card {
  position: relative;
  background:
      radial-gradient(circle at top right, rgba(76, 201, 240, 0.07), transparent 50%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(76, 201, 240, 0.30);
  border-radius: 12px;
  padding: 14px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
}

.effect-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #4cc9f0, #0ea5e9);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.effect-card:hover {
  box-shadow: 0 8px 22px rgba(76, 201, 240, 0.18);
  transform: translateY(-3px);
  border-color: rgba(76, 201, 240, 0.55);
}

.effect-card:hover::before { opacity: 1; }

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(76, 201, 240, 0.30);
  border-radius: 12px;
  color: #6b7280;
}

.empty-icon { font-size: 42px; margin-bottom: 10px; }

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(76, 201, 240, 0.2);
}

.icon-wrapper {
  flex-shrink: 0;
}

.effect-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  image-rendering: pixelated;
  border-radius: 6px;
  background: rgba(76, 201, 240, 0.08);
  padding: 4px;
  display: block;
}

.icon-placeholder {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(76, 201, 240, 0.08);
  border-radius: 6px;
  font-size: 18px;
  color: #4cc9f0;
}

.effect-name {
  font-size: 15px;
  font-weight: bold;
  color: #0c4a6e;
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
  color: #0369a1;
  background: rgba(76, 201, 240, 0.1);
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
</style>
