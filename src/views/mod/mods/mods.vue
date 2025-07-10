<template>
  <div id="package">
    <nav id="headers" v-if="shown">
      <router-link to="/mc/mods/dragonpro" @click="hide">Shadow Dragon</router-link>
      <router-link to="/mc/mods/shadowdragon" @click="hide">DragonPro</router-link>
    </nav>

    <div id="modShow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

export default {
  name: 'modsComp',
  setup() {
    const shown = ref(true); // 控制导航栏的显示状态
    const route = useRoute();
    const router = useRouter();

    // 在组件加载时恢复导航栏的状态
    onMounted(() => {
      const storedState = localStorage.getItem('navShown');
      if (storedState !== null) {
        shown.value = JSON.parse(storedState);
      }

      // 初次加载根据当前路由设置导航栏状态
      updateNavVisibility(route.name);
    });

    // 隐藏导航栏并保存状态到 localStorage
    const hide = () => {
      shown.value = false;
      localStorage.setItem('navShown', JSON.stringify(shown.value));
    };

    // 更新导航栏可见性状态
    const updateNavVisibility = (routeName) => {
      if (routeName === 'mods') {
        shown.value = true; // 显示导航栏
      } else if (routeName.startsWith('mods_')) {
        shown.value = false; // 隐藏导航栏
      }
      // 保存状态到 localStorage
      localStorage.setItem('navShown', JSON.stringify(shown.value));
    };

    // 在路由更新前执行操作
    onBeforeRouteUpdate((to, from, next) => {
      console.log(to.path)
      updateNavVisibility(to.name);
      next();
    });

    return { shown, hide };
  },
}
</script>

<style>
#modShow {
  overflow-y: auto;
  height: 100vh;
}
#headers {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#headers a {
  color: #181818;
  font-size: xx-large;
}

router-link {
  font-size: 1.5em;
  margin: 10px 0;
  color: black;
  text-decoration: none;
  text-decoration-color: #181818;
}

router-link.router-link-exact-active {
  font-weight: bold;
  color: black;
}
</style>
