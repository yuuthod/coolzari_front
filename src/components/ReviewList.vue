<template>
  <div>
    <ul>
      <review-list-item
        v-for="(obj, key) in reviewList"
        :review="obj"
        :key="key"
      ></review-list-item>
    </ul>
  </div>
</template>

<script scoped>
import { mapGetters } from 'vuex';
import ReviewListItem from '@/components/ReviewListItem.vue';
export default {
  components: {
    ReviewListItem,
  },
  computed: {
    ...mapGetters('review', {
      reviewList: 'getReviewList',
    }),
  },
};
</script>

<style scoped>
div {
  background: #eee;
  padding-bottom: 15px;
  margin-top: -1px;
}
li:not(:first-of-type) {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #bdbdbd;
}
</style>
