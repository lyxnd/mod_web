<template>
  <div class="modShow">
    <!-- Hero Header -->
    <div class="hero-header">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="logo-wrap">
          <img src="/src/assets/dragon_logo.png" alt="Shadow Dragon logo" class="dragon-logo">
        </div>
        <div class="text-content">
          <span class="hero-tag">Minecraft Mod</span>
          <h1 class="hero-title">Shadow Dragon <span class="hero-abbr">(SD)</span></h1>
          <p class="hero-subtitle">Eight Demon Sorcerers · Eastern Mythology · Talisman System</p>
        </div>
        <div class="action-buttons">
          <button class="btn btn-primary" @click="download">
            <img src="../../../../assets/download.svg" alt="" class="btn-icon">
            <span>Download</span>
          </button>
          <button class="btn btn-secondary" @click="donate">
            <span class="heart">♥</span>
            <span>Donate</span>
          </button>
        </div>
      </div>
    </div>

    <!-- details -->
    <div class="details-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dragonPro',
  data() {
    return {
      downloads: 10,
      showChooser: false,
      selectedOption1: 'Fabric',
      selectedOption2: 'jdk_21.msi',
      versions: [
        { version: 'dragonpro_1.20.2', value: 'dragonpro_1.20.2' },
        { version: 'dragonpro_1.21', value: 'dragonpro_1.21' },
        { version: 'jdk_21.msi', value: 'jdk_21.msi' }
      ],
    }
  },
  methods: {
    openChooser() {
      this.showChooser = true;
    },
    donate() {
      window.location.href = 'https://afdian.com/a/EzAiSteve';
    },
    download() {
      window.location.href = 'https://www.curseforge.com/minecraft/mc-mods/shadowdragon';
    },
  }
}
</script>

<style scoped>
/* === Container === */
.modShow {
  background:
      radial-gradient(circle at 10% 0%, rgba(109, 40, 217, 0.10), transparent 40%),
      radial-gradient(circle at 90% 100%, rgba(212, 175, 55, 0.08), transparent 45%),
      rgba(255, 255, 255, 0.55);
  border-radius: 16px;
  padding: 24px;
  overflow-y: auto;
  max-height: calc(100vh - 64px);
  box-shadow: 0 8px 32px rgba(60, 20, 120, 0.08);
  backdrop-filter: blur(8px);
}

/* === Hero Header === */
.hero-header {
  position: relative;
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 24px;
  background: linear-gradient(135deg,
      rgba(109, 40, 217, 0.10) 0%,
      rgba(255, 255, 255, 0.55) 55%,
      rgba(212, 175, 55, 0.10) 100%);
  border: 1px solid rgba(109, 40, 217, 0.20);
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.25), transparent 70%);
  filter: blur(20px);
  pointer-events: none;
}

.hero-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.logo-wrap {
  position: relative;
  flex-shrink: 0;
  padding: 4px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.15), rgba(212, 175, 55, 0.15));
  box-shadow: 0 4px 18px rgba(109, 40, 217, 0.18);
}

.dragon-logo {
  width: 96px;
  height: 96px;
  object-fit: contain;
  border-radius: 12px;
  display: block;
  background: rgba(255, 255, 255, 0.5);
  transition: transform 0.4s ease;
}

.dragon-logo:hover {
  transform: scale(1.05) rotate(-3deg);
}

.text-content {
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: 4px;
}

.hero-tag {
  display: inline-block;
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.10);
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 4px;
}

.hero-title {
  margin: 0;
  font-size: 30px;
  font-weight: 800;
  color: #1a0b2e;
  line-height: 1.2;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #3b0764 0%, #6d28d9 60%, #b45309 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-abbr {
  font-size: 22px;
  font-weight: 600;
  opacity: 0.8;
}

.hero-subtitle {
  margin: 4px 0 0;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
}

/* === Buttons === */
.action-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  min-height: 44px;
  white-space: nowrap;
}

.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

.btn-primary {
  background: linear-gradient(135deg, #6d28d9, #4a1c8a);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.32);
}
.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.45);
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.6);
  color: #6d28d9;
  border: 1.5px solid rgba(109, 40, 217, 0.30);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: #6d28d9;
  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.18);
}

.btn-icon {
  width: 18px;
  height: 18px;
  display: block;
}

.heart {
  color: #e11d48;
  font-size: 16px;
  line-height: 1;
}

/* === Details === */
.details-wrap {
  background: rgba(255, 255, 255, 0.40);
  border: 1px solid rgba(109, 40, 217, 0.15);
  border-radius: 14px;
  padding: 20px;
  min-height: 200px;
}

/* === Responsive === */
@media (max-width: 768px) {
  .modShow { padding: 16px; }
  .hero-header { padding: 20px; }
  .hero-content { gap: 16px; }
  .dragon-logo { width: 72px; height: 72px; }
  .hero-title { font-size: 24px; }
  .hero-abbr { font-size: 18px; }
  .hero-subtitle { font-size: 13px; }
  .action-buttons { width: 100%; justify-content: stretch; }
  .btn { flex: 1; justify-content: center; }
}
</style>
