<template>
  <div>
    <el-card v-for="entity in entities" :key="entity.name" class="custom-card">
      <div style="display: block;">
        <span style="display: flex;align-items: center;width:100%;justify-content: center">
          <el-button round type="success" @click="changeRenderedModel(entity.modelUrl)" v-if="renderModelUrl!==entity.modelUrl">渲染模型</el-button>
          <el-button round type="danger" @click="cancelRenderModel" v-if="renderModelUrl===entity.modelUrl">禁用渲染</el-button>
        </span>
        <ModleViewer :model-url="entity.modelUrl" v-if="entity.hasModel&&renderModelUrl===entity.modelUrl"/>
      </div>
      <!-- 图片轮播 -->
      <el-carousel height="auto" type="card">
        <el-carousel-item v-for="(image, index) in entity.images" :key="index" style="min-height: 400px">
          <img :src="image" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>

      <!--  属性区    -->
      <div>
        <h3 style="font-size: 25px;font-weight: bold;" :id="'row-' + entity.name">{{entity.name}} :</h3>
        <span style="border: hotpink dashed 2px;padding: 5px;margin-bottom: 15px">
          <el-tag type="success" class="attribute">Max Health : {{entity.max_hp}}</el-tag>
          <el-tag type="danger" class="attribute">Attack Damage : {{entity.attack_damage}}</el-tag>
          <el-tag type="info" class="attribute">Speed : {{entity.speed}}</el-tag>
          <el-tag type="warning" class="attribute">Armor : {{entity.armor}}</el-tag>
        </span>
        <h4>Description :</h4>
        <p class="description">{{entity.description}}</p>
      </div>
    <!--  技能区    -->
      <div style="padding:10px 5px">
        <p v-for="(skill,index) in entity.skill" class="skills" >{{index+1}}.  {{skill}}</p>
      </div>
      <div>
        <h4>Additional Information :</h4>
        <p class="description">{{entity.additional}}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {nextTick, onMounted, reactive, ref, watch} from "vue";
import ModleViewer from "@/components/mod/ModleViewer.vue";

const entities =ref([])
const fetchData = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}assets/desc/entities.json`);
    const jsonData = await response.json();
    const baseUrl = import.meta.env.BASE_URL
    entities.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      // 取出原始 additionalImg，可能是数组，也可能不存在
      const rawImgs = item[key].Images || item[key].images || [];

      // 处理图片数组，给相对路径加前缀
      const fixedImgs = Array.isArray(rawImgs)
          ? rawImgs.map(img => (/^https?:\/\//.test(img) ? img : baseUrl + img.replace(/^\/+/, '')))
          : [];
      let icons = item[key].Icon || item[key].icon || '';
      icons=baseUrl+icons
      let models = item[key].ModelUrl || item[key].modelUrl || '';
      models=baseUrl+models
      return {
        name: item[key].Name || item[key].name,
        icon: icons,
        additional: item[key].Additional || item[key].additional,
        hasModel: item[key].HasModel || item[key].hasModel,
        modelUrl: models,
        max_hp: item[key].Max_hp || item[key].max_hp,
        speed: item[key].Speed || item[key].speed,
        armor: item[key].Armor || item[key].armor,
        description: item[key].Description || item[key].description,
        attack_damage: item[key].Attack_damage || item[key].attack_damage,
        skill: item[key].Skill || item[key].skill,
        images: fixedImgs,
      };
    });
  } catch (error) {
    console.error("加载 JSON 失败:", error);
  }
};
const renderModelUrl=ref('')
const changeRenderedModel=(url)=>{
  renderModelUrl.value=url
}
const cancelRenderModel=()=>{
  renderModelUrl.value=''
}
onMounted(fetchData)
</script>

<style scoped>
.skills{
  padding: 8px 5px;
  font-weight: bold;
  font-size: 16px;
}
.attribute{
  margin: 5px 15px;
  font-weight: bold;
  font-size: 14px;
}
.description{
  font-family: 华文宋体 serif;
  font-weight: bolder;
  background-color: rgba(255,255,255,0.6);
  font-size: 20px;
  padding: 5px 10px;
}
:deep(.el-card__body){
  width: 100%;
}
.custom-card {
  margin-bottom: 20px;
  padding: 16px;
  background-color: rgba(151,213,212,0.25);
  margin-top: 20px;
  border-radius: 6px;
  border: #535bf2 solid 3px;
  display: flex;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.card-content {
  padding: 16px;
}

.section {
  text-align: center;
}
</style>
