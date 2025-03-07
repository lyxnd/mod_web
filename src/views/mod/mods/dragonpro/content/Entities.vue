<template>
  <div>
    <el-card v-for="entity in entities" :key="entity.name" class="custom-card">
      <!-- 图片轮播 -->
      <el-carousel height="auto" type="card">
        <el-carousel-item v-for="(image, index) in entity.images" :key="index" style="min-height: 400px">
          <img :src="image" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>

      <!--  属性区    -->
      <div>
        <h3>{{entity.name}} :</h3>
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
import {onMounted, reactive, ref} from "vue";

const entities =ref([])
const fetchData = async () => {
  try {
    const response = await fetch("/assets/desc/entities.json");
    const jsonData = await response.json();
    entities.value = jsonData.map(item => {
      const key = Object.keys(item)[0];
      return {
        name: item[key].Name || item[key].name, // 适配不同的字段命名
        icon: item[key].Icon || item[key].iocn,
        additional: item[key].Additional || item[key].additional,
        max_hp: item[key].Max_hp || item[key].max_hp,
        speed: item[key].Speed || item[key].speed,
        armor: item[key].Armor || item[key].armor,
        description: item[key].Description || item[key].description,
        attack_damage: item[key].Attack_damage || item[key].attack_damage,
        skill: item[key].Skill || item[key].skill,
        images: item[key].Images || item[key].images,
      };
    });
  } catch (error) {
    console.error("加载 JSON 失败:", error);
  }
};
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
