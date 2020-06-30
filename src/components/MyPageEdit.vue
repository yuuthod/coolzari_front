<template>
  <form class="user_data">
    <h1>내 정보 관리</h1>
    <ul v-for="(obj, index) in userList" :key="index">
      <li>
        <div class="user_id">
          <span>ID</span>
          <span>{{ obj.userID }}</span>
        </div>
        <div class="user_nick">
          <span>닉네임</span>
          <span>{{ obj.userNick }}</span>
        </div>
        <div class="user_area">
          <span>지역</span>
          <!-- TODO switch to json data -->
          <span>
            <select>
              <option selected>서울특별시</option>
              <option>중랑구</option>
              <option>종로구</option>
            </select>
          </span>
          <span>
            <select>
              <option selected>광진구</option>
              <option>중랑구</option>
              <option>종로구</option>
            </select>
          </span>
        </div>
        <div class="user_height">
          <span>신장</span>
          <span>
            <select>
              <option>~ 150cm</option>
              <option selected>160cm</option>
              <option>170cm</option>
              <option>180cm</option>
              <option>190cm ~</option>
            </select>
          </span>
        </div>
        <div class="user_main_view">
          <span>주시야</span>
          <span>
            <select>
              <option selected>왼쪽</option>
              <option>오른쪽</option>
            </select>
          </span>
        </div>
        <div class="user_preference">
          <spsan>선호좌석</spsan>
          <span>
            <select>
              <option selected>왼쪽</option>
              <option>오른쪽</option>
            </select>
          </span>
          <span>
            <select>
              <option>좌측</option>
              <option selected>중앙</option>
              <option>우측</option>
            </select>
          </span>
        </div>
        <div class="link">
          <ul>
            <li>수정</li>
            <li class="logout">로그아웃</li>
          </ul>
          <ul>
            <li>리뷰 쓰기</li>
          </ul>
        </div>
      </li>
    </ul>
  </form>
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
    this.$store.dispatch('area/FETCH_AREA_LIST');
  },
};
</script>

<style scoped>
form.user_data {
  margin-top: 100px;
}
form.user_data > h1 {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 900;
}
form.user_data > div * {
  margin: 10px;
}
form.user_data > ul {
  margin-top: 50px;
}
form.user_data > ul > li {
  display: block;
  width: 90%;
  margin: 20px auto;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #202020;
}

div.link > ul {
  display: flex;
  text-align: center;
}
div.link > ul > li {
  width: auto;
  line-height: 10px;
  padding: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #202020;
  border-radius: 8px;
  background-color: #ffc800;
}
div.link > ul > li:not(:last-child) {
  max-width: 50%;
}
</style>
