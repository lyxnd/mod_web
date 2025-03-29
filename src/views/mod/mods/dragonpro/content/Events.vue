<template>
  <div>
    <el-container>
      <el-header style="border: cyan 2px dotted;" height="auto">
        <div style="padding: 5px">
          <h1 class="title">Black qi leak out of the world</h1>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Background" name="1">
              <p class="info">
                In the ancient world, there lives Eight Demon Sorcerers (also known as the Demon Lords)
                are powerful and ancient demonic beings based on the Eight Immortals of Chinese mythology.
                <br><br>
                Even though the Eight Demon Sorcerers were previously sealed back into the Netherworld,
                their demonic energy persisted in the mortal realm.
                <br><br>
                The Demon Chi represents the essence and power of each demon,
                which cannot be completely destroyed. This residual energy remained on Earth,
                each contained within a sacred artifact known as an Immortal Relic.
                These relics were left behind by the Eight Immortal Sorcerers,
                who originally defeated and sealed the demons long ago.
                <br><br>
                As time passes, the Demon Chi contained within the Immortal Relics will,
                under the influence of The Big Dipper, gradually be released.
                This energy, once unleashed, invades living beings,
                slowly taking control of their consciousness and manipulating them to commit acts of destruction.
                <br><br>
                According to historical records,
                these incidents have always occurred during the phenomenon known as the Seven-Star Alignment.
                It is hoped that future righteous sorcerers will be able to subdue these demonic energies,
                restoring peace and balance to the world.
              </p>
            </el-collapse-item>
          </el-collapse>
          <br>
          <el-divider>
            <el-icon><star-filled /></el-icon>
          </el-divider>
          <h1 class="title">Game present</h1>
          <p style="margin-top: 10px" class="info">
            * In the game, every ten days, the will happen in the night, and the other days this could happen at a lower rate.<br>
            * tsolan, the moon demon, controlling the moon power, which means you could change the event if you take that power. <br>
          </p>
        </div>
      </el-header>
      <el-main class="container_main">
        <el-card>
          ...
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {StarFilled} from "@element-plus/icons-vue";

const activeNames = ref(['1'])
</script>

<style scoped>
:deep(.el-collapse-item__header){
  font-weight: bold !important;
  color: #c45656 !important;
  padding-left: 15px !important;
  font-size: 20px !important;
  background-color: rgba(255, 255, 250,0.4);
}
:deep(.el-collapse-item__content){
  background-color: rgba(255, 255, 250,0.4) !important;
}
.title {
  color: black;
  font-weight: bolder
}
.info {
  color: black;
  font-weight: bold;
  padding: 4px 16px;
  font-size: 18px;
}
</style>
