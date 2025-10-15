<script setup>

</script>

<template>
  <div>
<!--    <a href="#route1">Sheep Talisman way</a>-->
<!--    <a href="#route2">Funny way</a>-->
<!--    <a href="#route3">Challenge way</a>-->
<!--    <a href="#tip">Tips</a>-->

    <el-container>
      <el-header style="border: #747bff solid 1px;display: flex;flex-direction: column" height="auto">
        <h1 style="color: darkblue;padding-left: 40%;font-weight: bold;font-size: xx-large">
          How to play this mod?
        </h1>
        <h2 style="color: black;">Here provides some routes that you can take into consideration:</h2>
      </el-header>

      <el-main>
        <el-card style="color:black;background: rgba(255,255,255,0.3)" id="route1">
          <h2 style="font-weight: bold;background: rgba(16,255,97,0.3)">
            Get sheep talisman first(play in valina mode until kill ender dragon)
          </h2>
          <div style="font-size: large">
            * in the beginning, you can play as usual and kill ender dragon and reward with sheep talisman<br>
            * using sheep talisman with its different ability like teleport,exchange teleport,soul out,asleep<br>
            * with two teleport ability you can back to home easily and the then back to where you are exploring<br>
            * with soul out(free camera),you can find treasures very soon and find structures,but be aware, you can only
            back to yourself by crash with your body<br>
            * with asleep,you can go to dream world,which means you can gain every structure treasure twice<br>
            * after you take some talismans and equipments,you can fight with demons
          </div>
        </el-card>
        <el-card style="color:black;background: rgba(255,255,255,0.3);margin-top: 20px" id="route2">
          <h2 style="font-weight: bold;background: rgba(16,255,97,0.3)">
            start in a funny way
          </h2>

          <div style="font-size: large">
            * find the maze item and use it to generate a maze,which some treasure barrel will be generate as well<<br>
            * you can find some powerful item(bony_spur,xp_pool,dragon_bow) to help you explore further<br>
            * then you can enhance that item stronger
          </div>
        </el-card>

        <el-card style="color:black;background: rgba(255,255,255,0.3);margin-top: 20px" id="route3">
          <h2 style="font-weight: bold;background: rgba(16,255,97,0.3)">
            a challenge way(The Ancient City)
          </h2>

          <div style="font-size: large">
            * try to find talisman pocket in ancient city, and put the talisman you found into pocket by pressing B and
            select a slot<br>
            * with chicken you can fly,with sneak,you won't attacked by mobs,etc <br>
            * and then play as you want
          </div>
        </el-card>

        <el-card style="color:black;background: rgba(219,255,97,0.3);margin-top: 20px" id="tip">
          <h2 style="font-weight: bold;background: rgba(16,255,97,0.3)">
            Some tips
          </h2>

          <div style="font-size: large">
            * double_stranded_sword,sheep_talisman,talisman_pocket,hand_chain all can press B to choose ability<br>
            * pay attention, after you wear talisman_pocket or samurai mask, you cannot take it off until dead<br>
            * there are some commands that you can use to set some configuration,however it can only be update for one
            save<br>
            <div style="font-weight: bold;color: indigo;background: rgba(123,255,66,0.3);padding-left: 20px">
              <h3>start with /shadow </h3>
              <span style="color: purple;text-decoration: underline">log</span> will print some basic info like
              moon_phase...<br>
              <span style="color: purple;text-decoration: underline">set render_hp</span> can set wither to render hp
              bar in hud <br>
              <span style="color: purple;text-decoration: underline">set render_qi</span> can set wither to render qi
              bar in hud <br>
              <span style="color: purple;text-decoration: underline">set moon_phase</span> can set moon phase [0,7]<br>
              <span style="color: purple;text-decoration: underline">set moon_present</span> can set wither to trigger
              demon qi event<br>
              <span style="color: purple;text-decoration: underline">set show_welcome</span> can set wither to print
              welcome message when join the world<br>
              <span style="color: purple;text-decoration: underline">set show_more_info</span> can set wither to render
              more info on hud <br>
              <span style="color: purple;text-decoration: underline">...  </span>
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>