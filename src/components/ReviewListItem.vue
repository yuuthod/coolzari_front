<template>
  <li class="item">
    <img
      :src="`${require('../assets/images/poster/' + review.img)}`"
      alt="movie poster"
    />
    <div ref="content">
      <grade :gradeNum="review.grade"></grade>
      <dl>
        <dt>{{ review.userHeight }}</dt>
        <dd>키(cm)</dd>
        <dt>{{ review.userRegion }}</dt>
        <dd>주시야</dd>
        <dt>{{ review.userPreferseatA }}/{{ review.userPreferseatB }}</dt>
        <dd>좌석</dd>
      </dl>
      <p>
        {{ review.comment }}
      </p>
      <dl>
        <dt>만족도1</dt>
        <dd><progress value="20" max="100"></progress></dd>
        <dt>만족도2</dt>
        <dd><progress value="20" max="100"></progress></dd>
        <dt>만족도3</dt>
        <dd><progress value="20" max="100"></progress></dd>
      </dl>
      <ul>
        <li>{{ review.userId }}</li>
        <li>{{ review.date }}</li>
        <li v-if="isShow">삭제</li>
      </ul>
      <button @click="detailShowClick()">
        {{ isShow ? '접기' : '펼치기' }}
      </button>
    </div>
    <div @click="likeClickUp">
      <font-awesome-icon :icon="['far', 'thumbs-up']" />
      <span>{{ likeNum }}</span>
    </div>
  </li>
</template>

<script scoped>
import Grade from '../components/commons/Grade.vue';
export default {
  props: {
    review: Object,
  },
  data() {
    return {
      isShow: false,
      selectedIndex: 0,
      beforIndex: 0,
      likeNum: 0,
      refContent: null,
    };
  },
  components: {
    Grade,
  },
  methods: {
    detailShowClick() {
      let _height = this.refContent.clientHeight;
      if (_height <= 70) {
        this.slideDown();
        this.isShow = true;
      } else if (_height > 70) {
        this.isShow = false;
        this.slideUp();
      }
    },
    slideUp() {
      let _height = this.refContent.clientHeight;
      let interveal = setInterval(() => {
        this.refContent.style.height = `${(_height -= 5)}px`;
        if (_height === 70) {
          clearInterval(interveal);
        }
      }, 5);
    },
    slideDown() {
      let _height = this.refContent.clientHeight;
      let interveal = setInterval(() => {
        this.refContent.style.height = `${(_height += 5)}px`;
        if (
          _height ===
          this.refContent.scrollHeight + (this.refContent.scrollHeight % 5)
        ) {
          clearInterval(interveal);
        }
      }, 5);
    },
    likeClickUp() {
      this.likeNum++;
    },
  },
  mounted() {
    this.refContent = this.$refs.content;
  },
};
</script>

<style scoped>
li.item * {
  font-size: 0.8rem;
}
li.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 0 15px;
}
li.item > img {
  width: 30%;
  height: 100%;
}
li.item > div:nth-of-type(1) {
  margin-left: 10px;
  overflow: hidden;
  height: 70px;
}
li.item > div:nth-of-type(1) > dl:nth-of-type(1) dt,
li.item > div:nth-of-type(1) > dl:nth-of-type(1) dd {
  display: inline-block;
  color: #272727;
}
li.item
  > div:nth-of-type(1)
  > dl:nth-of-type(1)
  dt:not(:first-of-type)::before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 8px;
  margin-right: 5px;
  border-right: 1px solid #aaa;
}
li.item > div:nth-of-type(1) > dl:nth-of-type(1) dd {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 5px 10px;
  opacity: 0.5;
  position: absolute;
  z-index: 1;
}
li.item > div:nth-of-type(1) > dl:nth-of-type(1) dt:hover + dd {
  visibility: visible;
}
li.item > div:nth-of-type(1) > ul > li {
  display: inline-block;
  color: #aaa;
}
li.item > div:nth-of-type(1) ul li:not(:last-child)::after {
  content: '';
  display: inline-block;
  width: 5px;
  height: 10px;
  margin-right: 5px;
  border-right: 1px solid #aaa;
}
li.item > div:nth-of-type(1) > ul {
  position: absolute;
  bottom: 0;
}
li.item > div:nth-of-type(1) > button {
  position: absolute;
  bottom: 0;
  right: 10px;
}
li.item > div:nth-of-type(1) p {
  width: 200px;
  padding-top: 15px;
  position: relative;
  line-height: 1.1rem;
}
li.item > div:nth-of-type(1) p > span {
  position: absolute;
  top: 25px;
  right: -3px;
}
li.item > div:nth-of-type(1) p.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em;
}
li.item > div:nth-of-type(1) dl:nth-of-type(2) {
  margin: 5px 0 30px 0;
}
li.item > div:nth-of-type(1) dl:nth-of-type(2) > dt {
  padding-top: 10px;
}
li.item > div:nth-of-type(2) > svg {
  padding-right: 4px;
}
</style>
