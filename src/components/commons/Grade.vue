<template>
  <div>
    <div
      v-for="(value, key) in gradeList()"
      :key="key"
      class="hexagon"
      :class="value"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    gradeNum: Number,
  },
  methods: {
    gradeList() {
      let list = [];
      for (let i = 0; i < 5; i++) {
        if (i < this.gradeNum) {
          if (this.gradeNum - i < 1) {
            list.push('half');
          } else {
            list.push('fill');
          }
        } else {
          list.push('line');
        }
      }
      return list;
    },
  },
};
</script>

<style scoped>
div.hexagon {
  width: 12px;
  height: 12px;
  margin: 0px 1px 0px 1px;
  display: inline-block;
  background-repeat: no-repeat;
}
div.hexagon.fill {
  background-image: url('../../assets/images/icon/hexagon_fill.svg');
}
div.hexagon.line {
  background-image: url('../../assets/images/icon/hexagon_line.svg');
}
div.hexagon.half {
  background-image: url('../../assets/images/icon/hexagon_half.svg');
}
</style>
