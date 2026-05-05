<template>
  <transition name="fade-scale">
    <div v-if="visible" class="chooser-mask" @click.self="close">
      <div class="chooser-panel">
        <button class="close-btn" @click="close" aria-label="Close">×</button>

        <div class="chooser-header">
          <h2 class="chooser-title">Choose Version</h2>
          <p class="chooser-desc">Pick the loader and version that matches your Minecraft setup.</p>
        </div>

        <div class="chooser-body">
          <div class="field">
            <label class="field-label">Mod Loader</label>
            <select v-model="loader" class="field-select">
              <option value="Fabric">Fabric</option>
              <option value="Forge">Forge</option>
            </select>
          </div>

          <div class="field">
            <label class="field-label">Version</label>
            <select v-model="version" class="field-select">
              <option v-for="v in versions" :key="v.value" :value="v.value">
                {{ v.version }}
              </option>
            </select>
          </div>
        </div>

        <div class="chooser-footer">
          <button class="btn btn-ghost" @click="close">Cancel</button>
          <button class="btn btn-primary" @click="confirm">Continue</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'chooserComp',
  props: {
    visible: { type: Boolean, default: false },
    versions: {
      type: Array,
      default: () => [
        { version: 'dragonpro_1.20.2', value: 'dragonpro_1.20.2' },
        { version: 'dragonpro_1.21', value: 'dragonpro_1.21' }
      ]
    }
  },
  emits: ['close', 'confirm'],
  data() {
    return {
      loader: 'Fabric',
      version: 'dragonpro_1.20.2'
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm', { loader: this.loader, version: this.version });
    }
  }
}
</script>

<style scoped>
.chooser-mask {
  position: fixed;
  inset: 0;
  background: rgba(26, 11, 46, 0.45);
  backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.chooser-panel {
  position: relative;
  width: min(440px, 100%);
  background: rgba(255, 255, 255, 0.96);
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 60px rgba(60, 20, 120, 0.30);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  color: #6b7280;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.18s ease, color 0.18s ease;
}

.close-btn:hover {
  background: rgba(109, 40, 217, 0.10);
  color: #6d28d9;
}

.chooser-header { margin-bottom: 18px; }

.chooser-title {
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 800;
  color: #1a0b2e;
}

.chooser-desc {
  margin: 0;
  font-size: 13px;
  color: #6b7280;
}

.chooser-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  font-size: 12px;
  font-weight: 700;
  color: #4b5563;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.field-select {
  height: 40px;
  border-radius: 10px;
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  background: rgba(255, 255, 255, 0.85);
  padding: 0 12px;
  font-size: 14px;
  color: #1a0b2e;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.field-select:focus {
  border-color: #6d28d9;
  box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.15);
}

.chooser-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 22px;
}

.btn {
  height: 40px;
  padding: 0 18px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.btn:hover { transform: translateY(-1px); }

.btn-primary {
  background: linear-gradient(135deg, #6d28d9, #4a1c8a);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.30);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.40);
}

.btn-ghost {
  background: transparent;
  color: #6b7280;
}

.btn-ghost:hover {
  background: rgba(109, 40, 217, 0.08);
  color: #6d28d9;
}

/* === Transition === */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
}

.fade-scale-enter-from .chooser-panel,
.fade-scale-leave-to .chooser-panel {
  transform: scale(0.96);
}
</style>
