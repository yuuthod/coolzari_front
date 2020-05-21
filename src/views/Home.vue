<template>
  <div class="container">
    <h2>주간 인기 자리</h2>
    <home-review-box :repeat="fakeData"></home-review-box>
    <div>
      <button><span>리뷰 보기</span></button>
      <button><span>리뷰 쓰기</span></button>
    </div>
  </div>
</template>

<script>
import HomeReviewBox from '@/components/HomeReviewBox.vue';

export default {
  name: 'Home',
  data() {
    return {
      fakeData: [
        { seatNo: 'F4', grade: 4, img: 'aladin.jpg' },
        { seatNo: 'I6', grade: 5, img: 'darkfate.jpg' },
        { seatNo: '-', grade: 3, img: 'frozen2.jpg' },
      ],
    };
  },
  components: {
    HomeReviewBox,
  },
};
</script>

<style scoped>
div.container > h2 {
  font-size: 1.2rem;
  font-weight: 900;
}
div.container > div {
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;
}
div.container > div > button {
  font-size: 1.2rem;
  font-weight: 800;
  color: #404040;
  padding: 1rem;
  width: 38%;
  margin: 0px 1rem;
  background: url('../assets/images/icon/btn_back.svg') no-repeat center;
}
div.container > div > button > span {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
  padding-left: 30px;
}
div.container > div > button:nth-of-type(1) > span {
  background-image: url('../assets/images/icon/search.svg');
}
div.container > div > button:nth-of-type(2) > span {
  background-image: url('../assets/images/icon/pen.svg');
}
@media (min-width: 500px) {
  div.container > div > button > span {
    font-size: 1.7rem;
    padding-left: 44px;
  }
}
</style>
