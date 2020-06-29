<template>
  <div class="container">
    <h1>마이 페이지</h1>
    <ul>
      <li><router-link to="/mypage/myinfo">내 정보 관리</router-link></li>
      <li>내 리뷰 관리</li>
      <li>문의 내역</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.container {
  text-align: center;
  margin-top: 100px;
}
div.container > h1 {
  font-size: 2.8rem;
}
div.container > ul {
  margin-top: 50px;
}
div.container > ul > li {
  display: block;
  width: 90%;
  height: 80px;
  line-height: 80px;
  margin: 20px auto;
  font-size: 2rem;
  font-weight: 600;
  color: #202020;
  border-radius: 8px;
  background-color: #ffc800;
}
</style>
