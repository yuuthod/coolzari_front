<template>
  <header>
    <h1>
      <img
        src="@/assets/images/logo/coolLogo_white+gray.png"
        alt="coolzari logo"
      />
    </h1>
    <div
      class="hamburger"
      @click="clickHandler"
      :class="isShow ? 'is-active' : ''"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>

    <transition name="slide-fade">
      <nav ref="menu" v-if="isShow">
        <router-link to="/">Home</router-link>
        <router-link to="/review">Review</router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    clickHandler() {
      this.$store.commit('header/navClickHandler');
    },
  },
  computed: {
    ...mapGetters('header', {
      isShow: 'getIsNavShow',
    }),
  },
};
</script>

<style scoped>
header {
  background: #ffca0d;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  box-shadow: 0px 2px 6px 0 #aaa;
}
header > h1 > img {
  padding-top: 7px;
  width: 3.1rem;
}
div.hamburger .line {
  width: 2rem;
  height: 4px;
  background-color: #ecf0f1;
  display: block;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
div.hamburger:hover {
  cursor: pointer;
}
div.hamburger.is-active .line:nth-child(2) {
  opacity: 0;
}
div.hamburger.is-active .line:nth-child(1) {
  -webkit-transform: translateY(9px) rotate(45deg);
  -ms-transform: translateY(9px) rotate(45deg);
  -o-transform: translateY(9px) rotate(45deg);
  transform: translateY(9px) rotate(45deg);
}
div.hamburger.is-active .line:nth-child(3) {
  -webkit-transform: translateY(-9px) rotate(-45deg);
  -ms-transform: translateY(-9px) rotate(-45deg);
  -o-transform: translateY(-9px) rotate(-45deg);
  transform: translateY(-9px) rotate(-45deg);
}
header > nav {
  position: absolute;
  min-width: 50%;
  min-height: calc(100% - 40px);
  top: 40px;
  right: 0;
  padding-top: 10px;
  background: #ffca0d;
  z-index: 1;
}
header > nav > a {
  display: block;
  font-size: 1.1rem;
  text-align: right;
  padding: 20px 30px 0;
  color: #fff;
}
header > nav > a.router-link-exact-active {
  font-weight: 900;
  color: #000;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30%);
  opacity: 0;
}
</style>
