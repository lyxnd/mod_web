<template>
  <div class="enchantments-container">
    <div v-if="!enchantmentProperty || enchantmentProperty.length === 0" class="empty-state">
      <div class="empty-icon">✦</div>
      <p>Loading enchantments…</p>
    </div>
    <div v-else class="enchantments-grid">
      <div class="enchantment-card" v-for="enchantment in enchantmentProperty" :key="enchantment.name" :id="'row-' + enchantment.name">
        <div class="card-header">
          <span class="enchant-icon">✦</span>
          <h3 class="enchantment-name">{{ enchantment.name }}</h3>
        </div>
        <div class="card-body">
          <div class="prop-row" v-if="enchantment.approach">
            <span class="prop-label">Approach</span>
            <span class="prop-value">{{ enchantment.approach }}</span>
          </div>
          <div class="prop-row" v-if="enchantment.usage">
            <span class="prop-label">Usage</span>
            <span class="prop-value">{{ enchantment.usage }}</span>
          </div>
          <div class="prop-row" v-if="enchantment.additional">
            <span class="prop-label">Additional</span>
            <span class="prop-value">{{ enchantment.additional }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import { fetchEnchantments } from "@/util/file_reader.js";

const enchantmentProperty = ref([]);
const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;

onMounted(() => {
  fetchEnchantments(globalVar.lang).then(result => {
    enchantmentProperty.value = result.value;
  });
});
</script>

<style scoped>
.enchantments-container {
  padding: 8px 4px;
}

.enchantments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}

.enchantment-card {
  position: relative;
  background:
      radial-gradient(circle at top right, rgba(212, 175, 55, 0.10), transparent 50%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(212, 175, 55, 0.35);
  border-radius: 12px;
  padding: 14px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  overflow: hidden;
}

.enchantment-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #d4af37, #92400e);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.enchantment-card:hover {
  box-shadow: 0 8px 22px rgba(212, 175, 55, 0.22);
  transform: translateY(-3px);
  border-color: rgba(212, 175, 55, 0.60);
}

.enchantment-card:hover::before { opacity: 1; }

.enchantment-card:hover .enchant-icon {
  transform: rotate(15deg) scale(1.1);
}

.enchant-icon {
  transition: transform 0.3s ease;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(212, 175, 55, 0.30);
  border-radius: 12px;
  color: #6b7280;
}

.empty-icon { font-size: 42px; margin-bottom: 10px; }

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.enchant-icon {
  font-size: 22px;
  color: #d4af37;
  flex-shrink: 0;
  line-height: 1;
}

.enchantment-name {
  font-size: 15px;
  font-weight: bold;
  color: #713f12;
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
  color: #92400e;
  background: rgba(212, 175, 55, 0.12);
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
