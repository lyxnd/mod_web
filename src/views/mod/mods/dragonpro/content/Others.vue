<template>
  <div class="others-container">
    <h2 class="section-title">联系 &amp; 支持</h2>

    <div class="links-grid">
      <a href="https://space.bilibili.com/1185734513?spm_id_from=333.1007.0.0" class="social-card bili-card" target="_blank" rel="noopener">
        <img src="@/assets/bili.png" class="social-icon" alt="bilibili"/>
        <div class="social-info">
          <span class="social-name">哔哩哔哩</span>
          <span class="social-desc">查看我的主页</span>
        </div>
      </a>

      <a href="https://www.douyin.com/user/self?from_tab_name=main&showTab=post" class="social-card douyin-card" target="_blank" rel="noopener">
        <img src="@/assets/douyin.png" class="social-icon" alt="douyin"/>
        <div class="social-info">
          <span class="social-name">抖音</span>
          <span class="social-desc">查看我的主页</span>
        </div>
      </a>

      <a href="https://www.curseforge.com/minecraft/mc-mods/shadowdragon" class="social-card forge-card" target="_blank" rel="noopener">
        <img src="@/assets/forge.png" class="social-icon" alt="curseforge"/>
        <div class="social-info">
          <span class="social-name">CurseForge</span>
          <span class="social-desc">下载 Mod</span>
        </div>
      </a>
    </div>

<!--    <a href="https://afdian.com/a/EzAiSteve" class="donate-banner" target="_blank" rel="noopener">-->
<!--      ✨ 觉得还不错？可以发电支持一下-->
<!--    </a>-->

    <div class="feedback-box">
      <p>💬 如果遇到 Bug，可以在 Bilibili 私信我，或在 CurseForge 中留言</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.others-container {
  padding: 20px 24px;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  color: #4a1c8a;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(109, 40, 217, 0.25);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.social-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 10px;
  text-decoration: none;
  border: 1.5px solid transparent;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.social-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.bili-card {
  background: rgba(0, 161, 214, 0.08);
  border-color: rgba(0, 161, 214, 0.3);
}
.bili-card:hover { border-color: #00a1d6; }

.douyin-card {
  background: rgba(30, 30, 30, 0.06);
  border-color: rgba(30, 30, 30, 0.2);
}
.douyin-card:hover { border-color: #333; }

.forge-card {
  background: rgba(242, 100, 25, 0.08);
  border-color: rgba(242, 100, 25, 0.3);
}
.forge-card:hover { border-color: #f26419; }

.social-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.social-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.social-name {
  font-size: 17px;
  font-weight: bold;
  color: #1a1a2e;
}

.social-desc {
  font-size: 13px;
  color: #666;
}

.donate-banner {
  position: relative;
  display: block;
  text-align: center;
  padding: 16px 24px;
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.10), rgba(212, 175, 55, 0.12));
  border: 1.5px solid rgba(212, 175, 55, 0.45);
  border-radius: 12px;
  font-size: 17px;
  font-weight: 700;
  color: #6b21a8;
  text-decoration: none;
  margin-bottom: 16px;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.donate-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.55) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.7s ease;
}

.donate-banner:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(109, 40, 217, 0.18), rgba(212, 175, 55, 0.20));
  box-shadow: 0 6px 22px rgba(212, 175, 55, 0.25);
}

.donate-banner:hover::before {
  transform: translateX(100%);
}

.feedback-box {
  background: rgba(109, 40, 217, 0.06);
  border-left: 4px solid #7b2fbe;
  border-radius: 0 8px 8px 0;
  padding: 12px 18px;
}

.feedback-box p {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: #333;
}
</style>
