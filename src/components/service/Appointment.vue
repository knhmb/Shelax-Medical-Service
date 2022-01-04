<template>
  <h3>選擇預約日期及時間</h3>
  <div class="content">
    <el-row>
      <el-col :span="12">
        <p>選擇日期</p>
        <div class="date-content">
          <div class="date-header">
            <el-row>
              <el-col :span="12">
                <p>2022 一月</p>
              </el-col>
              <el-col class="arrow-icons" :span="12">
                <font-awesome-icon icon="chevron-left"></font-awesome-icon>
                <font-awesome-icon icon="chevron-right"></font-awesome-icon>
              </el-col>
            </el-row>
          </div>
          <!-- <hr /> -->
          <div class="date-body">
            <el-row :gutter="10" justify="space-between" class="week-days">
              <el-col :span="3">
                <p>日</p>
              </el-col>
              <el-col :span="3">
                <p>一</p>
              </el-col>
              <el-col :span="3">
                <p>二</p>
              </el-col>
              <el-col :span="3">
                <p>三</p>
              </el-col>
              <el-col :span="3">
                <p>四</p>
              </el-col>
              <el-col :span="3">
                <p>五</p>
              </el-col>
              <el-col :span="3">
                <p>六</p>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday"></p>
              </el-col>
              <el-col :span="3">
                <p></p>
              </el-col>
              <el-col :span="3">
                <p></p>
              </el-col>
              <el-col :span="3">
                <p></p>
              </el-col>
              <el-col :span="3">
                <p></p>
              </el-col>
              <el-col :span="3">
                <p></p>
              </el-col>
              <el-col :span="3">
                <p class="first-day">1</p>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday">2</p>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('3')"
                  :class="{ selected: isSelected === '3' }"
                >
                  <p>3</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('4')"
                  :class="{ selected: isSelected === '4' }"
                >
                  <p>4</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('5')"
                  :class="{ selected: isSelected === '5' }"
                >
                  <p>5</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('6')"
                  :class="{ selected: isSelected === '6' }"
                >
                  <p>6</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('7')"
                  :class="{ selected: isSelected === '7' }"
                >
                  <p>7</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('8')"
                  :class="{ selected: isSelected === '8' }"
                >
                  <p>8</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday">9</p>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('10')"
                  :class="{ selected: isSelected === '10' }"
                >
                  <p>10</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('11')"
                  :class="{ selected: isSelected === '11' }"
                >
                  <p>11</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('12')"
                  :class="{ selected: isSelected === '12' }"
                >
                  <p>12</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('13')"
                  :class="{ selected: isSelected === '13' }"
                >
                  <p>13</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('14')"
                  :class="{ selected: isSelected === '14' }"
                >
                  <p>14</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('15')"
                  :class="{ selected: isSelected === '15' }"
                >
                  <p>15</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday">16</p>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('17')"
                  :class="{ selected: isSelected === '17' }"
                >
                  <p>17</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('18')"
                  :class="{ selected: isSelected === '18' }"
                >
                  <p>18</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('19')"
                  :class="{ selected: isSelected === '19' }"
                >
                  <p>19</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('20')"
                  :class="{ selected: isSelected === '20' }"
                >
                  <p>20</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('21')"
                  :class="{ selected: isSelected === '21' }"
                >
                  <p>21</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('22')"
                  :class="{ selected: isSelected === '22' }"
                >
                  <p>22</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday">23</p>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('24')"
                  :class="{ selected: isSelected === '24' }"
                >
                  <p>24</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('25')"
                  :class="{ selected: isSelected === '25' }"
                >
                  <p>25</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('26')"
                  :class="{ selected: isSelected === '26' }"
                >
                  <p>26</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('27')"
                  :class="{ selected: isSelected === '27' }"
                >
                  <p>27</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('28')"
                  :class="{ selected: isSelected === '28' }"
                >
                  <p>28</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
              <el-col :span="3">
                <div
                  @click="setClass('29')"
                  :class="{ selected: isSelected === '29' }"
                >
                  <p>29</p>
                  <p class="price">570 起</p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10" justify="space-between" class="days">
              <el-col :span="3">
                <p class="holiday">30</p>
              </el-col>
              <el-col :span="3">
                <div>
                  <p class="holiday">31</p>
                  <!-- <p class="price">570 起</p> -->
                </div>
              </el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
              <el-col :span="3">
                <div></div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <Time />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Time from "./Time.vue";

export default {
  components: {
    Time,
  },
  data() {
    return {
      isSelected: "13",
    };
  },
  methods: {
    setClass(option) {
      this.isSelected = option;
    },
  },
};
</script>

<style scoped>
.service .appointment-section h3 {
  color: #525252;
  /* font-size: 24px; */
  margin: 0;
}

.service .appointment-section .content {
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 4px 20px;
  margin-top: 2rem;
}

.service .appointment-section .content .el-col p {
  color: #525252;
  font-size: 16px;
}

.service .appointment-section .content .date-content {
  margin-bottom: 2rem;
}

.service .appointment-section .content .date-content .date-header {
  padding: 16px;
  border-radius: 8px 8px 0 0;
  background-color: #fff;
  border: 0.8px solid #e0e0e0;
}

.service .appointment-section .content .date-content .date-header p {
  margin: 0;
  font-weight: 500;
}

.service .appointment-section .content hr {
  margin: 0;
  color: #e0e0e0;
}

.service .appointment-section .content .date-content .date-header .arrow-icons {
  text-align: end;
}

.service
  .appointment-section
  .content
  .date-content
  .date-header
  .fa-chevron-left,
.service
  .appointment-section
  .content
  .date-content
  .date-header
  .fa-chevron-right {
  font-size: 20px;
  color: #26408a;
  cursor: pointer;
}

.service
  .appointment-section
  .content
  .date-content
  .date-header
  .fa-chevron-left {
  margin-right: 1rem;
}

.service .appointment-section .content .date-content .date-body {
  padding: 5px 30px;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
  border: 0.8px solid #e0e0e0;
}

.service .appointment-section .content .date-content .date-body .week-days {
  text-align: center;
}

.service .appointment-section .content .date-content .date-body .week-days p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

.service .appointment-section .content .date-content .date-body .days .holiday {
  color: #bbb;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
  text-decoration-line: line-through;
  cursor: not-allowed;
}

.service
  .appointment-section
  .content
  .date-content
  .date-body
  .days
  .first-day {
  margin-bottom: 1rem;
  text-decoration-line: line-through;
  cursor: not-allowed;
  color: #bbb;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.4px;
}

.service .appointment-section .content .date-content .date-body .days {
  margin-bottom: 1rem;
}

.service .appointment-section .content .date-content .date-body .days p {
  margin: 0;
  font-weight: 700;
  /* text-align: center; */
}

.service .appointment-section .content .date-content .date-body .days .price {
  font-size: 12px;
  color: #ddd;
  font-size: 400;
}

.service .appointment-section .content .date-content .date-body .days div {
  text-align: center;
  cursor: pointer;
}

.service
  .appointment-section
  .content
  .date-content
  .date-body
  .days
  .selected {
  background-color: #7690da;
  border-radius: 8px;
  padding: 2px;
}

.service
  .appointment-section
  .content
  .date-content
  .date-body
  .days
  .selected
  p {
  color: #fff;
}

/* .service .appointment-section .content .date-content .date-header span {
  text-align: right;
} */
</style>