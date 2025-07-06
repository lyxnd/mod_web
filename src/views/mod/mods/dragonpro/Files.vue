<template>
  <div>
    This is Files~!<br>
    <div id="links">
      <nav>
        <router-link to="/mc/mods/dragonpro/files/fabric">Fabric</router-link>
        <router-link to="/mc/mods/dragonpro/files/forge">Forge</router-link>
      </nav>
      <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'fileComp'
}
</script>

<style>
#links {
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
