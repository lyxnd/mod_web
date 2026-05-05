<template>
  <div class="strategy-wrap">
    <!-- Hero -->
    <section class="strategy-hero">
      <span class="hero-tag">Walkthrough</span>
      <h1 class="hero-title">How to play this mod?</h1>
      <p class="hero-subtitle">Three viable routes to begin your journey — pick the one that suits your playstyle.</p>
    </section>

    <!-- Routes -->
    <section class="route-card" id="route1">
      <div class="route-head">
        <span class="route-num">01</span>
        <h2 class="route-title">Get sheep talisman first</h2>
        <span class="route-badge">Vanilla → Dragon</span>
      </div>
      <ul class="route-body">
        <li>In the beginning, play as usual and kill the Ender Dragon — you are rewarded with the <strong>Sheep Talisman</strong>.</li>
        <li>Use the Sheep Talisman's abilities: <strong>teleport</strong>, <strong>exchange teleport</strong>, <strong>soul out</strong>, and <strong>asleep</strong>.</li>
        <li>The two teleport abilities let you return home easily and jump back to where you were exploring.</li>
        <li><strong>Soul out</strong> (free camera) lets you find treasures and structures very quickly — but you can only return to your body by crashing back into it.</li>
        <li><strong>Asleep</strong> lets you enter the dream world, doubling structure treasure rewards.</li>
        <li>After collecting some talismans and equipment, you are ready to fight the demons.</li>
      </ul>
    </section>

    <section class="route-card" id="route2">
      <div class="route-head">
        <span class="route-num">02</span>
        <h2 class="route-title">Start in a funny way</h2>
        <span class="route-badge">Maze · Treasure</span>
      </div>
      <ul class="route-body">
        <li>Find the <strong>maze item</strong> and use it to generate a maze; treasure barrels will spawn alongside it.</li>
        <li>Loot powerful items — <strong>bony_spur</strong>, <strong>xp_pool</strong>, <strong>dragon_bow</strong> — to help you push further.</li>
        <li>Then enhance your equipment to make it stronger.</li>
      </ul>
    </section>

    <section class="route-card" id="route3">
      <div class="route-head">
        <span class="route-num">03</span>
        <h2 class="route-title">A challenging way · The Ancient City</h2>
        <span class="route-badge">Hard mode</span>
      </div>
      <ul class="route-body">
        <li>Find the <strong>talisman pocket</strong> in the Ancient City and store the talismans you found by pressing <kbd>B</kbd> to select a slot.</li>
        <li>With the <strong>chicken talisman</strong> you can fly; with <strong>sneak</strong>, mobs won't attack you, etc.</li>
        <li>Then play freely as you wish.</li>
      </ul>
    </section>

    <!-- Tips -->
    <section class="tip-card" id="tip">
      <div class="tip-head">
        <span class="tip-icon">💡</span>
        <h2 class="tip-title">Some tips</h2>
      </div>
      <ul class="route-body">
        <li><strong>double_stranded_sword</strong>, <strong>sheep_talisman</strong>, <strong>talisman_pocket</strong>, <strong>hand_chain</strong> — all support pressing <kbd>B</kbd> to choose ability.</li>
        <li><strong>Pay attention:</strong> after wearing <code>talisman_pocket</code> or <code>samurai_mask</code>, you cannot take them off until death.</li>
        <li>There are commands to set configuration; however they only persist in a single save.</li>
      </ul>

      <div class="commands-box">
        <h3 class="commands-title">
          <span class="cmd-prefix">/shadow</span>
          <span class="cmd-prefix-tag">command set</span>
        </h3>
        <div class="command-list">
          <div class="command-item">
            <span class="cmd-name">log</span>
            <span class="cmd-desc">Print basic info such as moon_phase…</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set render_hp</span>
            <span class="cmd-desc">Toggle whether the HP bar is rendered in the HUD</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set render_qi</span>
            <span class="cmd-desc">Toggle whether the Qi bar is rendered in the HUD</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set moon_phase</span>
            <span class="cmd-desc">Set moon phase [0, 7]</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set moon_present</span>
            <span class="cmd-desc">Toggle whether to trigger the demon-qi event</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set show_welcome</span>
            <span class="cmd-desc">Toggle the welcome message when joining the world</span>
          </div>
          <div class="command-item">
            <span class="cmd-name">set show_more_info</span>
            <span class="cmd-desc">Toggle extra info on the HUD</span>
          </div>
          <div class="command-item more">
            <span class="cmd-name">…</span>
            <span class="cmd-desc">More commands available in-game</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.strategy-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 4px 2px;
}

