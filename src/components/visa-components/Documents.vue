<template>
      <transition name="modal">
        <div v-if="isModal" class="modal-wrapper">
          <div class="modal-body">
            <img :src="url" alt="" class="img-fluid">
            <p><span @click="closeModal" class="btn btn-light">OK</span></p>
          </div>
        </div>
      </transition>
      <section class="row text-center">
        <div class="col-1 col-sm-2 col-md-4 col-lg-5"></div>
        <div class="col-10 col-sm-8 col-md-4 col-lg-2">
          <div class="mb-3">
            <label for="someid" class="form-label">Поиск документа</label>
            <input v-model="query" type="text" class="form-control" id="someid" >
          </div>
        </div>
        <div class="col-1 col-sm-8 col-md-4 col-lg-5"></div>
      </section>


      <section class="row" id="gallery">
          <transition-group name="list">
              <div v-for="doc of computeddocs" :key="doc.title" class="col-6 col-sm-4 col-md-3" @click="showModal($event)">
                <span>{{doc.title}}</span><br>
                <img :id="doc.id" :src="doc.path" title="passport">
              </div>
          </transition-group>
      </section>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Documents',
  components:{
  },
  data(){
    return{
      query:"",
      docs:[
        {
          title:  "Passport",
          id:     "icon_passport",
          path:   "icons/icon_passport.svg"
        },
        {
          title:  "Insurance",
          id:     "icon_insurance",
          path:   "icons/icon_ins.svg"
        },
        {
          title:  "Form",
          id:     "icon_application",
          path:   "icons/icon_application.svg"
        },
        {
          title:  "Photo",
          id:     "icon_photo",
          path:   "icons/icon_photo.svg"
        },
        {
          title:  "Invitation",
          id:     "icon_invitation",
          path:   "icons/icon_invitation.svg"
        },
        {
          title:  "Permit",
          id:     "icon_permit",
          path:   "icons/icon_permit.svg"
        },
        {
          title:  "Residence permit",
          id:     "icon_residence_permit",
          path:   "icons/icon_residence_permit.svg"
        },
        {
          title:  "Job reference",
          id:     "icon_job_reference",
          path:   "icons/icon_job_reference.svg"
        },
        {
          title:  "Study ID card",
          id:     "icon_study_reference",
          path:   "icons/icon_study_reference.svg"
        },
        {
          title:  "Migration card",
          id:     "icon_migration_card",
          path:   "icons/icon_migration_card.svg"
        },
        {
          title:  "Registration",
          id:     "icon_temporary",
          path:   "icons/icon_temporary.svg"
        },
        {
          title:  "Patent",
          id:     "icon_patent",
          path:   "icons/icon_patent.svg"
        },
        {
          title:  "Checks",
          id:     "icon_checks",
          path:   "icons/icon_checks.svg"
        },
         {
          title:  "Birth certificate",
          id:     "icon_birth_certificate",
          path:   "icons/icon_birth_certificate.svg"
        },
        {
          title:  "Study reference",
          id:     "icon_study_reference_2",
          path:   "icons/icon_study_reference_2.svg"
        },
        {
          title:  "Bank reference",
          id:     "icon_bank_reference",
          path:   "icons/icon_bank_reference.svg"
        },
        {
          title:  "Job contract",
          id:     "icon_job_contract",
          path:   "icons/icon_job_contract.svg"
        },
        {
          title:  "Work Permit",
          id:     "icon_work_permit",
          path:   "icons/icon_work_permit.svg"
        },
         {
          title:  "Visa Rus",
          id:     "icon_visa_rus",
          path:   "icons/icon_visa_rus.svg"
        },
        {
          title:  "itinerary",
          id:     "icon_itinerary",
          path:   "icons/icon_itinerary.svg"
        }
     
      ]
    }
  },
  methods:{
     closeModal(){
            this.$store.commit("closeModal");
            document.body.style.overflow = "scroll"
        },
    showModal(e){
      this.$store.commit("showModal", {
        path:"modals/" + e.target.id + ".svg"
      })
      document.body.style.overflow = "hidden"
    }
  },
  computed:{
computeddocs(){
let search = this.query.toLowerCase();
return this.docs.filter(doc=> {
return doc.title.toLowerCase().indexOf(search) > -1;
	})
},
isModal(){
  return this.$store.state.isModal
  },
url(){
  return this.$store.state.modalIMG
}
}}
</script>
<style scoped>
.modal-wrapper{
  position:fixed;
  width:100%;
  height: 100%;
  top:0;
  left: 0;
  background-color: rgba(50, 50, 50, .5);
}
.modal-body{
  margin-top: 20vh;
  width: 20%;
  margin-left: 40%;

}
.list-enter-active, .list-leave-active {
    transition: all 1s ease-in-out;
}
.list-enter /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(330px);
}
.list-leave-to{
    opacity: 0;
    transform: translateY(-330px);
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s ease-in-out;
}
.modal-enter, .modal-leave-to {
  opacity: 0
}
@media (max-width: 768px) {
  .modal-body{
  width: 80%;
  margin-left: 10%;

}
}
@media (min-width: 769px) and (max-width:2000px){
  .modal-body{
  width: 30%;
  margin-left: 35%;

}
}
</style>