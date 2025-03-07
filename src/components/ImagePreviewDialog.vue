<template>
  <div>
    <el-dialog v-model="visible" title="Image Preview" width="600px" style="z-index: 10;" append-to-body>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(img, index) in images" :key="index">
          <el-image :src="img" fit="contain" style="width: 100%; height: 100%;" />
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

// 定义 `images` 作为 `prop`，接收外部图片列表
const props = defineProps({
  images: { type: Array, default: () => [] }
});

const emit = defineEmits(["update:visible"]);

// 控制 `el-dialog` 的显示状态
const visible = ref(false);

// 监听 `visible` 的变化，通知父组件
watch(visible, (newVal) => {
  emit("update:visible", newVal);
});

// 暴露方法，允许父组件调用 `openDialog()`
const openDialog = () => {
  visible.value = true;
};

defineExpose({ openDialog });
</script>
