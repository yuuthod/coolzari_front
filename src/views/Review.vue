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
      <button>좌석표 보기</button>
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
        <select name="order" id="">
          <option value="">추천순</option>
          <option value="">평점순</option>
          <option value="">좋아요순</option>
          <option value="">최신순</option>
        </select>
        <div class="tabBtns">
          <button
            @click="tabClickHandler('search')"
            :class="isSearchTab ? 'active' : ''"
          >
            <font-awesome-icon icon="search" />
          </button>
          <button
            @click="tabClickHandler('wirte')"
            :class="!isSearchTab ? 'active' : ''"
          >
            <font-awesome-icon icon="pen" />
          </button>
        </div>
      </div>
      <reviewList v-if="isSearchTab"></reviewList>
      <div v-else>
        wirte
      </div>
    </div>
  </div>
</template>
<script>
import ReviewList from '@/components/ReviewList.vue';
import ReviewSelectBox from '@/components/ReviewSelectBox.vue';
export default {
  data() {
    return {
      isSearchTab: true,
    };
  },
  components: {
    ReviewList,
    ReviewSelectBox,
  },
  methods: {
    tabClickHandler(select) {
      if (select === 'search') {
        this.isSearchTab = true;
      } else if (select === 'wirte') {
        this.isSearchTab = false;
      }
    },
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
  margin-top: 20px;
  text-align: right;
}

div.reviewList > div.menu > div {
  display: inline-block;
}

div.selectBoxes {
  text-align: right;
}
div.selectBoxes > button,
div.selectBoxes > span {
  display: inline-block;
  position: relative;
  bottom: 3px;
}
div.selectBoxes > button {
  width: 25%;
  text-align: left;
  font-size: 0.9rem;
  padding: 0 6px;
  background: url('../assets/images/icon/eye.png') right / 1.2rem no-repeat;
}
div.selectBoxes > span {
  width: 25%;
  padding-right: 10px;
  font-size: 0.6rem;
}
div.reviewList > div.menu > select {
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
