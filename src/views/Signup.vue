<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-2 col-md-4">
                
            </div>
            <div id="parent" class="col-8 col-md-4">
                    <section>
                            <div class="form-floating mb-3">
                                <input v-model="name_signup" type="text" class="form-control" id="floatingName" placeholder="Name">
                                <label for="floatingInput">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="mail_signup" type="email_" class="form-control" id="floatingInput_" placeholder="name@example.com" >
                                <label for="floatingInput_">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="pwd_signup" type="password" class="form-control" id="floatingPassword_" placeholder="Password" >
                                <label for="floatingPassword_">Password</label>
                            </div>
                            <br>
                            <div class="form-floating">
                                <input v-model="pwd_confirm" type="password" class="form-control" id="_floatingPassword_" placeholder="Confirm password" >
                                <label for="_floatingPassword_">Confirm password</label>
                            </div>
                            <br>
                            <button @click="signup" type="button" class="btn btn-secondary btn-sm">Регистрация</button>
                    </section>
            </div>
            <div class="col-2 col-md-4">
                
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router/index'
export default {
  name: 'Signup',
  data(){
      return{
         name_signup:null,
         mail_signup:null,
         pwd_signup:null,
         pwd_confirm:null
      }
  },
  methods:{
      signup(){
        this.$store.dispatch("signup", {
            name:       this.name_signup,
            mail:       this.mail_signup,
            password:   this.pwd_signup
        })
        router.push("/auth")
      }
  },
  computed:{
      isAuth(){
          return this.$store.state.isAuth
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    .form-control{
        border-bottom: 1px solid #ced4da;
        border-top: none;
        border-left:none;
        border-right:none;
    }
    #parent{
        margin-top:10%;
    }
</style>
