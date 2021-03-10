<template>
   <h1 align="center">parallax</h1>
    <div class="container">
        <div class="row">
            <div class="col-12 test" :style="{ backgroundImage: 'url(@/assets/img/suomi_scene_01.jpg)' }">
                
            </div>
            <div class="col-12">
                <img src="@/assets/img/suomi_scene_02.jpg" alt="Suomi landscape" class="img-fluid">
            </div>
            <div class="col-12">
                <img src="@/assets/img/suomi_scene_03.jpg" alt="Suomi landscape" class="img-fluid">
            </div>
            <div class="col-12">
                <img src="@/assets/img/suomi_scene_04.jpg" alt="Suomi landscape" class="img-fluid">
            </div>
            <div class="col-12">
                <img src="@/assets/img/suomi_scene_05.jpg" alt="Suomi landscape" class="img-fluid">
            </div>
            <div class="col-12">
                <img src="@/assets/img/suomi_scene_06.jpg" alt="Suomi landscape" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Parallax'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .test{
        background-image: url("/img/suomi_scene_01.jpg");
    }
</style>
