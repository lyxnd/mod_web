<template>
  <div class="description-wrapper">
    <h1 style="color: black;font-weight: bold">Description</h1>
    <el-tabs type="border-card" style="background: transparent;position: relative;">
      <el-tab-pane label="Items" class="tab-pane"><Items/></el-tab-pane>
      <el-tab-pane label="Blocks" class="tab-pane"><Blocks/></el-tab-pane>
      <el-tab-pane label="Entities" class="tab-pane"><Entities/></el-tab-pane>
      <el-tab-pane label="Enchantments" class="tab-pane"><Enchantments/></el-tab-pane>
      <el-tab-pane label="Effects" class="tab-pane"><Effects/></el-tab-pane>
      <el-tab-pane label="Dimensions" class="tab-pane"><Dimensions/></el-tab-pane>
      <el-tab-pane label="Events" class="tab-pane"><Events/></el-tab-pane>
      <el-tab-pane label="Others" class="tab-pane"><Others/></el-tab-pane>
    </el-tabs>


<!--    <el-dialog v-model="dataDialogVisible" title="Add a new staff" @close="closeDialog">-->
<!--      <el-form :model="staff">-->
<!--        <el-form-item label="Type" :label-width="formLabelWidth">-->
<!--          <el-select v-model="type" placeholder="select content type" @change="setIcon" default-first-option="default-first-option">-->
<!--            <el-option label="Item" value="Item"/>-->
<!--            <el-option label="Block" value="Block" />-->
<!--            <el-option label="Entity" value="Entity" />-->
<!--            <el-option label="Enchantment" value="Enchantment" />-->
<!--            <el-option label="Effect" value="Effect" />-->
<!--            <el-option label="Dimension" value="Dimension" />-->
<!--            <el-option label="Event" value="Event" />-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="name" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.name" autocomplete="off" @change="appendIcon"/>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="icon" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.icon" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="usage" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.usage" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="approach" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.approach" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="attribute" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.attribute" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="additional" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.additional" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="snaek" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.sneak" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="erupt" :label-width="formLabelWidth">-->
<!--          <el-input v-model="staff.erupt" autocomplete="off" />-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dataDialogVisible=false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="addData">Add</el-button>-->
<!--      </span>-->
<!--      </template>-->
<!--    </el-dialog>-->
  </div>
</template>

<script setup>
import Items from "@/views/mod/mods/dragonpro/content/Items.vue";
import Blocks from "@/views/mod/mods/dragonpro/content/Blocks.vue";
import Enchantments from "@/views/mod/mods/dragonpro/content/Enchantments.vue";
import Effects from "@/views/mod/mods/dragonpro/content/Effects.vue";
import Dimensions from "@/views/mod/mods/dragonpro/content/Dimensions.vue";
import Events from "@/views/mod/mods/dragonpro/content/Events.vue";
import Others from "@/views/mod/mods/dragonpro/content/Others.vue";
import Entities from "@/views/mod/mods/dragonpro/content/Entities.vue";
// const type=ref('')
// const staff = ref({
//   name: '',
//   icon: '',
//   usage: '',
//   approach: '',
//   attribute: '',
//   additional: '',
//   sneak: '',
//   erupt: '',
// })
// const itemData = reactive([])
// const blockData = reactive([])
// // 处理从子组件传来的数据
// const handleItemUpdateData = (newData) => {
//   if(newData){
//     for (let i = 0; i < newData.length; i++) {
//       itemData.push({[newData[i].name]:newData[i]});
//     }
//   }
// };
// const handleBlockUpdateData = (newData) => {
//   if(newData){
//     for (let i = 0; i < newData.length; i++) {
//       itemData.push({[newData[i].name]:newData[i]});
//     }
//   }
// };
// const addData=()=>{
//   let blob
//   if(type.value==='Item'){
//     itemData.push({ [staff.value.name]: staff.value })
//     blob = new Blob([JSON.stringify(itemData)], { type: 'application/json'});
//   }
//   if(blob){
//     FileSaver.saveAs(blob, 'open.json');
//     closeDialog()
//     dataDialogVisible.value=false
//   }
// }
// const setIcon=()=>{
//   staff.value.icon='/assets/icon/'+type.value.toLowerCase()+'/'
// }
// const appendIcon=()=>{
//   staff.value.icon+=staff.value.name+'.png'
// }
// const closeDialog=()=>{
//   staff.value={
//     name: '',
//     icon: '',
//     usage: '',
//     approach: '',
//     attribute: '',
//     additional: '',
//     sneak: '',
//     erupt: '',
//   }
// }

</script>

<style scoped>
:deep(.el-tabs__header .el-tabs__item){
  background: lightblue;
  font-weight: bold;
  font-size: 16px;
}
:deep(.el-tabs__header .el-tabs__item.is-active){
  background: greenyellow !important;
  font-size: 20px;
  color: #1a1a1a !important;
}
.description-wrapper {
  padding: 20px;
  height: 100%; /* 确保内容填满整个容器 */
}
.tab-pane{
  background: transparent !important;
  font-weight: bold;
}
:deep(.el-tabs__content){
  background: transparent;
}
h4 {
  font-weight: bold;
}
</style>
