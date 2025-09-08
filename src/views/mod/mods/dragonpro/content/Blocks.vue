<template>
<div>
  <div style="background: transparent !important;">
    <el-table :data="blockProperty" style="width: 100%;background: transparent" height="100%" border
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
      <el-table-column label="icon" >
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
      <el-table-column prop="additional" label="Additional" >
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
      <el-table-column label="Images" >
        <template #default="{ row }">
          <div class="image-list">
            <el-image
                v-for="(img, index) in row.additionalImg"
                :key="index"
                :src="img"
                fit="cover"
                class="thumbnail"
                @click="openPreview(row.additionalImg)"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <ImagePreviewDialog ref="previewDialog" :images="previewImages" />
  <el-backtop :right="40" :bottom="40" />
</div>
</template>

<script setup>
import {ref, onMounted, watch, nextTick, getCurrentInstance} from "vue";
import ImagePreviewDialog from "@/components/ImagePreviewDialog.vue";
import {fetchBlocks} from "@/util/file_reader.js";
const previewDialog = ref(null); // 预览组件引用
const previewImages = ref([]); // 当前要预览的图片

const openPreview = (images) => {
  previewImages.value = images; // 设置当前要预览的图片
  previewDialog.value.openDialog(); // 调用子组件的方法打开弹窗
};
const blockProperty = ref([]);
const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;
onMounted(() => {
  fetchBlocks(globalVar.lang).then(result => {
    blockProperty.value = result.value;
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
