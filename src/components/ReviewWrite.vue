<template>
  <div>
    <ul v-for="(obj, key) in userList" :key="key">
      <li class="item">
        <div ref="nickName">
          <dl>
            <dt>{{ obj.userID }}</dt>
          </dl>
        </div>
        <div ref="otherData">
          <dl>
            <dt>{{ obj.userNick }}</dt>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('user', {
      userList: 'getUserList',
    }),
  },
  created() {
    this.$store.dispatch('user/FETCH_USER_LIST');
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
