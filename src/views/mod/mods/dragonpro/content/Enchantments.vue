<template>
<div>
  <div style="background: transparent !important;">
    <el-table :data="enchantmentProperty" style="width: 100%;background: transparent" height="100%" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }" >
      <el-table-column prop="name" label="Block" style="font-weight: bold;font-size: 30px">
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.name"
              placement="top"
          >
            <span :id="'row-' + scope.row.name" class="tl-column">{{ scope.row.name }}</span>
          </el-tooltip>
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
            <span  class="tl-column">{{ scope.row.approach }}</span>
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
            <span  class="tl-column">{{ scope.row.usage }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="additional" label="Additional"  >
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.additional"
              placement="top"
          >
            <span  class="tl-column">{{ scope.row.additional }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import {fetchEnchantments} from "@/util/file_reader.js";

const enchantmentProperty = ref([]);
const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;
onMounted(() => {
  fetchEnchantments(globalVar.lang).then(result => {
    enchantmentProperty.value = result.value;
  });
});
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
