<template>
  <div class="files-wrap">
    <div class="page-title-row">
      <span class="title-bar"></span>
      <h1 class="page-title">Mod Files</h1>
    </div>
    <p class="page-subtitle">Choose your mod loader to view available downloads.</p>

    <nav class="loader-nav">
      <router-link to="/mc/mods/dragonpro/files/fabric" class="loader-tab" active-class="active">
        <span class="dot fabric"></span>
        <span class="loader-text">
          <span class="loader-name">Fabric</span>
          <span class="loader-desc">Lightweight mod loader</span>
        </span>
      </router-link>
      <router-link to="/mc/mods/dragonpro/files/forge" class="loader-tab" active-class="active">
        <span class="dot forge"></span>
        <span class="loader-text">
          <span class="loader-name">Forge</span>
          <span class="loader-desc">Most popular mod loader</span>
        </span>
      </router-link>
    </nav>

    <div class="files-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fileComp'
}
</script>

<style scoped>
.files-wrap {
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

/* === Loader Tabs === */
.loader-nav {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.loader-tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  border-radius: 12px;
  text-decoration: none;
  color: #1a0b2e;
  min-width: 220px;
  transition: all 0.2s ease;
}

.loader-tab:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.85);
  border-color: rgba(109, 40, 217, 0.50);
  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.15);
}

.loader-tab.active {
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.12), rgba(212, 175, 55, 0.10));
  border-color: #6d28d9;
  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.25);
}

.dot {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.6);
}

.dot.fabric { background: #c9a050; }
.dot.forge  { background: #1f3554; }

.loader-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.loader-name {
  font-size: 16px;
  font-weight: 700;
  color: #1a0b2e;
}

.loader-desc {
  font-size: 12px;
  color: #6b7280;
}

/* === Content === */
.files-content {
  background: rgba(255, 255, 255, 0.40);
  border: 1px solid rgba(109, 40, 217, 0.15);
  border-radius: 12px;
  padding: 18px;
  min-height: 120px;
}
</style>
