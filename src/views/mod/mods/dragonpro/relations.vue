<template>
  <div class="relations-wrap">
    <div class="page-title-row">
      <span class="title-bar"></span>
      <h1 class="page-title">Dependencies</h1>
    </div>
    <p class="page-subtitle">DragonPro relies on the following mods to run correctly. Please install them as well.</p>

    <div class="dep-grid">
      <a
          v-for="dep in dependencies"
          :key="dep.name"
          :href="dep.url"
          target="_blank"
          rel="noopener"
          class="dep-card"
      >
        <div class="dep-icon" :style="{ background: dep.color }">
          {{ dep.initial }}
        </div>
        <div class="dep-body">
          <div class="dep-name">{{ dep.name }}</div>
          <div class="dep-tag">{{ dep.tag }}</div>
          <div class="dep-url">{{ dep.url }}</div>
        </div>
        <span class="dep-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'relationsComp',
  data() {
    return {
      dependencies: [
        {
          name: 'TerraBlender',
          initial: 'TB',
          tag: 'Biome library · Required',
          url: 'https://www.curseforge.com/minecraft/mc-mods/terrablender-fabric',
          color: 'linear-gradient(135deg, #16a34a, #166534)'
        },
        {
          name: 'GeckoLib',
          initial: 'GL',
          tag: 'Animation library · Required',
          url: 'https://www.curseforge.com/minecraft/mc-mods/geckolib',
          color: 'linear-gradient(135deg, #d97706, #92400e)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.relations-wrap {
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

/* === Cards === */
.dep-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
}

.dep-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.18);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.dep-card:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(109, 40, 217, 0.45);
  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.18);
}

.dep-card:hover .dep-arrow {
  transform: translateX(4px);
  color: #6d28d9;
}

.dep-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.dep-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.dep-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a0b2e;
}

.dep-tag {
  font-size: 12px;
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.10);
  padding: 1px 8px;
  border-radius: 999px;
  align-self: flex-start;
  font-weight: 600;
}

.dep-url {
  font-size: 11px;
  color: #6b7280;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dep-arrow {
  flex-shrink: 0;
  font-size: 22px;
  color: #9ca3af;
  transition: transform 0.2s ease, color 0.2s ease;
}
</style>
