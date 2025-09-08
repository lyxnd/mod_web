<template>
  <div>
    <h1 style="color: black;font-weight: bold">Description</h1>
    <div style="display: flex;align-items: center;justify-content: center;margin: 16px 0;">
      <el-input v-model="regex" placeholder="search staffs here" :suffix-icon="Search"
                style="margin-right: 10px; border-radius: 6px; width: 80%" @keyup.enter="search(regex)"
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
      <el-tab-pane label="Others" name="others"/>
    </el-tabs>
    <div class="page-component__scroll" style="overflow-y: auto;height:100vh">
      <el-backtop target=".page-component__scroll" :bottom="100" :right="100" :visibility-height="250">
        <div
            style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 30px;
        color: #1989fa;
      "
        >
          <el-icon :size="30" color="#00D9FF" style="background-color: #C2FFDD;padding:0;margin: 0;">
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
  router.push({name: pane.paneName.valueOf()}) // 注意：paneName 是 el-tab-pane 的 name 属性
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
.mod-tab {
  display: flex;
  justify-content: center; /* 水平居中 */
  padding-left: 10px;
}

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
