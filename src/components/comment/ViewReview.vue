<template>
  <section class="view-review">
    <el-row>
      <el-col>
        <el-rate
          :void-color="'#c6c6c6'"
          :colors="colors"
          v-model="value"
          disabled
          size="large"
        ></el-rate>
      </el-col>
      <el-col>
        <h4>科信弟帽明第果干對科信弟帽明第果干對</h4>
      </el-col>
      <el-col>
        <p>
          卜菜旁菜助羊世位愛走室司色占交呢，吉玉支夏孝活有采菜母禾頭，世斗虎歡麼足地爸條世、世風幾米道幼八石跳祖請春面，起東南早食加小。青已片給遠刀後加前「抄信旦」冒。半鴨福帶采害常七娘何看欠禾者婆？貫王各昌。叫用美語外聽我半海：飽兄候兩訴什七！起山急下品東天干過筆手九送田來、忍文京加里法問好皮百點下祖他綠兩娘過姐，風不村種貝更，重喝長。
        </p>
        <p>
          具祖唱士語住手向，員几英師「都學」司歡神到他校止千雪直！會喝木裏哥心瓜科去玩給室言才，道冒自竹羽杯荷三寸久掃燈到幫？游爬村連少夏村了條爸旁兌多乞，目誰弓民您誰木布走村嗎浪九？嗎弟流目兌葉。
        </p>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      colors: ["#7690DA", "#7690DA", "#7690DA"],
      value: 3,
    };
  },
};
</script>

<style>
.past-comment .el-rate {
  margin-bottom: 2.5rem;
}

.past-comment .el-rate .el-icon {
  font-size: 30px;
  margin-top: 1rem;
}

.past-comment h4 {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
}

.past-comment p {
  font-family: "Noto Sans HK";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #262626;
  margin-top: 1.5rem;
}
</style>