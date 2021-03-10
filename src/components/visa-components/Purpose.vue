<template>
  <div class="container">
    <h2 align="center" class="text-muted"></h2>

    <div class="row">

        <div class="col-12 text-center">
            <span  type="button" class="btn btn-danger btn-sm" @click="purpose_one">
                <i class="bi bi-camera"></i>
                Tourism
            </span>

            <span  type="button" class="btn btn-info btn-sm" @click="purpose_two">
                <i class="bi bi-truck"></i>
                Business
            </span>

            <span  type="button" class="btn btn-dark btn-sm" @click="purpose_three">
                <i class="bi bi-diagram-2"></i>
               Visit
            </span>
        </div>

    </div>

    <div class="row text-center">
        <div class="col-12 col-md-6">
            <img v-show="isTourism" src="@/assets/img/icon_tourism.svg" alt="path">
            <img v-show="isBusiness" src="@/assets/img/icon_business.svg" alt="path">
            <img v-show="isVisit" src="@/assets/img/icon_visit.svg" alt="path">
        </div>
        <div class="col-12 col-md-6">
             <ul class="list-group" >
                <transition-group name="list">
                    <li v-for="item of list" :key="item" class="list-group-item">
                        <p class="text-muted font-weight-bold">{{item}}</p>
                    </li>
                </transition-group>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Purpose',
  data(){
      return{
          isVisit:false,
          isTourism:false,
          isBusiness:false,
          listTourism:[
              "Страховой полис",
              "Паспорт заграничный",
              "Паспорт (для лиц старше 14 лет)",
              "Св-во о (для лиц младше 18 лет",
              "Анкета",
              "Фото",
              "Бронь гостиницы",
              "Справка о доходах"
          ],
          listBusiness:[
              "Страховой полис",
              "Паспорт заграничный",
              "Паспорт",
              "Анкета",
              "Фото",
              "Приглашение"
          ],
          listVisit:[
              "Страховой полис",
              "Паспорт заграничный",
              "Паспорт",
              "Анкета",
              "Фото",
              "Приглашение",
              "Подтверждение родства"
          ]

      }
  },
  methods:{
      purpose_one(){
          this.isTourism = true;
          this.isVisit = false;
          this.isBusiness = false;
          this.$store.commit("list1", this.listTourism)
      },
      purpose_two(){
          this.isTourism = false;
          this.isVisit = false;
          this.isBusiness = true;
          this.$store.commit("list2", this.listBusiness)
      },
      purpose_three(){
          this.isTourism = false;
          this.isVisit = true;
          this.isBusiness = false;
          this.$store.commit("list3", this.listVisit)
      }
  },
  computed:{
      list(){
          return this.$store.state.list;
      }
  },
  beforeUnmount(){
        this.$store.commit("clear")
  }


}
</script>
<style scoped>
.list-group{
    margin-top:50px;
}
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateY(330px);
}
.list-leave-to{
    opacity: 0;
    transform: translateY(-330px);
}
</style>