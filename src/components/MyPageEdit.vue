<template>
  <div class="container">
    <h1>내 정보 관리</h1>
    <dl v-for="(obj, index) in userList" :key="index">
      <div>
        <dt>ID</dt>
        <dd><input type="text" :value="obj.userID" readonly /></dd>
      </div>
      <div>
        <dt>닉네임</dt>
        <dd>
          <span>
            <input type="text" value="obj.userNick" />
          </span>
        </dd>
      </div>
      <div>
        <dt>지역</dt>
        <!-- TODO switch to json data -->
        <dd>
          <select>
            <option selected>서울특별시</option>
            <option>중랑구</option>
            <option>종로구</option>
          </select>
          <select>
            <option selected>광진구</option>
            <option>중랑구</option>
            <option>종로구</option>
          </select>
        </dd>
      </div>
      <div>
        <dt>신장</dt>
        <dd>
          <select>
            <option>~ 150cm</option>
            <option selected>160cm</option>
            <option>170cm</option>
            <option>180cm</option>
            <option>190cm ~</option>
          </select>
        </dd>
      </div>
      <div>
        <dt>주시야</dt>
        <dd>
          <select>
            <option selected>왼쪽</option>
            <option>오른쪽</option>
          </select>
        </dd>
      </div>
      <div>
        <dt>선호좌석</dt>
        <dd>
          <select>
            <option selected>왼쪽</option>
            <option>오른쪽</option>
          </select>
          <select>
            <option>좌측</option>
            <option selected>중앙</option>
            <option>우측</option>
          </select>
        </dd>
      </div>
    </dl>
    <div>
      <button>수정</button>
      <button>로그아웃</button>
    </div>
    <div>
      <button>리뷰 쓰기</button>
    </div>
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
    this.$store.dispatch('area/FETCH_AREA_LIST');
  },
};
</script>

<style scoped>
div.container {
  text-align: center;
  margin-top: 50px;
}
div.container > h1 {
  font-size: 2.8rem;
}
dl {
  margin-top: 30px;
  text-align: left;
  font-size: 1.3rem;
}
dl > div {
  margin-top: 12px;
}
dl > div > dt,
dl > div > dd {
  display: inline-block;
}
dl > div > dt {
  color: #888;
  width: 30%;
}
dl > div > dd {
  width: 70%;
}
dl > div > dd input {
  width: 100%;
  padding: 2px 5px;
}
dl > div > dd select {
  width: 100%;
  padding: 0 5px 5px 5px;
}
dl > div:nth-of-type(3n) > dd > select {
  width: calc(50% - 5px);
}
dl > div:nth-of-type(3n) > dd > select:first-of-type {
  margin-right: 10px;
}
/* 수정, 로그아웃 */
div.container > div:nth-of-type(1) {
  margin-top: 20px;
}
div.container > div > button {
  margin-top: 20px;
  padding: 10px 0;
  font-size: 1.5rem;
  background: #ffc800;
  border-radius: 5px;
}
div.container > div:nth-of-type(1) > button {
  display: inline-block;
  width: calc(50% - 10px);
}
div.container > div:nth-of-type(1) > button:nth-of-type(1) {
  margin-right: 10px;
}
div.container > div:nth-of-type(1) > button:nth-of-type(2) {
  margin-left: 10px;
  background: #cdcdcd;
  color: #fff;
}
/* 리뷰 쓰기 */
div.container > div:nth-of-type(2) > button {
  width: 100%;
}
</style>
