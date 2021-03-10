const User = require('../models/User')
exports.getChats = (req, res, next)=>{
    console.log(req.session)//почему то пустая сессия хотя при авторизации в файле ./controllers/user.js
                            //ставлю req.session.isAdmin = true/false
    User.find()
    .then(users=>{
       let fields = users.map(user=>{
           return {
               name:        user.name,
               messages:    user.messages
           }
       })
       return fields
   })
   .then(chats=>{
       res.json(chats)
   })
   .catch(err=>{
       console.log(err)
   })
}