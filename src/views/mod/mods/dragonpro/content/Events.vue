<template>
<div>
  <div style="background: transparent !important;">
    <el-table :data="blockProperty" style="width: 100%;background: transparent" height="100%" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }" table-layout="auto">
      <el-table-column prop="name" label="Block" width="120" style="font-weight: bold;font-size: 30px"/>
      <el-table-column label="icon" width="100">
        <template #default="{ row }">
          <img v-if="row.icon" :src="row.icon" alt="icon" style="width: 60px; height: 60px;" />
        </template>
      </el-table-column>
      <el-table-column prop="approach" label="Approach" width="150" />
      <el-table-column prop="usage" label="Usage" min-width="150" resizable/>
      <el-table-column prop="attribute" label="Attribute" min-width="80" resizable/>
      <el-table-column prop="sneak" label="Sneak" width="100" />
      <el-table-column prop="erupt" label="Erupt" width="100" />
      <el-table-column prop="additional" label="Additional" width="120" />
    </el-table>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const blockProperty = ref([]);
const fetchData = async () => {
  try {
    const response = await fetch("/assets/desc/blocks.json");
    const jsonData = await response.json();
    blockProperty.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      return {
        name: item[key].Name || item[key].name, // 适配不同的字段命名
        icon: item[key].Icon || item[key].icon, // 适配不同的字段命名
        approach: item[key].Approach || item[key].approach,
        usage: item[key].Usage || item[key].usage,
        sneak: item[key].Sneak || item[key].sneak,
        erupt: item[key].Erupt || item[key].erupt,
        attribute: item[key].Attribute || item[key].attribute,
        additional: item[key].Additional || item[key].additional
      };
    });
    updateParentData();
  } catch (error) {
    console.error("加载 JSON 失败:", error);
  }
};
const emit = defineEmits(['updateData']);

const updateParentData = () => {
  emit('updateData', blockProperty.value);
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
}
:deep(.el-table td) {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: bold;
  font-size: 16px;
  background: transparent;
  color: black;
}
img {
  display: block;
  margin: auto;
}
</style>
