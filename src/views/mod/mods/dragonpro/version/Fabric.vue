<template>
  <div class="version-list">
    <div class="loader-banner fabric-banner">
      <div class="loader-icon">⚙</div>
      <div>
        <h3 class="banner-title">Fabric</h3>
        <p class="banner-desc">Lightweight, modular mod loader · Fast updates</p>
      </div>
    </div>

    <div v-if="versions.length === 0" class="empty-state">
      <div class="empty-icon">📦</div>
      <p>No Fabric builds available yet. Stay tuned!</p>
    </div>

    <div v-else class="version-cards">
      <a
          v-for="v in versions"
          :key="v.id"
          :href="v.url"
          target="_blank"
          rel="noopener"
          class="version-card"
      >
        <div class="v-meta">
          <div class="v-version">{{ v.version }}</div>
          <div class="v-mc">Minecraft {{ v.mcVersion }}</div>
        </div>
        <div class="v-info">
          <span class="v-tag">{{ v.tag }}</span>
          <span class="v-date">{{ v.date }}</span>
        </div>
        <span class="v-download">Download ↓</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const versions = ref([
  { id: 1, version: 'DragonPro 1.20.2', mcVersion: '1.20.2', tag: 'Stable', date: '2024', url: 'https://www.curseforge.com/minecraft/mc-mods/shadowdragon' },
  { id: 2, version: 'DragonPro 1.21',   mcVersion: '1.21',   tag: 'Latest', date: '2024', url: 'https://www.curseforge.com/minecraft/mc-mods/shadowdragon' }
])
</script>

<style scoped>
.version-list { display: flex; flex-direction: column; gap: 14px; }

.loader-banner {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1.5px solid rgba(201, 160, 80, 0.35);
  background: linear-gradient(135deg, rgba(201, 160, 80, 0.10), rgba(255, 255, 255, 0.55));
}

.loader-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(135deg, #c9a050, #8b6914);
  color: #ffffff;
  font-size: 22px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-title { margin: 0; font-size: 16px; font-weight: 700; color: #1a0b2e; }
.banner-desc  { margin: 2px 0 0; font-size: 13px; color: #6b7280; }

.version-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }

.version-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.18);
  border-radius: 12px;
  text-decoration: none;
  color: #1a0b2e;
  transition: all 0.2s ease;
}

.version-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(109, 40, 217, 0.45);
  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.18);
}

.v-meta { display: flex; justify-content: space-between; align-items: baseline; }
.v-version { font-size: 15px; font-weight: 700; }
.v-mc { font-size: 12px; color: #6b7280; }

.v-info { display: flex; align-items: center; gap: 8px; }
.v-tag {
  font-size: 11px;
  font-weight: 700;
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.10);
  padding: 2px 8px;
  border-radius: 999px;
}
.v-date { font-size: 11px; color: #9ca3af; }

.v-download {
  margin-top: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #6d28d9;
}

.empty-state {
  text-align: center;
  padding: 30px 20px;
  background: rgba(255, 255, 255, 0.40);
  border: 1.5px dashed rgba(109, 40, 217, 0.25);
  border-radius: 12px;
  color: #6b7280;
}

.empty-icon { font-size: 38px; margin-bottom: 8px; }
</style>
