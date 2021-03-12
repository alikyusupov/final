//take care of routing to the file on the sever side
const path = require('path');

//most popular Node.js routing framework
const express = require('express');

//take care of dealing with posted data
const bodyParser = require('body-parser');

//in charge of remembering user session throughout the requests
const session = require('express-session');

//connect DB to session
const mongoDBStore = require("connect-mongodb-session")(session)

//make easy to work with mongoDB
const mongoose = require("mongoose");

//initializing our app
const app = express();
//initializing DB
const store = new mongoDBStore({
	uri: process.env.MONGO_DB_URI ||"mongodb+srv://Alisher:asd123asd@dressify-zvh54.mongodb.net/itmo",
    databaseName:"itmo",
	collection:"sessions"
});


const cors = require("cors")

const port = process.env.PORT||3000;

const server = require('http').createServer(app);

const userRoutes = require("./routes/user")

const adminRoutes = require("./routes/admin")

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

const Message = require("./models/Message")
const User = require("./models/User");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(
  session({ 
      secret: 'da896624-28b1-44cd-8048-e8d6bc276b17',
      name:"sid",
      cookie: { maxAge: 1000 * 60 * 60, secure: false, httpOnly: false },//hour
      resave: false, 
      saveUninitialized: false, 
      store:store 
    })
);

app.use("/", userRoutes)
app.use("/admin", adminRoutes)
app.get(["/visa", "/funland", "/dashboard", "/about","/chat","/map", "/auth", "/signup", "/appointment"], (req, res, next)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))
})


io.on("connection",(socket)=>{
      let dataname = "";
      let datamessage = "";
      let datatoken = "";
      socket.on("message", data =>{
        io.emit("message", data)
        User.findById(data.token)
        .then(user=>{
          dataname    =  user.name;
          datamessage =  data.message;
          datatoken   =  data.token
          user.messages.push(data.message)
          user.save()
        })
        .then(()=>{
          let message = new Message({
            message:  datamessage,
            name:     dataname,
            sender:   datatoken,
          })
          message.save()
        })
        .catch(err=>{
          console.log(err)
        })
    })
    socket.on('fire',function(data){

      io.sockets.emit('getShot', data);
    })
  })

mongoose.connect("mongodb+srv://Alisher:asd123asd@dressify-zvh54.mongodb.net/itmo?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{
	server.listen(port,()=>{
		console.log(`Listening on ${port}`);
	});
})
.catch(err=>{
	console.log(err)
})