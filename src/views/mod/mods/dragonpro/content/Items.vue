<template>
  <div style="background: transparent !important;overflow-y: auto;height: 100%;">
    <el-table :data="itemProperty" style="width: 100%;background: transparent" height="100%" border
              :header-cell-style="{ background: 'transparent' }" :cell-style="{ background: 'transparent' }" >
      <el-table-column prop="name" label="Item"  style="font-weight: bold;font-size: 30px;"  resizable="resizable">
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
      <el-table-column label="icon" resizable="resizable">
        <template #default="{ row }">
          <img v-if="row.icon" :src="row.icon" alt="icon" style="width: 60px; height: 60px;" />
        </template>
      </el-table-column>
      <el-table-column prop="approach" label="Approach" resizable="resizable">
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
      <el-table-column prop="usage" label="Usage" resizable="resizable" min-width="120">
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
      <el-table-column prop="attribute" label="Attribute" resizable="resizable">
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.attribute"
              placement="top"
          >
            <span  class="tl-column">{{ scope.row.attribute }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="sneak" label="Sneak"  resizable="resizable">
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.sneak"
              placement="top"
          >
            <span  class="tl-column">{{ scope.row.sneak }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="erupt" label="Erupt" resizable="resizable" >
        <template #default="scope">
          <el-tooltip
              class="box-item"
              effect="light"
              :content="scope.row.erupt"
              placement="top"
          >
            <span  class="tl-column">{{ scope.row.erupt }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="additional" label="Additional"  resizable="resizable" min-width="100">
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
      <el-table-column label="Images" resizable="resizable">
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
import {ref, onMounted} from "vue";
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
    const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/items.json`);
    const jsonData = await response.json();
    const baseUrl = import.meta.env.BASE_URL
    itemProperty.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      // 取出原始 additionalImg，可能是数组，也可能不存在
      const rawImgs = item[key].AdditionalImg || item[key].additionalImg || [];

      // 处理图片数组，给相对路径加前缀
      const fixedImgs = Array.isArray(rawImgs)
          ? rawImgs.map(img => (/^https?:\/\//.test(img) ? img : baseUrl + img.replace(/^\/+/, '')))
          : [];
      let icons = item[key].Icon || item[key].icon || '';
      icons=baseUrl+icons
      return {
        name: item[key].Name || item[key].name,
        icon: icons,
        approach: item[key].Approach || item[key].approach,
        usage: item[key].Usage || item[key].usage,
        sneak: item[key].Sneak || item[key].sneak,
        erupt: item[key].Erupt || item[key].erupt,
        attribute: item[key].Attribute || item[key].attribute,
        additional: item[key].Additional || item[key].additional,
        additionalImg: fixedImgs
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
.tl-column{
  font-size: large;
  font-weight: bold;
}

</style>
