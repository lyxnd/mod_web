<template>
  <nav class="navbar">
    <router-link to="/mc/mods">Mods</router-link>
    <router-link to="/mc/contact">Contact</router-link>
    <router-link to="/mc/donate">...</router-link>

  </nav>

  <el-select
      v-model="language"
      class="lang"
      placeholder="中文"
      size="large"
      @change="updateLang"
  >
    <el-option
        v-for="item in lan"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>
</template>

<script setup>
import {getCurrentInstance, ref} from "vue";
const { appContext } = getCurrentInstance();
const globalVar = appContext.config.globalProperties.$globalVar;
const language = ref('')
const lan = [
  {
    value: 'zh_cn',
    label: '中文',
  },
  {
    value: 'en_us',
    label: 'English',
  },
]
const updateLang=(val)=>{
  language.value=val
  globalVar.lang=val
}
</script>

<style>
.lang {
  z-index: 10;
  top: 10px;
  right: 80px;
  width: 80px !important;
}

.navbar {
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row; /* 纵向排列 */
  justify-content: left;
  background-color: #35495e;
  padding: 1rem; /* 确保导航栏有足够的内边距 */
  z-index: 2; /* 确保导航栏在所有内容的上方 */
}

.navbar a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}
</style>
