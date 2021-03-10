const User = require('../models/User')
exports.getChats = (req, res, next)=>{
    console.log(req.session)
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