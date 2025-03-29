<template>
  <div>
    <div>
      <el-container>
        <el-header style="border: green 2px dotted" height="auto">
          <div>
            <h1 class="title">
              Dream World & Mixed Dream World
            </h1>
            <p class="info">
              * When you are trying to sleep, pay attention, you will be teleported to one of the two dimensions at a
              low rate,<br>
              * the first one is almost the same as the overworld, which means once you find a treasure, you can take
              the another one in this through dreaming.<br>
              * The second is a mixed world,in another word, disordered. you will probably find end_city or ghost_tower
              here.<br>
            </p>
            <h2 class="title">Attention</h2>
            <p class="waring">
              * Without sheep talisman in offhand, during teleporting to the dimension you will leave some item and when
              you wake up,
              you'll take them back.<br>
              * However, if you dead in the dimension you will lose the left items. Oh by the way, you will be given
              some items too. for it's a dream.<br>
              * So kill ender dragon to take the sheep talisman would be a better choice. or put items into chests and
              dig a hole to waiting for wake up.
            </p>
          </div>
        </el-header>
        <el-main class="container_main">
          <el-card class="dimension_card">
            <template #header>
              <div class="card-header">
                <h1 class="title">Dream World (Detail)</h1>
                  ...
              </div>
            </template>
          </el-card>

          <el-card class="dimension_card">
            <template #header>
              <div class="card-header">
                <h1 class="title">Mixed Dream World (Detail)</h1>
                  ...
<!--              TODO  -->
              </div>
            </template>
          </el-card>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>

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
</style>
