<template>
  <div class="container">
    <h2>주간 인기 자리</h2>
    <home-review-box></home-review-box>
    <div>
      <button>
        <span><router-link to="/review">리뷰 보기</router-link></span>
      </button>
      <button><span>리뷰 쓰기</span></button>
      <button>
        <span>리뷰 보기</span>
      </button>
      <button>
        <span>리뷰 쓰기</span>
      </button>
    </div>
  </div>
</template>

<script>
import '@/my-icons/my-icons.css';
import HomeReviewBox from '@/components/HomeReviewBox.vue';

export default {
  name: 'Home',
  components: {
    HomeReviewBox,
  },
  created() {
    this.$store.dispatch('review/FETCH_REVIEW_LIST');
  },
};
</script>

<style scoped>
div.container > h1 {
  font-size: 1.8rem;
}
div.container > div {
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;
}
div.container > div > button {
  text-align: left;
  font-size: 0.8rem;
  font-weight: 800;
  color: #404040;
  padding: 5% 0;
  width: 30%;
  margin: 0px 1rem;
}
div.container > div > button:nth-of-type(1) {
  background: url('../assets/images/icon/btn_back_search.svg') no-repeat center;
}
div.container > div > button:nth-of-type(2) {
  background: url('../assets/images/icon/btn_back_pen.svg') no-repeat center;
}
div.container > div > button > span {
  display: inline-block;
  margin-left: 35%;
}
@media (min-width: 500px) {
  div.container > div > button > span {
    font-size: 1.4rem;
  }
}
</style>
