<template>

<ul class="cl-effect-2">
    <router-link to="/">
        <li>
            <span data-hover='Home'>
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </span>
        </li>
    </router-link>
        <li class="showable" data-bs-toggle="modal" data-bs-target="#menumodal">
            <span data-hover="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </span>
        </li>
    <router-link to="/about">
        <li class="hidable">
            <span data-hover="About">
                About
            </span>
        </li>
    </router-link>
    <router-link to="/visa">
        <li class="hidable">
            <span data-hover="Виза">
                Виза
            </span>
        </li>
    </router-link>
    <router-link to="/appointment" v-if="isAuth && !isAdmin">
        <li class="hidable">
            <span data-hover="Запись">
                Запись
            </span>
        </li>
    </router-link>
    <router-link to="/funland">
        <li class="hidable">
            <span data-hover="Funland">
                Funland
            </span>
        </li>
    </router-link>
    <router-link to="/dashboard" v-if="isAdmin">
        <li>
            <span data-hover="Админка">
                Админка
            </span>
        </li>
    </router-link>
    <li class="spacer"></li>
    <li class="spaced" v-if="!isAuth">
        <router-link to="/auth">
            <span data-hover="Login">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
            </span>
        </router-link>
     </li>
     <li class="spaced" v-if="isAuth" @click="logout">
            <span>{{username}}</span>
            <span data-hover="Logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                    <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                </svg>
            </span>
     </li>
</ul>

<div id="menumodal" class="modal" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ul class="mobile-menu">
                <router-link to="/about" @click="handleModal">
                    <li>
                        About
                    </li>
                </router-link>
                <router-link to="/visa" @click="handleModal">
                    <li>
                        Visa
                    </li>
                </router-link>
                <router-link to="/funland"  @click="handleModal">
                    <li>
                        Funland
                    </li>
                </router-link>
                <router-link to="/appointment" v-if="isAuth && !isAdmin"  @click="handleModal">
                    <li>
                        Запись
                    </li>
                </router-link>
                <router-link to="/dashboard" v-if="isAdmin"  @click="handleModal">
                    <li>
                        Админка
                    </li>
                </router-link>
            </ul>
        </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Navbar',
  data(){
      return{

      }
  },
  methods:{
      logout(){
          this.$store.dispatch("logout")
      },
      handleModal(){
          document.body.classList.remove("modal-open")
      }
  },
  computed:{
      isAuth(){
          return this.$store.state.isAuth
      },
      isAdmin(){
          return this.$store.state.isAdmin
      },
      username(){
          return this.$store.state.username
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .spacer{
      flex-grow: 1;
    }
    .spaced{
        padding-right:6px;
    }

    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-top:15px;
    }
    li{
        margin: 0 7px;
    }
    li:hover{
        cursor:pointer;
    }

    ul li {
	line-height: 44px;
	-webkit-perspective: 1000px;
	-moz-perspective: 1000px;
	perspective: 1000px;
}

    ul li span {
	position: relative;
	display: inline-block;
	padding: 0 14px;
	background: #ffffff;
	-webkit-transition: -webkit-transform 0.3s;
	-moz-transition: -moz-transform 0.3s;
	transition: transform 0.3s;
	-webkit-transform-origin: 50% 0;
	-moz-transform-origin: 50% 0;
	transform-origin: 50% 0;
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
}

    ul li span::before {
	position: absolute;
	top: 100%;
	width: 100%;
	height: 100%;
	content: attr(data-hover);
	-webkit-transition: background 0.3s;
	-moz-transition: background 0.3s;
	transition: background 0.3s;
	-webkit-transform: rotateX(-90deg);
	-moz-transform: rotateX(-90deg);
	transform: rotateX(-90deg);
	-webkit-transform-origin: 50% 0;
	-moz-transform-origin: 50% 0;
	transform-origin: 50% 0;
}


ul li:hover span,
ul li:focus span {
	-webkit-transform: rotateX(90deg) translateY(-22px);
	-moz-transform: rotateX(90deg) translateY(-22px);
	transform: rotateX(90deg) translateY(-22px);
}

ul li:hover span::before,
ul li:focus span::before {
	background: #ffffff;
}
.mobile-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width:800px) {
    .hidable{
        display: none
    }
    .showable{
        display: block;
    }
}
@media (min-width:801px){
    .showable{
        display: none;
    }
}

</style>
