<template>
  <select :name="selectName" :id="selectName" ref="selectBox">
    <option v-for="(option, key) in optionList" :value="option" :key="key">{{
      option
    }}</option>
  </select>
</template>

<script>
export default {
  props: {
    selectName: String,
    optionList: Array,
    boxMarginRigth: Number,
  },
  mounted() {
    this.$refs.selectBox.style.marginRight = this.boxMarginRigth
      ? this.boxMarginRigth + 'px'
      : 0;
    this.$refs.selectBox.style.width = this.boxMarginRigth
      ? `calc(25% - ${this.boxMarginRigth}px)`
      : '25%';
  },
};
</script>

<style scoped>
select {
  height: 26px;
  vertical-align: middle;
  padding: 0rem 0.4rem;
  margin-bottom: 10px;
  font-size: 0.6rem;
  text-align: center;
  text-align: -webkit-center;
  text-align-last: center;
  background: url('../assets/images/icon/down_arrow.svg') no-repeat 95% 50%;
  background-size: 10px;
  border: 2px solid #ffca0d;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
