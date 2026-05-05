<template>
  <div class="dimensions-wrap">
    <div v-if="!dimensions || dimensions.length === 0" class="empty-state">
      <div class="empty-icon">🌌</div>
      <p>Loading dimensions…</p>
    </div>

    <div v-else class="dim-grid">
      <article
          v-for="dimension in dimensions"
          :key="dimension.name"
          class="dim-card"
      >
        <header class="dim-header">
          <span class="dim-marker">✦</span>
          <h2 class="dim-name">{{ dimension.name }}</h2>
        </header>

        <h3 class="dim-title" v-if="dimension.title">{{ dimension.title }}</h3>

        <section class="dim-section" v-if="dimension.introduction && dimension.introduction.length">
          <h4 class="section-label">Introduction</h4>
          <ul class="info-list">
            <li v-for="(info, i) in dimension.introduction" :key="i">{{ info }}</li>
          </ul>
        </section>

        <section class="dim-section" v-if="dimension.warning && dimension.warning.length">
          <h4 class="section-label warn">Attention</h4>
          <ul class="warning-list">
            <li v-for="(warn, i) in dimension.warning" :key="i">
              <span class="warn-icon">⚠</span>
              <span>{{ warn }}</span>
            </li>
          </ul>
        </section>

        <section class="dim-section" v-if="dimension.detail && dimension.detail.length">
          <h4 class="section-label">Detail</h4>
          <p class="detail-text" v-for="(detail, i) in dimension.detail" :key="i">{{ detail }}</p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { fetchDimensions } from "@/util/file_reader.js";

const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;
const dimensions = ref([])

onMounted(() => {
  fetchDimensions(globalVar.lang).then(result => {
    dimensions.value = result.value;
  });
})
</script>

<style scoped>
.dimensions-wrap { padding: 4px 2px; }

.dim-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.dim-card {
  position: relative;
  background:
      radial-gradient(circle at top right, rgba(109, 40, 217, 0.07), transparent 60%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 4px 16px rgba(60, 20, 120, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.dim-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(109, 40, 217, 0.12);
}

.dim-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px dashed rgba(109, 40, 217, 0.25);
}

.dim-marker {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6d28d9, #4a1c8a);
  color: #ffffff;
  font-size: 16px;
  flex-shrink: 0;
}

.dim-name {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: #3b0764;
  letter-spacing: -0.3px;
}

.dim-title {
  margin: 0 0 12px;
  font-size: 16px;
  font-weight: 600;
  color: #4b5563;
  font-style: italic;
}

.dim-section { margin-top: 14px; }

.section-label {
  font-size: 12px;
  font-weight: 700;
  color: #6d28d9;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-label::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #6d28d9;
  border-radius: 2px;
}

.section-label.warn { color: #b91c1c; }
.section-label.warn::before { background: #b91c1c; }

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-list li {
  position: relative;
  padding: 8px 14px 8px 28px;
  background: rgba(109, 40, 217, 0.04);
  border-radius: 8px;
  font-size: 14px;
  color: #1a0b2e;
  line-height: 1.6;
}

.info-list li::before {
  content: '◆';
  position: absolute;
  left: 10px;
  top: 8px;
  color: #6d28d9;
  font-size: 10px;
}

.warning-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.warning-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(239, 68, 68, 0.07);
  border-left: 3px solid #b91c1c;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  color: #7f1d1d;
  font-weight: 500;
  line-height: 1.6;
}

.warn-icon {
  flex-shrink: 0;
  font-size: 14px;
  line-height: 1.6;
}

.detail-text {
  margin: 0 0 6px;
  font-size: 14px;
  color: #374151;
  line-height: 1.7;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(109, 40, 217, 0.20);
  border-radius: 12px;
  color: #6b7280;
}

.empty-icon { font-size: 42px; margin-bottom: 10px; }
</style>
