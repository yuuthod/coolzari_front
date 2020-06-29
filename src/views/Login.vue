<template>
  <div class="container">
    <h1>로그인</h1>
    <ul>
      <li><span>G</span><span>Google 로그인</span></li>
      <li><span>N</span><span>Naver 로그인</span></li>
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
  color: #fff;
  border-radius: 8px;
}
div.container > ul > li:nth-of-type(1) {
  background: #3e82f1;
}
div.container > ul > li:nth-of-type(2) {
  background: #1ec800;
}
div.container > ul > li > span {
  display: inline-block;
  height: 100%;
}
div.container > ul > li > span:nth-of-type(1) {
  width: calc(25% - 1px);
  border-right: 1px solid #fff;
  text-align: center;
  vertical-align: top;
  font-size: 2.7rem;
}
div.container > ul > li > span:nth-of-type(2) {
  width: 75%;
}
</style>
