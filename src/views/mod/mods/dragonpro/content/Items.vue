<template>
  <div style="background: transparent !important;">
    <el-table :data="itemProperty" style="width: 100%;background: transparent" height="600px" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }" table-layout="auto">
      <el-table-column prop="name" label="Item" width="120" style="font-weight: bold;font-size: 30px" fixed/>
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
      <el-table-column label="Images" width="180">
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

    <ImagePreviewDialog ref="previewDialog" :images="previewImages" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ImagePreviewDialog from "@/components/ImagePreviewDialog.vue";
const itemProperty = ref([]);
const previewDialog = ref(null); // 预览组件引用
const previewImages = ref([]); // 当前要预览的图片

const openPreview = (images) => {
  previewImages.value = images; // 设置当前要预览的图片
  previewDialog.value.openDialog(); // 调用子组件的方法打开弹窗
};
const fetchData = async () => {
  try {
    const response = await fetch("/assets/desc/items.json");
    const jsonData = await response.json();
    itemProperty.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      return {
        name: item[key].Name || item[key].name, // 适配不同的字段命名
        icon: item[key].Icon || item[key].icon, // 适配不同的字段命名
        approach: item[key].Approach || item[key].approach,
        usage: item[key].Usage || item[key].usage,
        sneak: item[key].Sneak || item[key].sneak,
        erupt: item[key].Erupt || item[key].erupt,
        attribute: item[key].Attribute || item[key].attribute,
        additional: item[key].Additional || item[key].additional,
        additionalImg: item[key].AdditionalImg || item[key].additionalImg
      };
    });
    // updateParentData();
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
.image-list {
  display: flex;
  gap: 5px;
}

.thumbnail {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  object-fit: cover;
}
:deep(.el-table tr){
  background-color: transparent;
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
