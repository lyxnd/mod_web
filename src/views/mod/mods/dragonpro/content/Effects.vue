<template>
<div>
  <div style="background: transparent !important;">
    <el-table :data="effectProperty" style="width: 100%;background: transparent" height="100%" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }">
      <el-table-column prop="name" label="Block" style="font-weight: bold;font-size: 30px">
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.name"
              placement="top"
          >
            <span  :id="'row-' + scope.row.name" class="tl-column">{{ scope.row.name }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="icon">
        <template #default="{ row }">
          <img v-if="row.icon" :src="row.icon" alt="icon" style="width: 60px; height: 60px;" />
        </template>
      </el-table-column>
      <el-table-column prop="approach" label="Approach"  >
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.approach"
              placement="top"
          >
            <span class="tl-column">{{ scope.row.approach }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="usage" label="Usage" resizable>
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.usage"
              placement="top"
          >
            <span class="tl-column">{{ scope.row.usage }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="additional" label="Additional" >
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.additional"
              placement="top"
          >
            <span class="tl-column">{{ scope.row.additional }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script setup>
import {ref, onMounted, watch, nextTick} from "vue";
const effectProperty = ref([]);
const fetchData = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/effects.json`);
    const jsonData = await response.json();
    const baseUrl = import.meta.env.BASE_URL
    effectProperty.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      // 取出原始 additionalImg，可能是数组，也可能不存在
      let icons = item[key].Icon || item[key].icon || '';
      icons=baseUrl+icons
      return {
        name: item[key].Name || item[key].name, // 适配不同的字段命名
        icon: icons, // 适配不同的字段命名
        approach: item[key].Approach || item[key].approach,
        usage: item[key].Usage || item[key].usage,
        sneak: item[key].Sneak || item[key].sneak,
        erupt: item[key].Erupt || item[key].erupt,
        attribute: item[key].Attribute || item[key].attribute,
        additional: item[key].Additional || item[key].additional
      };
    });
  } catch (error) {
    console.error("加载 JSON 失败:", error);
  }
};
onMounted(fetchData);
</script>

<style scoped>
.el-table{
  background-color:transparent;
}
:deep(.el-table tr){
  background-color:transparent;
}

:deep(.el-table th) {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: bolder;
  font-size: 18px;
  color: blue;
  background-color:transparent;
}
:deep(.el-table td) {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: bold;
  font-size: 16px;
  background-color:transparent;
  color: black;
}
img {
  display: block;
  margin: auto;
}
</style>
