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
            list:[],
            booking:{},
            isModal:false,
            modalIMG:"",
            emailExistsError:false,
            loginerror: false,
            passworderror: false,
            answers:[]
        }
    },
    mutations:{
        authorize(state, data){
            if(data.data.emailinuse)
                state.emailExistsError = true;
            else{
                state.emailExistsError = false;
                router.push("/auth")
            }
        },
        identify(state, data){
            console.log(data.data)
            if(data.data.passworderror)
                state.passworderror = true;
            else if(data.data.loginerror)
                state.loginerror = true;
            else{
                state.passworderror = false;
                state.loginerror = false;
                state.isAuth = data.data.status;
                state.isAdmin = data.data.adminStatus;
                state.username = data.data.username
                localStorage.setItem("isAuth", data.data.status)
                localStorage.setItem("isAdmin", data.data.adminStatus)
                localStorage.setItem("sessionID", data.data.sessionID)
                localStorage.setItem("userID", data.data.userID)
                localStorage.setItem("username", data.data.username)
                router.push("/")
            }
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
            console.log(data)
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
        },
        getdetails(state, data){
            console.log(data.data)
            state.booking = data.data;
        },
        showModal(state, data){
            state.isModal = true;
            state.modalIMG  = data.path
        },
        closeModal(state){
            state.isModal = false;
        },
        sendmessage(state, data){
            console.log(state, data)
        },
        getanswers(state, data){
            state.answers = data.data
        }
    },
    actions:{
        signup(context, data){
            axios.post('/signup', data)
            .then(response=> {
                context.commit('authorize', response)
            })
            .catch(error=> {
                console.log(error);
            });
        },
        login(context, data){
            axios.post('/login', data)
            .then(response=>{
                context.commit('identify', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        logout(context){
            axios.post('/logout')
            .then(response=>{
                context.commit('exit', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        schedule(context){
            axios.get('/schedule')
            .then(response=>{
                context.commit('schedule', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        book(context, data){
            axios.post('/book', data)
            .then(response=>{
                context.commit('book', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        dashboard(context){
            axios.get('/admin/chats')
            .then(response=>{
                context.commit('dashboard', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        chat_client(context){
            let token = localStorage.getItem("userID")
            axios.post('/chats',{userID:token})
            .then(response=>{
                context.commit('chat_client', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        getdetails(context, data){
            axios.post("/admin/getdetails",{id: data.id})
            .then(response=>{
                context.commit('getdetails', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        sendmessage(context, data){
            axios.post("/admin/sendmessage", data)
            .then(response=>{
                context.commit('sendmessage', response)
            })
            .catch(error=>{
                console.log(error);
            });
        },
        getanswers(context){
            let token = localStorage.getItem("userID")
            axios.post('/getanswers',{userID:token})
            .then(response=>{
                context.commit('getanswers', response)
            })
            .catch(error=>{
                console.log(error);
            });
        }
    }
})

export default store




