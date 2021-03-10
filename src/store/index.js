import 'es6-promise/auto'
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router/index'

const store =  createStore({
    state(){
        return {
            isAuth: JSON.parse(localStorage.getItem("isAuth"))  ||  false,
            isAdmin: JSON.parse(localStorage.getItem("isAdmin")) ||  false,
            table:[],
            scheduleState:true,
            chats:[],
            username:localStorage.getItem("username") || "",
            clientmessages:[],
            list:[]
        }
    },
    mutations:{
        authorize(state, data){
            console.log(state, data)
            router.push("/auth")
        },
        identify(state, data){
            state.isAuth = data.data.status;
            state.isAdmin = data.data.adminStatus;
            state.username = data.data.username
            localStorage.setItem("isAuth", data.data.status)
            localStorage.setItem("isAdmin", data.data.adminStatus)
            localStorage.setItem("sessionID", data.data.sessionID)
            localStorage.setItem("userID", data.data.userID)
            localStorage.setItem("username", data.data.username)
            router.push("/")
        },
        exit(state){
            state.isAuth = false,
            state.isAdmin = false,
            state.username = ""
            localStorage.removeItem('sessionID')
            localStorage.removeItem('userID')
            localStorage.removeItem('isAuth')
            localStorage.removeItem('isAdmin')
            localStorage.removeItem("username")
            state.table = [],
            router.push("/")
        },
        schedule(state, data){
            state.table = data.data;
            state.scheduleState = false;
        },
        book(state, data){
            console.log(state, data)
        },
        dashboard(state, data){
            state.chats = data.data
        },
        chat_client(state, data){
            state.clientmessages = data.data
        },
        list1(state, data){
            state.list = data
        },
        list2(state, data){
            state.list = data
        },
        list3(state, data){
            state.list = data
        },
        clear(state){
            state.list = []
        }
    },
    actions:{
        signup(context, data){
            axios.post('http://localhost:3000/signup', data)
            .then(response=> {
                context.commit('authorize', response)
            })
            .catch(error=> {
                console.log(error);
            });
        },
        login(context, data){
            axios.post('http://localhost:3000/login', data)
            .then(response=>{
                context.commit('identify', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        logout(context){
            axios.post('http://localhost:3000/logout')
            .then(response=>{
                context.commit('exit', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        schedule(context){
            axios.get('http://localhost:3000/schedule')
            .then(response=>{
                context.commit('schedule', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        book(context, data){
            axios.post('http://localhost:3000/book', data)
            .then(response=>{
                context.commit('book', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        dashboard(context){
            axios.get('http://localhost:3000/admin/chats')
            .then(response=>{
                context.commit('dashboard', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        chat_client(context){
            let token = localStorage.getItem("userID")
            axios.post('http://localhost:3000/chats',{userID:token})
            .then(response=>{
                context.commit('chat_client', response)
            })
            .catch(error=>{
                console.log(error);
            });
        }
    }
})

export default store




