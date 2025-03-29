<template>
  <div class="modShow">
    <!-- simple info -->
    <div id="header">
      <img src="/src/assets/dragon-logo.jpg" alt="dragonpro logo" id="dragonlogo">
      <div id="text-content">
        <h5 style="color: black;font-weight: bold;font-size: 26px">Shadow Dragon(SD)</h5>
      </div>
      <div id="buttons">
        <el-button @click="download">
          <el-icon><img src="../../../../assets/download.svg" alt="download icon"></el-icon>
          Download
        </el-button>
        <el-button @click="donate">Donate</el-button>
      </div>
    </div>
    <hr>

    <!-- details -->
    <div id="details">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dragonPro',
  data() {
    return {
      downloads: 10,
      showChooser: false,
      selectedOption1: 'Fabric',
      selectedOption2: 'jdk_21.msi',
      versions:[
        {
          version: 'dragonpro_1.20.2',value:'dragonpro_1.20.2'
        },
        {
          version :'dragonpro_1.21',value: 'dragonpro_1.21'
        },
        {
          version :'jdk_21.msi',value: 'jdk_21.msi'
        }
      ],
    }
  },
  computed:{

  },
  methods: {
    printf(){
      console.log('selectedOption2:'+this.selectedOption2)
    },
    openChooser(){
      this.showChooser=true;
    },
    donate() {
      window.location.href = 'https://afdian.com/a/EzAiSteve';
    },
    download: function () {
      window.location.href = 'https://www.curseforge.com/minecraft/mc-mods/shadowdragon';
    },
  }
}
</script>

<style scoped>
.chooser{
  z-index: 5;
  top:30%;
  position: fixed;
  width: 30%;
  height: 40%;
  left: 35%;
  right: 35%;
  background-color: rgba(0,0,0,0.2);
}
.chooser-content{
  margin: 10px;
  width: 80%;
  display: flex;
  color: rgba(0 ,0 ,0, 0.8);
  flex-direction: column;
}
#selector{
  margin: 10px;
  background-color: rgba(0,0,0,0.3);
}
#close{
  width: 30px;
  height: 30px;
  right: 10px;
  position: absolute;
}
#header {
  display: flex;
  align-items: center;
  z-index: 1;
  position: relative;
}

#dragonlogo {
  margin-right: 10px;
}

#text-content {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

#buttons {
  top: 64px;
  display: flex;
  gap: 10px;
  margin-right: 100px; /* 调整按钮的右边距，使其靠左一点 */
}

.modShow {
  border: 3px solid black;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  overflow-y: auto; /* 允许垂直滚动 */
  max-height: calc(100vh - 64px); /* 设置最大高度，减去导航栏高度 */
}

#links {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

#details {
  border: 2px solid black;
}
</style>
