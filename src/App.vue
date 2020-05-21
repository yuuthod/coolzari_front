<template>
  <div id="app">
    <Header></Header>
    <section><router-view /></section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/commons/Header.vue';
import Footer from '@/components/commons/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  updated() {
    this.$store.commit('header/navSetFalse');
  },
};
</script>

<style></style>
