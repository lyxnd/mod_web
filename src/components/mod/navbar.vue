<template>
  <nav class="navbar">
    <router-link to="/mc/mods">Mods</router-link>
    <router-link to="/mc/contact">Contact</router-link>
    <router-link to="/mc/donate">...</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

<style >
.navbar {
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
