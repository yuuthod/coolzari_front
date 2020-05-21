<template>
  <footer>
    <h1>
      <img src="@/assets/images/logo/coolLogo_white.png" alt="coolzari logo" />
    </h1>
    <div>
      <ul>
        <li><a href="#">1:1 문의</a></li>
        |
        <li><a href="#">개인정보처리방침</a></li>
        |
        <li><a href="#">공지사항</a></li>
      </ul>
      <address>
        <span>coolzari00@gmail.com, CoolPjt(WANT / thod / buti / mori)</span>
        <span>ⓒ2020 꿀자리 Project, All rights reserved.</span>
      </address>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: absolute;
  width: 100%;
  min-height: 80px;
  line-height: 80px;
  vertical-align: middle;
  text-align: center;
  font-size: 0.6rem;
  bottom: 0;
  color: #aaa;
  background: #424242;
}
footer > h1,
footer > div {
  display: inline-block;
  line-height: 15px;
  vertical-align: middle;
  text-align: left;
  padding: 0 7px;
}
footer > h1 > img {
  width: 2rem;
  opacity: 0.5;
}
footer > div > ul > li {
  display: inline-block;
  padding-right: 5px;
}
footer > div > ul > li:not(:first-child) {
  padding-left: 5px;
}
footer > div > ul > li > a {
  color: #aaa;
}
footer > div > address > span {
  display: block;
}
</style>
