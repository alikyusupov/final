<template>

    <main class="container">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-purpose-tab" data-bs-toggle="pill" data-bs-target="#pills-purpose" type="button" role="tab" aria-controls="pills-purpose" aria-selected="true">Purpose</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-documents-tab" data-bs-toggle="pill" data-bs-target="#pills-documents" type="button" role="tab" aria-controls="pills-documents" aria-selected="false">Documents</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-fees-tab" data-bs-toggle="pill" data-bs-target="#pills-fees" type="button" role="tab" aria-controls="pills-fees" aria-selected="false">Fees</button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-purpose" role="tabpanel" aria-labelledby="pills-purpose-tab">
          <Purpose/>
        </div>

        <div class="tab-pane fade" id="pills-documents" role="tabpanel" aria-labelledby="pills-documents-tab">
          <Documents/>
        </div>
        <div class="tab-pane fade" id="pills-fees" role="tabpanel" aria-labelledby="pills-fees-tab">
          <Fees/>
        </div>
      </div>
    </main>
</template>

<script>
import Purpose from './visa-components/Purpose.vue'
import Documents from './visa-components/Documents.vue'
import Fees from './visa-components/Fees.vue'
export default {
  name: 'Main',
  components:{
    Purpose,
    Documents,
    Fees
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    color:rgb(168, 157, 157) !important;
    text-decoration: none;
  }
  ul{
    display: flex;
    justify-content: center;
  }
</style>
