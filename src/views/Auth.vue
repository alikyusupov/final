<template>

    <div class="container text-center">
        <div class="row">
            <div class="col-2 col-md-4">
                
            </div>
            <div id="parent" class="col-8 col-md-4">
                <transition>
                    <section>
                        <section v-if="!newUser">
                            <div class="form-floating mb-3">
                                <input v-model="mail_login" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
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
                            <button @click="newUser=!newUser" type="button" class="btn btn-secondary btn-sm">Создать аккаунт</button>
                        </section>
                        <section v-if="newUser">
                            <div class="form-floating mb-3">
                                <input v-model="mail_signup" type="email_" class="form-control" id="floatingInput_" placeholder="name@example.com">
                                <label for="floatingInput_">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="pwd_signup" type="password" class="form-control" id="floatingPassword_" placeholder="Password">
                                <label for="floatingPassword_">Password</label>
                            </div>
                            <br>
                            <div class="form-floating">
                                <input v-model="pwd_confirm" type="password" class="form-control" id="_floatingPassword_" placeholder="Confirm password">
                                <label for="_floatingPassword_">Confirm password</label>
                            </div>
                            <br>
                            <button @click="signup" type="button" class="btn btn-secondary btn-sm">Регистрация</button>
                        </section>
                    </section>
                </transition>
            </div>
            <div class="col-2 col-md-4">
                
            </div>
        </div>
    </div>

    <div id="example-2">
        <button @click="show = !show">
            Переключить отображение
        </button>
        <transition name="bounce">
            <p v-if="show">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
            </p>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'Auth',
  data(){
      return{
          newUser: false,
          show:true
      }
  },
  methods:{
      signup(){
        let newUser={
            mail:     this.mail_signup,
            password: this.pwd_signup,
            confirm:  this.pwd_confirm
        }
        
        this.$store.commit("signup", newUser)
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

    bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }


</style>