/* === Hero === */
.strategy-hero {
  text-align: center;
  padding: 24px 20px;
  background:
      radial-gradient(circle at 30% 30%, rgba(109, 40, 217, 0.10), transparent 60%),
      radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.10), transparent 60%),
      rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.25);
  border-radius: 14px;
}

.hero-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.10);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 8px;
}

.hero-title {
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(135deg, #3b0764 0%, #6d28d9 60%, #b45309 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.3px;
}

.hero-subtitle {
  margin: 6px auto 0;
  font-size: 14px;
  color: #4b5563;
  max-width: 560px;
  line-height: 1.6;
}

/* === Route Card === */
.route-card {
  background: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.20);
  border-radius: 14px;
  padding: 20px 22px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.route-card:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 40, 217, 0.45);
  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.10);
}

.route-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(109, 40, 217, 0.22);
}

.route-num {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6d28d9, #4a1c8a);
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(109, 40, 217, 0.30);
}

.route-title {
  flex: 1;
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #3b0764;
  min-width: 200px;
}

.route-badge {
  font-size: 11px;
  font-weight: 700;
  color: #6d28d9;
  background: rgba(109, 40, 217, 0.10);
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.3px;
}

.route-body {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.route-body li {
  position: relative;
  padding: 8px 14px 8px 30px;
  background: rgba(109, 40, 217, 0.04);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.7;
  color: #1a0b2e;
}

.route-body li::before {
  content: '◆';
  position: absolute;
  left: 12px;
  top: 8px;
  color: #6d28d9;
  font-size: 10px;
}

.route-body strong {
  color: #6d28d9;
  font-weight: 700;
}

.route-body code {
  background: rgba(109, 40, 217, 0.10);
  color: #5b21b6;
  font-family: ui-monospace, "SF Mono", Consolas, monospace;
  font-size: 13px;
  padding: 1px 6px;
  border-radius: 4px;
}

.route-body kbd {
  display: inline-block;
  padding: 1px 7px;
  background: linear-gradient(180deg, #ffffff, #e5e7eb);
  border: 1px solid #c7c7d1;
  border-bottom-width: 2px;
  border-radius: 5px;
  font-size: 12px;
  font-family: ui-monospace, "SF Mono", Consolas, monospace;
  color: #1a0b2e;
  font-weight: 600;
  line-height: 1.3;
}

/* === Tip Card === */
.tip-card {
  background:
      radial-gradient(circle at top right, rgba(212, 175, 55, 0.12), transparent 50%),
      rgba(255, 255, 250, 0.65);
  border: 1.5px solid rgba(212, 175, 55, 0.40);
  border-radius: 14px;
  padding: 20px 22px;
}

.tip-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px dashed rgba(212, 175, 55, 0.40);
}

.tip-icon {
  font-size: 20px;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #fef08a, #d4af37);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tip-title {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #713f12;
}

/* === Commands Box === */
.commands-box {
  margin-top: 14px;
  background: #1a0b2e;
  border-radius: 10px;
  padding: 14px 18px;
  border: 1px solid rgba(109, 40, 217, 0.40);
  box-shadow: inset 0 0 24px rgba(109, 40, 217, 0.18);
}

.commands-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
}

.cmd-prefix {
  font-family: ui-monospace, "SF Mono", Consolas, monospace;
  color: #c4b5fd;
  font-size: 14px;
  background: rgba(109, 40, 217, 0.30);
  padding: 3px 10px;
  border-radius: 6px;
}

.cmd-prefix-tag {
  font-size: 11px;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.command-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.command-item {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  transition: background 0.18s ease;
}

.command-item:hover {
  background: rgba(109, 40, 217, 0.18);
}

.cmd-name {
  flex-shrink: 0;
  font-family: ui-monospace, "SF Mono", Consolas, monospace;
  font-size: 13px;
  color: #fbbf24;
  font-weight: 600;
  min-width: 130px;
}

.cmd-desc {
  font-size: 13px;
  color: #d4d4d8;
  line-height: 1.5;
}

.command-item.more .cmd-desc {
  color: #9ca3af;
  font-style: italic;
}
</style>
