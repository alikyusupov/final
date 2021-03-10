<template>
      <div class="container text-center">
        <img src="@/assets/img/fi.png" alt="Suomi flag" class="img-fluid">
        <br>
        <button class="btn btn-outline-secondary btn-md">
           <i class="bi bi-info-square"></i> Lisatietoja || Details 
        </button>

        <div class="row">

          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_01.jpg" alt="Suomi landscape" class="img-fluid active">
          </div>

          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p>Landscape</p>
          </div>
        </div>

        <div class="row flex-row-reverse">
          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_02.jpg" alt="Suomi landscape" class="img-fluid active">
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p>Landscape</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_03.jpg" alt="Suomi landscape" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p>Landscape</p>
          </div>
        </div>

        <div class="row flex-row-reverse">
          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_04.jpg" alt="Suomi landscape" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p class="text-center">Landscape</p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_05.jpg" alt="Suomi landscape" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p>Landscape</p>
          </div>
        </div>

        <div class="row flex-row-reverse">
          <div class="col-12 col-md-6">
            <img src="@/assets/img/suomi_scene_06.jpg" alt="Suomi landscape" class="img-fluid">
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <p>Landscape</p>
          </div>
        </div>
      </div>
      <Parallax/>
</template>

<script>
import Parallax from './Parallax.vue'
export default {
  name: 'Hello',
  components:{Parallax},
  data(){
    return{
      
    }
  },
  methods:{
    checkPos(){

      let array = document.querySelectorAll(".row img");
      for (let index = 0; index < array.length; index++) {
        let rect = array[index].getBoundingClientRect()
          if(rect.bottom + 200 < window.innerHeight + 150 && !array[index].classList.contains("active")){
            array[index].classList.add("active")
        }
      }
    }
  },
  mounted(){
    document.addEventListener("scroll", this.checkPos, false)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

 img{
    max-width:300px
  }

 .row img{
   transform: rotateX(-180deg) translateY(100%);
   opacity: 0;
 }
  .active{
    animation: flipdrop .8s ease-in forwards;
    animation-delay: .1s;
  }
</style>

<style>
 
  @keyframes flipdrop{
    0%{
      transform: rotateX(-180deg);
      transform-origin: top;
    }
    75%{
      opacity: 0;
    }
    100%{
      transform: rotateX(0);
      transform-origin: top;
      opacity: 1;
    }
  }

  
</style>
