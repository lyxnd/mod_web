<template>
  <div id="index">
    <div id="category" v-if="isNavVisible">
      <nav>
        <router-link to="/" @click="hideNav">Home Page</router-link>
        <router-link to="/mc" @click="hideNav">Minecraft Mod</router-link>
        <router-link to="/application" @click="hideNav">Application</router-link>
      </nav>
    </div>
    <div id="sec">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isNavVisible: false // 控制导航栏的显示状态
    };
  },
  methods: {
    hideNav() {
      this.isNavVisible = false; // 点击链接时隐藏导航栏
    }
  }
}
</script>

<style>
#index{
  width: 100% ;
  height: 100%;
  display: flex;
  position: fixed;
}
#sec{
  width: 100vh;
  height: 100vh;
  position: fixed;
}
#category {
  display: flex;
  justify-content: center;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  font-size: 18px;
  text-decoration: none;
  color: #333;
  padding: 10px;
}

nav a:hover {
  color: #007BFF;
}
</style>
