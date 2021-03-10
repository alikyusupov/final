<template>
  <div class="container">
      <div class="row text-center">
          <div class="col-8 messages-box">
              <h2>Messages</h2>
              <section v-for="message of messages" class="row" :key="message._id">
                  <div class="col-12">{{message.message}}</div>
              </section>
              <hr>
              <p class="text-muted">Предыдущие сообщения</p>
              <!--<section class="row flex-row-reverse ">
                  <div class="col-6">Message 1</div>
              </section>-->
              
          </div>
      </div>
      <div class="row">
          <div class="col-8">
            <div class="mb-3">
                <label for="sendertext" class="form-label">{{username}}</label>
                <textarea v-model="sendertext" class="form-control" id="sendertext" rows="3" placeholder="type here"></textarea>
            </div>
            <button @click="emitMessage" class="btn btn-outlined btn-danger">Send</button>
          </div>
      </div>
  </div>
</template>
<script>

//import {Sign} from './chat'

export default {
    
  name: 'Chatroom',
  data(){
      return {
          sendertext:"",
          hook: ".messages-box"
      }
  },
  components: {
  },
  computed:{
       username(){
          return this.$store.state.username
      },
      messages(){
          return this.$store.state.clientmessages
      }
  },
  methods:{
      emitMessage(){
        let token = localStorage.getItem("userID")
        this.$socket.emit("message", {
            message:  this.sendertext,
            token:    token,
            socketid: this.$socket.id
        })
      }
  },
  mounted(){
      this.$store.dispatch("chat_client")
      this.$socket.on("message",(data)=>{
        let letters = data.message.split("");
        let parentEl = document.createElement("section");
        let childEl = null;
        parentEl.classList.add("row")
        if(this.$socket.id == data.socketid){
            childEl = document.createElement("div");
            childEl.style.position = "relative"
            childEl.classList.add("col-6")
            childEl.classList.add("selfmessage")
            parentEl.appendChild(childEl);
            document.querySelector(this.hook).appendChild(parentEl)
        }
        else{
            parentEl.classList.add("flex-row-reverse")
            childEl = document.createElement("div");
            childEl.style.position = "relative"
            childEl.classList.add("col-6")
            childEl.classList.add("othermessage")
            parentEl.appendChild(childEl);
            document.querySelector(this.hook).appendChild(parentEl)
        }
        for (let i = 0; i < letters.length; i++) {
                setTimeout(()=>{
                    let el = document.createElement("span");
                    el.innerText = letters[i];
                    childEl.appendChild(el)
                },200*i)
            }
      })
  }
}
</script>
<style scoped>

.messages-box, .rooms-box{
    border: 1px solid grey;
}
.header-msg {
    text-align: center;
}
li{ 
    background-color: black;
    border:2px solid whitesmoke;
    border-radius: 10px;
    margin:10px auto;
    padding: 4px;
    color:white;
    cursor: pointer;
};

*{
    font-size:32px;
    font-weight: bold;
}

</style>