const User = require('../models/User')

const Booking = require('../models/Booking')


exports.getChats = (req, res, next)=>{
    console.log(req.session)
    User.find()
    .then(users=>{
    let fields = users.filter(user=>user.name != "admin").map(user=>{
        return{name: user.name, messages:user.messages, userID:user._id}
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

exports.getdetails = (req, res, next)=>{
    console.log(req.body)
    Booking.findOne({bookingID:req.body.id})
    .then(booking=>{
        console.log(booking)
    res.json({
        name:       booking.booker_name,
        surname:    booking.booker_surname,
        phone:      booking.booker_number,
        timestamp:  booking.bookedAt,
        email:      booking.booker_email
        })
    })
    .catch(err=>{
         console.log(err)
    })
}
exports.postMessage = (req, res, next)=>{
    console.log(req.body)
    User.findById(req.body.receiverID)
    .then(user=>{
        user.answers.push(req.body.content);
        user.save(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
   })
}

