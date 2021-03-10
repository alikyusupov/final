<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-2 col-md-4">
                
            </div>
            <div id="parent" class="col-8 col-md-4">
                    <section>
                            <div class="form-floating mb-3">
                                <input v-model="mail_login" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" >
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="pwd_login" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                <label for="floatingPassword">Password</label>
                            </div>
                            <br>
                            <button @click="login" type="button" class="btn btn-secondary btn-sm">Login</button>
                            <br>
                            <span>или</span>
                            <br>
                            <router-link to="/signup">
                                <button @click="newUser=!newUser" type="button" class="btn btn-secondary btn-sm">Создать аккаунт</button>
                            </router-link>
                    </section>
            </div>
            <div class="col-2 col-md-4">
                
            </div>
        </div>
        <img style="max-width:350px" src="@/assets/img/Cathedral.svg" alt="">
    </div>
</template>

<script>

export default {
  name: 'Auth',
  data(){
      return{
          mail_login: null,
          pwd_login: null
      }
  },
  methods:{
      login(){
          this.$store.dispatch("login", {
            mail:       this.mail_login,
            password:   this.pwd_login
        })
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
