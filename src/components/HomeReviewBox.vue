<template>
  <ul>
    <li
      v-for="(obj, index) in repeat"
      :key="index"
      :style="setBackgroundImage(obj.img)"
    >
      <grade :gradeNum="obj.grade"></grade>
      <div class="theaters_info">
        <span>CGV</span>
        <span>용산아이파크몰</span>
        <span>IMAX</span>
      </div>
      <h3>{{ obj.seatNo }}</h3>
      <p>
        13번의 알라딘중 단연 최고였습니다. 작은 키 이신 분들에게 제격인 것
        같아요!
      </p>
      <span class="date">2019.5.23</span>
    </li>
  </ul>
</template>

<script>
import Grade from '@/components/commons/Grade.vue';
export default {
  props: {
    repeat: Array,
  },
  components: {
    Grade,
  },
  methods: {
    setBackgroundImage(img) {
      return `background-image: url(${require('@/assets/images/poster/' +
        img)})`;
    },
  },
};
</script>

<style scoped>
ul > li {
  display: block;
  margin-top: 15px;
  padding: 5%;
  text-align: center;
  font-weight: 300;
  color: #ededed;
  background-blend-mode: color;
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 10%;
  background-origin: border-box;
  background-size: cover;
}
ul > li > * {
  padding: 2px 0;
}
ul > li > div.theaters_info {
  font-size: 0.6rem;
}
ul > li > div.theaters_info > span:not(:last-child) {
  padding-right: 5px;
}
ul > li > h3 {
  font-size: 1rem;
}
ul > li > p {
  width: 70%;
  word-break: keep-all;
  margin: 0 auto;
  font-size: 0.7rem;
}
ul > li > span {
  font-size: 0.6rem;
}
</style>
