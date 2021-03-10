<template>
    
    <div class="container">
        <h3>Schedule</h3>
        <div class="row">
            <div class="col-12">
                <!--LOADER-->
                <div v-if="loading" class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>

                <table class="table table-responsive">
                    <thead class="table-dark">
                    <tr align="center">
                    <th>Пн 25 Мая</th>
                    <th>Вт 26 Мая</th>
                    <th>Ср 27 Мая</th>
                    <th>Чт 28 Мая</th>
                    <th>Пт 29 Мая</th>
                    <th>Сб 30 Мая</th>
                    </tr>
                </thead>
                <tbody>
        
                        <tr v-for="(spot, i) of spots" :key="i">

                            <td align="center" v-for="(cell, j) of spots[i]" :key="j">
                                {{spots[i][j].slot}}
                            </td>
        
                        </tr>
        
                    </tbody>
                </table>
            </div>
                  <div class="col-12 col-lg-6">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">First and last name</span>
                                </div>
                                <input v-model="firstname" name="firstname" type="text" aria-label="First name" class="form-control" required="true">
                                <input v-model="lastname" name="lastname" type="text" aria-label="Last name" class="form-control" required="true">
                                </div>

                                <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Contact phone number</span>
                                </div>
                                <input v-model="phonenumber" name="phonenumber" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required="true">
                                </div>
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">E-mail address</span>
                                </div>
                                <input v-model="email" name="email" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" required="true">
                            </div>

                            <input v-model="slot" type="hidden" name="slot" required="true">
                            <button @click="book" class="btn btn-outlined btn-danger" id="subBTN">Book Now!</button>
                    </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Schedule',
  data(){
      return{
          firstname:"",
          lastname:"",
          phonenumber:"",
          email:"",
          slot:""
      }
  },
  methods:{
      initScheduleStyle(){
          let array_of_slots = document.getElementsByTagName('td');
            for (var i = 0; i < array_of_slots.length; i++) {
            //array_of_slots[i].id = parseFloat([i]);
            if(array_of_slots[i].innerText == "reserved" || array_of_slots[i].innerText == "not available"){
                array_of_slots[i].classList.add("table-danger");
                array_of_slots[i].classList.add("font-weight-bold");
            }
            else if(array_of_slots[i].innerText == "Disabled"){
                array_of_slots[i].classList.add("table-warning");
            }
            else{
                array_of_slots[i].classList.add("table-light");
                array_of_slots[i].classList.add("font-weight-bold");
            }
        }
      },
      book(){
          let applicant = {
              firstname:    this.firstname,
              lastname:     this.lastname,
              phonenumber:  this.phonenumber,
              email:        this.email,
              slot:         this.slot
          }
          this.$store.dispatch("book", applicant);
      }
  },
  mounted(){
      this.$store.dispatch("schedule");
  },
  updated(){
      this.initScheduleStyle()
  },
  computed:{
      spots(){
          return this.$store.state.table
      },
      loading(){
          return this.$store.state.scheduleState
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
