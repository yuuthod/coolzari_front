<template>
  <div class="container">
    <div class="selectBoxes">
      <review-select-box
        :selectName="'company'"
        :optionList="['CGV', 'MEGABOX']"
        :boxMarginRigth="5"
      ></review-select-box>
      <review-select-box
        :selectName="'area'"
        :optionList="['서울', '부천', '안양']"
        :boxMarginRigth="5"
      ></review-select-box>
      <review-select-box
        :selectName="'theater'"
        :optionList="['용산아이파크', '코엑스']"
        :boxMarginRigth="5"
      ></review-select-box>
      <review-select-box
        :selectName="'screenType'"
        :optionList="['4DX', 'MX', 'IMAX']"
      ></review-select-box>
      <button>
        좌석표 보기
        <font-awesome-icon :icon="['far', 'hand-point-up']" />
      </button>
      <span>좌석선택</span>
      <review-select-box
        :selectName="'seatLine'"
        :optionList="['A', 'B']"
        :boxMarginRigth="5"
      ></review-select-box>
      <review-select-box
        :selectName="'seatNum'"
        :optionList="['1', '2']"
      ></review-select-box>
    </div>
    <div class="reviewList">
      <div class="menu">
        <div>
          <Grade :gradeNum="4.5" />
          <span>평균 평점 <strong>4.2 점</strong></span>
        </div>
        <div class="tabBtns">
          <select name="order" id="">
            <option value="">추천순</option>
            <option value="">평점순</option>
            <option value="">좋아요순</option>
            <option value="">최신순</option>
          </select>
          <button
            @click="tabClickHandler('search')"
            :class="isSearchTab ? 'active' : ''"
          >
            <font-awesome-icon icon="search" />
          </button>
          <button
            @click="tabClickHandler('write')"
            :class="!isSearchTab ? 'active' : ''"
          >
            <font-awesome-icon icon="pen" />
          </button>
        </div>
      </div>
      <review-list v-if="isSearchTab"></review-list>
      <review-write v-else></review-write>
    </div>
  </div>
</template>
<script>
import ReviewList from '@/components/ReviewList.vue';
import ReviewSelectBox from '@/components/ReviewSelectBox.vue';
import ReviewWrite from '@/components/ReviewWrite.vue';
import Grade from '@/components/commons/Grade.vue';
export default {
  data() {
    return {
      isSearchTab: true,
    };
  },
  components: {
    ReviewList,
    ReviewSelectBox,
    ReviewWrite,
    Grade,
  },
  methods: {
    tabClickHandler(select) {
      if (select === 'search') {
        this.isSearchTab = true;
      } else if (select === 'write') {
        this.isSearchTab = false;
      }
    },
  },
  created() {
    this.$store.dispatch('review/FETCH_OPTION_LIST');
    this.$store.dispatch('review/FETCH_USER_LIST');
  },
};
</script>

<style scoped>
object {
  width: 50px;
  height: 50px;
}
object svg {
  fill: #000;
}
div.home {
  padding: 40px 20px 0px 20px;
}

div.reviewList > div.menu {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
}
div.selectBoxes {
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
div.selectBoxes > select,
div.selectBoxes > button,
div.selectBoxes > span {
  flex: 1 1 auto;
}
div.selectBoxes > button {
  width: calc(25% - 5px);
  margin-right: 5px;
  font-size: 0.8rem;
  padding: 3px 0px;
  border: 2px solid #ffca0d;
  border-radius: 8px;
}
div.selectBoxes > span {
  width: 25%;
  padding-right: 10px;
  font-size: 0.6rem;
}
div.reviewList > div.menu > div:nth-of-type(1) > * {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.7rem;
}
div.reviewList > div.menu > div:nth-of-type(1) > span {
  padding-left: 5px;
  color: #c5c5c5;
}
div.reviewList > div.menu > div:nth-of-type(1) > span > strong {
  color: #adadad;
}
div.reviewList > div.menu > div.tabBtns > select {
  height: 17px;
  padding-right: 1.2rem;
  padding-left: 0.4rem;
  margin-bottom: 0.6rem;
  margin-right: 0.5rem;
  font-size: 0.6rem;
  background: url('../assets/images/icon/down_arrow.svg') no-repeat 95% 50%;
  background-size: 10px;
  border: none;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
div.reviewList > div.menu > div.tabBtns > button {
  font-size: 1.5rem;
  color: #ababab;
  background: #eee;
  padding: 7px 25px;
}
div.reviewList > div.menu > div.tabBtns > button:nth-of-type(1) {
  margin-right: 5px;
}
div.reviewList > div.menu > div.tabBtns > button.active {
  color: #202020;
}
</style>
