<template>
  <div class="userList">
    <h1>내 정보 관리</h1>
    <ul v-for="(obj, index) in userList" :key="index">

    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('user', {
      userList: 'getUserList',
      areaList: 'getAreaList',
    }),
  },
  created() {
    this.$store.dispatch('user/FETCH_USER_LIST');
    this.$store.dispatch('user/FETCH_AREA_LIST');
  },
};
</script>

<style scoped>
div.userList {
  margin-top: 100px;
}
div.userList > h1 {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 900;
}
</style>
