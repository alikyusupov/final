<template>
  <Navbar/>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@font-face {
  font-family: 'prettyFont'; /*a name to be used later*/
  src: url("./assets/fonts/pretty_font.ttf"); /*URL to font*/
}

*{
  font-family: 'prettyFont'; /*a name to be used later*/
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}
body{
  min-height: 90vh;
}
.spacer{
  flex-grow: 1;
}
a{
  color:black !important;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
