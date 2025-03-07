<template>
<div>
  <div style="background: transparent !important;">
    <el-table :data="enchantmentProperty" style="width: 100%;background: transparent" height="100%" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }" table-layout="auto">
      <el-table-column prop="name" label="Block" width="120" style="font-weight: bold;font-size: 30px"/>
      <el-table-column prop="approach" label="Approach" width="150" />
      <el-table-column prop="usage" label="Usage" min-width="150" resizable/>
      <el-table-column prop="additional" label="Additional" width="120" />
    </el-table>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const enchantmentProperty = ref([]);
const fetchData = async () => {
  try {
    const response = await fetch("/assets/desc/enchantments.json");
    const jsonData = await response.json();
    enchantmentProperty.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      return {
        name: item[key].Name || item[key].name, // 适配不同的字段命名
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
  emit('updateData', enchantmentProperty.value);
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
