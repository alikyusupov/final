<template>
  <Navbar/>
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
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
a{
  color:black !important;
  text-decoration: none;
}
ul{
  list-style-type: none;
}

.selfmessage {
  background: #eee;
  float: left;
  border-radius: 5px 30px 30px 5px;
}

.othermessage{
  float: right;
  background: #0084ff;
  color: #fff;
  border-radius: 30px 5px 5px 30px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}


</style>
