<template>
  <ul>
    <li
      v-for="(obj, index) in reviewList"
      :key="index"
      :style="setBackgroundImage(obj.movieImg)"
    >
      <p class="beforeLogin">좌석은 로그인 후 확인하실 수 있습니다.</p>
      <grade :gradeNum="obj.grade"></grade>
      <div class="theaters_info">
        <span>{{ obj.company }}</span>
        <span>{{ obj.theater }}</span>
        <span>{{ obj.screenType }}</span>
      </div>
      <h3>{{ obj.seatNo }}</h3>
      <p>{{ obj.comment }}</p>
      <span class="date">{{ obj.created }}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters('review', {
      reviewList: 'getReviewList',
    }),
  },
  created: function() {
    // 테스트용으로 추후 test framework 설치 후 삭제 or 수정.
    console.log(this.$store.state.review.state);
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
ul > li > p.beforeLogin {
  font-size: 0.6rem;
  font-weight: 300;
}
ul > li > span {
  font-size: 0.6rem;
}
</style>
