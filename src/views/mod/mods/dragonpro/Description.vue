<template>
  <div class="description-wrapper">
    <h1 style="color: black;font-weight: bold">Description</h1>
    <div style="display: flex;align-items: center;justify-content: center;margin: 16px 0;">
      <el-input v-model="regex" placeholder="search staffs here" :suffix-icon="Search"
                style="margin-right: 10px; border-radius: 6px; width: 80%" @keyup.enter="search(regex)"
      />
      <el-switch active-text="启用模糊搜索" v-model="fuzzy_search"/>
    </div>

    <el-tabs type="border-card" style="background: transparent;position: relative;" v-model="activeTab">
      <el-tab-pane label="Items" name="Items" class="tab-pane">
        <Items />
      </el-tab-pane>
      <el-tab-pane label="Blocks" name="Blocks" class="tab-pane">
        <Blocks />
      </el-tab-pane>
      <el-tab-pane label="Entities" name="Entities" class="tab-pane">
        <Entities />
      </el-tab-pane>
      <el-tab-pane label="Enchantments" name="Enchantments" class="tab-pane">
        <Enchantments />
      </el-tab-pane>
      <el-tab-pane label="Effects" name="Effects" class="tab-pane">
        <Effects />
      </el-tab-pane>
      <el-tab-pane label="Dimensions" name="Dimensions" class="tab-pane">
        <Dimensions />
      </el-tab-pane>
      <el-tab-pane label="Events" name="Events" class="tab-pane">
        <Events />
      </el-tab-pane>
      <el-tab-pane label="Others" name="Others" class="tab-pane">
        <Others />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Items from "@/views/mod/mods/dragonpro/content/Items.vue";
import Blocks from "@/views/mod/mods/dragonpro/content/Blocks.vue";
import Enchantments from "@/views/mod/mods/dragonpro/content/Enchantments.vue";
import Effects from "@/views/mod/mods/dragonpro/content/Effects.vue";
import Dimensions from "@/views/mod/mods/dragonpro/content/Dimensions.vue";
import Events from "@/views/mod/mods/dragonpro/content/Events.vue";
import Others from "@/views/mod/mods/dragonpro/content/Others.vue";
import Entities from "@/views/mod/mods/dragonpro/content/Entities.vue";
import {nextTick, ref, watch} from "vue";
import {Search} from "@element-plus/icons-vue";

const regex = ref('')
const fuzzy_search = ref(false)
const activeTab = ref('Items')
const tags=ref(['item','block','effect','enchantment','entity'])

const search=async (val)=>{
  if(fuzzy_search.value){

  }else {
    for (let i = 0; i < 5; i++) {
      const id = `row-${val}_${tags.value[i]}`
      const el = document.getElementById(id)

      if (el) {
        const tabMap = {
          item: 'Items',
          block: 'Blocks',
          effect: 'Effects',
          enchantment: 'Enchantments',
          entity: 'Entities'
        }

        for (const key in tabMap) {
          if (id.endsWith(key)) {
            activeTab.value = tabMap[key]
            await nextTick(3)
            const newEl = document.getElementById(id)
            if (newEl) {
              newEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
            break
          }
        }
        break // 找到就结束循环
      }
    }

  }
}
watch(
    () => regex.value,
    async (val) => {
      if (!val) return
      await nextTick()
      search(val)
    }
)
</script>

<style scoped>
:deep(.el-tabs__header .el-tabs__item) {
  background: lightblue;
  font-weight: bold;
  font-size: 16px;
}

:deep(.el-tabs__header .el-tabs__item.is-active) {
  background: greenyellow !important;
  font-size: 20px;
  color: #1a1a1a !important;
}

.description-wrapper {
  padding: 20px;
  height: 100%; /* 确保内容填满整个容器 */
}

.tab-pane {
  background: transparent !important;
  font-weight: bold;
}

:deep(.el-tabs__content) {
  background: transparent;
}

h4 {
  font-weight: bold;
}
</style>
