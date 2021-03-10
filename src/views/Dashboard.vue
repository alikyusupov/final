<template>
    <div class="container">
      <div class="row text-center">
          <div class="col-4 rooms-box">
              <h2>Rooms</h2>
              <ul>
                  <li v-for="(chat, index) of chats" :key="index">
                      <section class="d-flex justify-content-between">
                          <div class="header-msg">
                             <span>{{chat.name}}</span> 
                          </div>
                          <div class="footer-msg">
                              <span v-if="chat.messages.length" class="badge bg-secondary">{{chat.messages.length}}</span>
                          </div>
                      </section>
                  </li>
              </ul>
          </div>
          <div class="col-8 messages-box">
              <h2>Messages</h2>
              <section class="row">
                  <div class="col-6">Message 1</div>
              </section>
              <section class="row flex-row-reverse ">
                  <div class="col-6">Message 1</div>
              </section>
          </div>
      </div>
      <div class="row">
          <div class="col">
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
// @ is an alias to /src

export default {
  name: 'Dashboard',
  data(){
      return {
          sendertext:""
      }
  },
  components: {
  },
  computed:{
      chats(){
          return this.$store.state.chats
      },
       username(){
          return this.$store.state.username
      }
  },
  methods:{
      emitMessage(){

        let token = localStorage.getItem("userID")
        let data =  {
            message:  this.sendertext,
            token:    token
        }
        this.$socket.emit("message", data)
      }
  },
  mounted(){
      this.$store.dispatch("dashboard")
      this.$socket.on("message",(data)=>{
          console.log("Новое сообщение "+data)
      })
  }
}
</script>
