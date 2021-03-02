<template>
    <main class="container">
      <section class="row text-center">
         <div class="col-12 col-lg-6" >
           <img src="https://placeimg.com/640/480/any" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-lg-6">
            Description
          </div>
      </section>
      <section class="row flex-row-reverse text-center">
         <div class="col-12 col-lg-6">
           <img src="https://placeimg.com/640/480/any" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-lg-6">
            Description
          </div>
      </section>
    </main>
</template>

<script>
export default {
  name: 'Main',
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row > div{
    padding:0 !important;
  }
</style>
