<template>
  <div class="description-wrapper">
    <h1>Description</h1>
    <nav style="background-color: slateblue">
      <a href="#talismans">Talismans</a>
      <a href="#new_staffs">New Staffs</a>
      <a href="#additional">Additional Functions</a>
      <a href="#others">Others</a>
    </nav>
    <hr>
    <div class="description-content">
      The original idea about this mod is from adventure of jackChen, Here are the basic contents:<br>
      <br>
      <div id="talismans">
        <h3>1. Twelve Talismans:</h3>
        <h4>Rat:</h4>
        You can freeze a LivingEntity (creature) or freeze all creatures in a certain area with the effect (erupt).
        <h4>Ox:</h4>
        Gives you strength effect and less cooldown and stronger with the effect (erupt).
        <h4>Tiger:</h4>
        Give you health boost effect and higher level less cooldown with the effect (erupt).
        <h4>Rabbit:</h4>
        Enhances your speed and jump height and also less cooldown with the effect (erupt).
        <h4>Dragon:</h4>
        With this item, you can shoot the dragon fire, which can create a huge explosion and create fire with the effect (erupt).
        <h4>Snake:</h4>
        Makes you invisible and less cooldown with the effect (erupt).
        <h4>Horse:</h4>
        Heals yourself instantly and clears you harmful effects with the effect (erupt).
        <h4>Sheep:</h4>
        Can teleport you to a certain place which you can change by pressing '.'; With erupt effect you can teleport between different dimensions
        <h4>Monkey:</h4>
        Can change the creature you hit into another one and change all creatures in the area into ironGolem with the effect (erupt).
        <h4>Chicken:</h4>
        Makes you fly for a while and gives LEVITATION effect to all creatures in the area with the effect (erupt).
        <h4>Dog:</h4>
        Gives you REGENERATION and ABSORPTION effects and makes you immortal(at a rate, not 100%) for a while with the effect (erupt), but the cooldown will be longer.
        <h4>Pig:</h4>
        You can shoot like the dragon talisman but with less power for 5 times and continuously shoot with no cooldown if you have the effect (erupt); Real Heat beam eye blast.
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <div id="new_staffs">
        <div class="imgContainer"><img src="/src/assets/items.png" class="imgs"></div>
        <h3>2. New Creatures:</h3>
        <div class="imgContainer"><img src="/src/assets/boss.png" class="imgs"></div>
        <h4>Eight devils:</h4>
        Tsolan,Pokong,Baitza,Tchangzu,Xiaofung,Shendu,Daigui,Hsiwu
        <h4>Additional mobs:</h4>
        shadowkhans,
        <h3>3. Mob Drops:</h3>
        Every boss has a special stick with it's power on it,and a origin stone can be insert into a gauntlet,which can help you to control the chi of devils.<br>
        And some of talismans from Shendu,<br>
        <h4>Magic Sticks:</h4>
        Water: {<br> common use : shoot ice_gland apply damage and slowness;<br> sneaking : summon water under your feet;<br>erupt : shoot and summon ice block on target<br>}<br>
        Lighting: {<br> common use : shoot lighting ball;<br>erupt : shoot charged lighting ball;<br>}<br>
        Wind: {<br> common use : shoot Wind ball;<br>erupt : shoot charged Wind ball;<br>}<br>
        Gravity: {<br> common use : shoot gravity ball;<br>erupt : change your gravity(true/false);<br>}<br>
        Ground: {<br> common use : shoot ground gland;<br>erupt : break blocks in front of you ;<br>}<br>
        Mountain: {<br> common use : shoot mountain gland;<br>erupt : fill target area with blocks(shape cube) ;<br>}<br>
        Sky: {<br> common use : shoot sky grace;<br>erupt : ;<br>}<br>

        <br>And some misc drops from shadowkhans that can make dart and other blocks.
        <h3>4. Blocks:</h3>
        <h4>Summon Table:</h4>
        By putting a stone,it will summon the boss it refers to and destroy itself.
        <h4>Fusion Table:</h4>
        in this table, you are able to smelt the tools,equipments into materials and smelt the common items with faster speed.
        <h4>Lottery Table</h4>
        with sweepstakes in hand, you are able to get an item randomly by right clicking the table
        <h4>Dragon Call</h4>
        break the block with pickaxe, you are able to get an item randomly
        <h4>Monster Spawner</h4>
        a limitless spawner that can spawn mobs without any restriction
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>

      <div id="additional">
        <h3>5. Chain Break:</h3>
        <div class="imgContainer"><img src="/src/assets/chainbreak.png" class="imgs"></div>
        <br>
        as it's name Chain break,and press 'N' you can adjust the parameters,shapes and max break count

        <h3>6. Dream Dimensions:</h3>
        Two dimensions,one is totally the same as overworld, another is a mess world , only when you right click the bed that you will have the chance to enter these dimensions,
        just like you dream while sleeping sometimes.In these dimensions,there will be a timer for you,and you'll wake up when it run out of count or dead,and before you enter the dimension you will be given some items
        that will be removed before you leave,and remove some items that will given back as well.
        and if you dead in the dimension,you will be given a nightmare effect,which will decline your max health and prohibit you sleeping for a while and you may lose all your staffs

        <h3>7. Moon Event:</h3>
        <h3>intro: This event will happen according to the days and have eight types:</h3>
        <h4>Crimson moon</h4>
        increase the mob spawn rate, amount and the difficulty
        <h4>Blue moon</h4>
        water will be created above, and the dropped item will be removed as water can clean up stuffs
        <h4>Purple moon</h4>
        the gravity will be strange at the moment,and creatures maybe glow
        <h4>Green moon</h4>
        some kind of blocks will be set around the player
        <h4>Yellow moon</h4>
        lei gong feels blue and he wants to punish the player, thunder will around you
        <h4>Gray moon</h4>
        tornado will blow you up,
        <h4>Brown moon</h4>
        some projectile will be spawned around the player and will break blocks
        <h4>Cyan moon</h4>
        by chance will give player some effects(disorder,blindness)
      </div>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>


      <div id="others">
        <h3>8. Others:</h3>
        <h4>Villager Trades</h4>
        <div class="imgContainer"><img src="/src/assets/villagerTrades.png" class="imgs"></div>
        <h4>Enchantments:</h4>
        <h4>Effects:</h4>
        <div class="imgContainer"><img src="/src/assets/effects.png" class="imgs"></div>
        <h4>Structures:</h4>
        there will be valuable treasures in the structures to find<br>
      </div>
    </div>
  </div>
</template>

<script>
import {StarFilled} from "@element-plus/icons-vue";

export default {
  name: 'descriptionComp',
  components: {StarFilled}
}
</script>

<style scoped>
.description-wrapper {
  padding: 20px;
  height: 100%; /* 确保内容填满整个容器 */
  overflow-y: auto; /* 允许垂直滚动 */
}

.description-content {
  max-height: 100%; /* 确保内容不会超出容器 */
  overflow-y: auto; /* 允许垂直滚动 */
}

h4 {
  font-weight: bold;
}
#boss{
  width: 100%;
  height: auto;
}
.imgs{
  width: 80%;
  height: 80%;
}
</style>
