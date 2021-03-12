<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-4 rooms-box">
                <h2>Messages</h2>
                 <div class="tab-content" id="pills-tabContent">
                        <div  v-for="(chat, index) of chats" :key="index" class="tab-pane fade" :id="'pills-'+index" role="tabpanel" :aria-labelledby="'pills-'+index+'-tab'">
                            <p v-for="message of chat.messages" :key="message">
                                {{message}}
                            </p>
                        </div>

                    </div>
            </div>
            <div class="col-8 messages-box">
                <h2>Users</h2>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation" v-for="(chat, index) of chats" :key="index">
                            <button class="nav-link" :id="'pills-'+index+'tab'" data-bs-toggle="pill" :data-bs-target="'#pills-'+index"
                            type="button" role="tab" :aria-controls="'pills-'+index" aria-selected="false" @click="selectchat(chat.userID)">
                            {{chat.name}}
                            <span v-if="chat.messages.length" class="badge bg-secondary">{{chat.messages.length}}</span>
                        
                            </button>
                        </li>
                    </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="mb-3">
                    <label for="sendertext" class="form-label">{{username}}</label>
                    <textarea v-model="sendertext" class="form-control" id="sendertext" rows="3" placeholder="type here"></textarea>
                </div>
                <button @click="sendmessage" class="btn btn-outlined btn-danger">Send</button>
            </div>
        </div>
        <div class="row" style="margin-bottom:50px">
            <div class="col-8">
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

                            <td align="center" 
                            v-for="(cell, j) of spots[i]" 
                            :key="j" 
                            @click="getbyID($event)" 
                            :id="String(i)+String(j)"
                            v-bind:class="{ 'table-danger': spots[i][j].slot==='reserved', 'table-warning': spots[i][j].slot==='Disabled'}"
                            >
                                {{spots[i][j].slot}}
                            </td>
        
                        </tr>
        
                    </tbody>
                </table>
            </div>
            <div class="col-4">
                <template v-for="(value, name) in booking" :key="value">
                        <p class="text-muted"><span class="font-weight-bold">{{ name }}: {{ value }}</span></p>
                </template>
                
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
          sendertext:"",
          chatID:""
      }
  },
  components: {
  },
  computed:{
      chats(){
          return this.$store.state.chats
      },
      spots(){
          return this.$store.state.table
      },
       username(){
          return this.$store.state.username
      },
      booking(){
          return this.$store.state.booking
      }
 
  },
  methods:{
      sendmessage(){
          let message = {
              content:      this.sendertext,
              receiverID:   this.chatID
          }
          this.$store.dispatch("sendmessage", message)
      },
      selectchat(id){
          this.chatID = id;
      },
      getbyID(e){
          this.$store.dispatch("getdetails", { id :e.target.id })
      },
      emitMessage(){
        let token = localStorage.getItem("userID")
        let data =  {
            message:  this.sendertext,
            token:    token
        }
        this.$socket.emit("message", data)
      },
  },
  mounted(){

      this.$store.dispatch("dashboard")
      this.$store.dispatch("schedule")
      this.$socket.on("message",(data)=>{
          console.log("Новое сообщение "+data)
      })
  }
}
</script>
<style scoped>
    .tab-content{
        max-height: 250px;
        overflow-y: scroll;
    }
</style>