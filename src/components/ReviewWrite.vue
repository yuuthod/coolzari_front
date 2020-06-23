<template>
  <div>
    <ul v-for="(obj, key) in userList" :key="key">
      <li class="item">

      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('review', {
      userList: 'getUserList',
    }),
  },
  created() {
    this.$store.dispatch('review/FETCH_USER_LIST');
  },
};
</script>

<style scoped>
div {
  height: 100vh;
  background: #eee;
  padding-bottom: 15px;
}
li.item * {
  font-size: 0.8rem;
}
</style>
