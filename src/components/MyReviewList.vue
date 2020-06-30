<template>
  <div class="container">
    <h1>내 리뷰 관리</h1>
    <ul>
      <my-review-list-item
        v-for="(obj, key) in myReviewList"
        :review="obj"
        :key="key"
      ></my-review-list-item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MyReviewListItem from '@/components/MyReviewListItem.vue';
export default {
  components: {
    MyReviewListItem,
  },
  computed: {
    ...mapGetters('user', {
      myReviewList: 'getMyReviewList',
    }),
  },
  created() {
    this.$store.dispatch('user/FETCH_MY_REVIEW_LIST');
  },
};
</script>
<style scoped>
div.container {
  background: #eee;
  padding-bottom: 15px;
  margin-top: -1px;
}
div.container > h1 {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 900;
}
li:not(:first-of-type) {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #bdbdbd;
}
</style>
