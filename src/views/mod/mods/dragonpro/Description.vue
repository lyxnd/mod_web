<template>
  <div class="description-wrap">
    <div class="page-title-row">
      <span class="title-bar"></span>
      <h1 class="page-title">Description</h1>
    </div>

    <div class="search-row">
      <el-input
          v-model="regex"
          placeholder="Search staffs by name (Items / Blocks / Entities…)"
          :suffix-icon="Search"
          class="search-input"
          @keyup.enter="search(regex)"
      />
    </div>

    <el-tabs v-model="activeTab" @tab-click="onTabChange" class="mod-tab" type="card">
      <el-tab-pane label="Items" name="items"/>
      <el-tab-pane label="Blocks" name="blocks"/>
      <el-tab-pane label="Entities" name="entities"/>
      <el-tab-pane label="Enchantments" name="enchantments"/>
      <el-tab-pane label="Effects" name="effects"/>
      <el-tab-pane label="Dimensions" name="dimensions"/>
      <el-tab-pane label="Events" name="events"/>
      <el-tab-pane label="Strategy" name="strategy"/>
      <el-tab-pane label="Others" name="others"/>
    </el-tabs>

    <div class="page-component__scroll" style="overflow-y: auto;height:100vh">
      <el-backtop target=".page-component__scroll" :bottom="100" :right="100" :visibility-height="250">
        <div class="backtop-btn">
          <el-icon :size="24" color="#6d28d9">
            <Top/>
          </el-icon>
        </div>
      </el-backtop>
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance, nextTick, onMounted, ref, watch} from "vue";
import {Search, Top} from "@element-plus/icons-vue";
import router from "@/router/index.js";
import {fetchStaffs} from "@/util/file_reader.js";

const regex = ref('')
const activeTab = ref('Items')

const itemWithType = ref({})
const {appContext} = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;

const search = async (val) => {
  const keys = Object.keys(itemWithType.value)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    if (key.includes(val)) {
      activeTab.value = itemWithType.value[key]
      router.push({name: activeTab.value})
      await nextTick(3)
      const id = `row-${val}`
      const newEl = document.getElementById(id)
      if (newEl) {
        newEl.scrollIntoView({behavior: 'smooth', block: 'center'})
      }
      break
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
const onTabChange = (pane) => {
  router.push({name: pane.paneName.valueOf()})
}
onMounted(() => {
  activeTab.value = 'items'
  router.push({name: activeTab.value})
  fetchStaffs(globalVar.lang).then(result => {
    itemWithType.value = result.value;
  });
})
</script>

<style scoped>
.description-wrap {
  padding: 4px 2px;
}

/* === Title === */
.page-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
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

/* === Search === */
.search-row {
  display: flex;
  justify-content: center;
  margin: 0 0 18px;
}

.search-input {
  width: min(80%, 640px);
}

:deep(.search-input .el-input__wrapper) {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 10px;
  box-shadow: 0 0 0 1.5px rgba(109, 40, 217, 0.18) inset;
  transition: box-shadow 0.2s ease;
  padding: 4px 14px;
}

:deep(.search-input .el-input__wrapper:hover) {
  box-shadow: 0 0 0 1.5px rgba(109, 40, 217, 0.40) inset;
}

:deep(.search-input .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 2px #6d28d9 inset, 0 4px 12px rgba(109, 40, 217, 0.15);
}

:deep(.search-input .el-input__inner) {
  font-size: 14px;
  color: #1a0b2e;
  height: 36px;
}

/* === Tabs === */
.mod-tab {
  margin-bottom: 16px;
}

:deep(.el-tabs__header) {
  margin: 0 0 14px;
  border-bottom: none;
}

:deep(.el-tabs__nav) {
  border: none !important;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

:deep(.el-tabs__header .el-tabs__item) {
  background: rgba(255, 255, 255, 0.55);
  border: 1.5px solid rgba(109, 40, 217, 0.18) !important;
  border-radius: 10px !important;
  font-weight: 600;
  font-size: 14px;
  color: #4b5563;
  height: 38px;
  line-height: 38px;
  padding: 0 16px !important;
  transition: all 0.2s ease;
}

:deep(.el-tabs__header .el-tabs__item:hover) {
  background: rgba(109, 40, 217, 0.08);
  color: #6d28d9;
  border-color: rgba(109, 40, 217, 0.40) !important;
}

:deep(.el-tabs__header .el-tabs__item.is-active) {
  background: linear-gradient(135deg, #6d28d9, #4a1c8a) !important;
  color: #ffffff !important;
  border-color: transparent !important;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(109, 40, 217, 0.32);
}

:deep(.el-tabs__content) {
  background: transparent;
}

/* === Backtop === */
.backtop-btn {
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border: 1.5px solid rgba(109, 40, 217, 0.30);
  box-shadow: 0 4px 14px rgba(109, 40, 217, 0.20);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.backtop-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.32);
}

h4 {
  font-weight: bold;
}
</style>
