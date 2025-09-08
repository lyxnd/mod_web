<template>
  <div>
    <div>
      <el-container>
        <el-header style="border: green 2px dotted" height="auto">

        </el-header>
        <el-main class="container_main">
          <el-card class="header" v-for="dimension in dimensions">
            <h1 style="font-weight: bolder;font-size: 32px;color: blue">
              {{dimension.name}}
            </h1>
            <h2 class="title">
              {{dimension.title}}
            </h2>
            <p class="info" v-for="info in dimension.introduction">
              * {{info}}<br>
            </p>
            <h2 class="title" v-if="dimension.warning.length>0">Attention</h2>
            <p class="waring" v-for="warn in dimension.warning">
              * {{warn}}<br>
            </p>
            <h2 class="title" v-if="dimension.detail.length>0">Detail</h2>
            <p class="detail" v-for="detail in dimension.detail">
              {{detail}}
            </p>
          </el-card>


        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import {fetchDimensions} from "@/util/file_reader.js";

const {appContext} = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;
const dimensions=ref({})
onMounted(() => {
  fetchDimensions(globalVar.lang).then(result => {
    dimensions.value = result.value;
    console.log(dimensions.value)
  });
})
</script>

<style scoped>
.title {
  color: black;
  font-weight: bolder
}

.container_main {
  margin-top: 10px;
  position: relative;
}

.waring {
  color: #213547;
  font-weight: bold;
  padding: 4px 16px;
  font-size: 18px;
}

.info {
  color: black;
  font-weight: bold;
  padding: 4px 16px;
  font-size: 18px;
}

.dimension_card {
  padding: 15px 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(1, 1, 1, 0.1);
}
.header{
  background-color: rgba(227,227,227,0.1);
  margin-top:4px;
  margin-bottom:4px;
}
</style>
