<template>
    <div class="row grid">
      <div class="box box-1">
          <img src="@/assets/img/suomi_scene_02.jpg" alt="Suomi landscape" class="img-fluid">
        </div>
      <div class="box">Lorem ipsum dolor sit amet.</div>
      <div class="box"><img src="@/assets/img/suomi_scene_01.jpg" alt="Suomi landscape" class="img-fluid"></div>
      <div class="box">Lorem ipsum dolor sit amet.</div>
      <div class="box">
          <img src="@/assets/img/suomi_scene_03.jpg" alt="Suomi landscape" class="img-fluid">
        </div>
      <div class="box">Lorem ipsum dolor sit amet.</div>
      <div class="box"><img src="@/assets/img/suomi_scene_04.jpg" alt="Suomi landscape" class="img-fluid"></div>
      <div class="box">Lorem ipsum dolor sit amet.</div>
      <div class="box"><img src="@/assets/img/suomi_scene_05.jpg" alt="Suomi landscape" class="img-fluid"></div>
      <div class="box">Lorem ipsum dolor sit amet.</div>
    </div>
</template>

<script>
export default {
  name: 'Parallax'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        height: 90vh;
        padding: 2vh;
    }
    .box {
        padding: 1em;
        background: url("/wallpaper.jpg");
        background-size: cover;background-attachment: fixed; /* The top secret, try to ctrl + / for this line */
        height: minmax(1px, auto);
    }
 
    .box:nth-child(4) {
        grid-column: 1/3;
    }

    .box:nth-child(7) {
        grid-column: 2/4;
    }
</style>
