<template>
  <div class="events-wrap">
    <!-- Lore card -->
    <article class="lore-card">
      <header class="lore-header">
        <span class="lore-icon">☯</span>
        <div>
          <h2 class="lore-title">Black Qi leak out of the world</h2>
          <p class="lore-tag">Ancient curse · Eight Demon Sorcerers</p>
        </div>
      </header>

      <el-collapse v-model="activeNames" class="lore-collapse">
        <el-collapse-item title="Background" name="1">
          <div class="lore-paragraph">
            <p>
              In the ancient world, there lives <strong>Eight Demon Sorcerers</strong>
              (also known as the Demon Lords) — powerful and ancient demonic beings
              based on the Eight Immortals of Chinese mythology.
            </p>
            <p>
              Even though the Eight Demon Sorcerers were previously sealed back into
              the Netherworld, their demonic energy persisted in the mortal realm.
            </p>
            <p>
              The <strong>Demon Chi</strong> represents the essence and power of each
              demon, which cannot be completely destroyed. This residual energy
              remained on Earth, each contained within a sacred artifact known as an
              <strong>Immortal Relic</strong>. These relics were left behind by the
              Eight Immortal Sorcerers, who originally defeated and sealed the demons
              long ago.
            </p>
            <p>
              As time passes, the Demon Chi contained within the Immortal Relics
              will, under the influence of <strong>The Big Dipper</strong>, gradually
              be released. This energy, once unleashed, invades living beings, slowly
              taking control of their consciousness and manipulating them to commit
              acts of destruction.
            </p>
            <p>
              According to historical records, these incidents have always occurred
              during the phenomenon known as the <strong>Seven-Star Alignment</strong>.
              It is hoped that future righteous sorcerers will be able to subdue
              these demonic energies, restoring peace and balance to the world.
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </article>

    <!-- Game presentation -->
    <article class="present-card">
      <header class="present-header">
        <span class="present-icon">★</span>
        <h2 class="present-title">In-game Presentation</h2>
      </header>

      <ul class="present-list">
        <li>
          <span class="bullet">▸</span>
          <span>Every <strong>ten days</strong>, the event occurs at night; on other days it can still trigger at a lower rate.</span>
        </li>
        <li>
          <span class="bullet">▸</span>
          <span><strong>Tsolan</strong>, the moon demon, controls the moon's power — taking that power lets you change the event.</span>
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>

<style scoped>
.events-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 4px 2px;
}

/* === Cards === */
.lore-card,
.present-card {
  background:
      radial-gradient(circle at top left, rgba(109, 40, 217, 0.10), transparent 50%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.25);
  border-radius: 14px;
  padding: 20px 24px;
  box-shadow: 0 4px 16px rgba(60, 20, 120, 0.06);
}

/* === Lore Header === */
.lore-header,
.present-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(109, 40, 217, 0.25);
}

.lore-icon,
.present-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #ffffff;
  background: linear-gradient(135deg, #1a0b2e, #6d28d9);
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.30);
}

.present-icon {
  background: linear-gradient(135deg, #d97706, #b45309);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.30);
}

.lore-title,
.present-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #3b0764;
  letter-spacing: -0.3px;
}

.lore-tag {
  margin: 2px 0 0;
  font-size: 12px;
  font-weight: 600;
  color: #6d28d9;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* === Collapse === */
:deep(.lore-collapse.el-collapse) {
  border: none;
  background: transparent;
}

:deep(.lore-collapse .el-collapse-item__header) {
  background: rgba(109, 40, 217, 0.06) !important;
  border: 1px solid rgba(109, 40, 217, 0.18) !important;
  border-radius: 10px !important;
  padding: 0 16px !important;
  height: 44px !important;
  font-size: 15px !important;
  font-weight: 700 !important;
  color: #6d28d9 !important;
  margin-bottom: 8px;
}

:deep(.lore-collapse .el-collapse-item__wrap) {
  background: transparent !important;
  border: none !important;
}

:deep(.lore-collapse .el-collapse-item__content) {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(109, 40, 217, 0.15);
  border-radius: 10px;
  padding: 16px 20px !important;
}

.lore-paragraph p {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.85;
  color: #1a0b2e;
}

.lore-paragraph p:last-child { margin-bottom: 0; }

.lore-paragraph strong {
  color: #6d28d9;
  font-weight: 700;
}

/* === Present list === */
.present-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.present-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  background: rgba(212, 175, 55, 0.07);
  border-left: 3px solid #d97706;
  border-radius: 0 8px 8px 0;
  font-size: 15px;
  line-height: 1.7;
  color: #1a0b2e;
}

.bullet {
  color: #d97706;
  font-weight: 700;
  flex-shrink: 0;
}

.present-list strong {
  color: #b45309;
  font-weight: 700;
}
</style>
