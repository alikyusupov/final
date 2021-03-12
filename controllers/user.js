const User = require('../models/User')

const Message = require('../models/Message')

const Schedule = require('../models/Schedule')

const Booking = require('../models/Booking')

const bcrypt = require("bcryptjs");

exports.postSignup = (req, res, next)=>{
    User.findOne({ email: req.body.email })
    .then(userDoc => {
      if (userDoc) {
        console.log("Email inuse")
        return res.json({
          message:"Email already exists",
          emailinuse:true
        });
      }
      return bcrypt.hash(req.body.password,12)
      .then(hashedPassword => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      user.save(err=>{
        if(err)
          console.log(err)
          return res.json({
            message:"Успешная регистрация",
            emailinuse:false
          });
      });
    })
    .catch(err => {
      console.log(err);
    });
})
}

exports.postLogin = (req, res, next)=>{
    User.findOne({email: req.body.mail})
	  .then(user=>{
		if(!user){
			return res.json({
        loginerror:true
      })
		}
		bcrypt.compare(req.body.password, user.password)
		.then((doMatch)=>{
			if(doMatch && req.body.mail != "admin@admin.ru"){
        console.log("user")
        req.session.isAdmin = false;
				req.session.isLoggedIn = true;
      	req.session.user = user;
      	req.session.save(err => {
          if(err){
            console.log(err);
          }
          console.log(req.session)
            res.json({
              status:true,
              adminStatus: false,
              sessionID:  req.session.id,
              userID:     req.session.user._id,
              username:   req.session.user.name
            })
        })
      }
      else if(doMatch && req.body.mail == "admin@admin.ru"){
        console.log("master")
        req.session.isAdmin = true;
        req.session.isLoggedIn = true;
        req.session.user = user;
      	req.session.save(err => {
        if(err){
          console.log(err);
        }
          console.log(req.session)
          res.json({
            status:true,
            adminStatus: true,
            sessionID:  req.session.id,
            userID:     req.session.user._id,
            username:   req.session.user.name
          })
			  })
      }
      else{
        res.json({
          passworderror:true
        })
      } 
		})
		.catch(err => console.log(err));
	})
}

exports.postLogout = (req, res, next)=>{
    req.session.destroy();
    res.json({
      status:false
    })
  }

exports.getSchedule = (req, res, next)=>{
    Schedule.find()
    .then(schedules=>{
        res.json(schedules[2].data.spots)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getClientChat =  (req, res, next)=>{
  Message.find({sender:req.body.userID})
  .then(messages=>{
      res.json(messages)
  })
  .catch(err=>{
      console.log(err)
  })
}

exports.postBook = (req, res, next)=>{
    const date = new Date();
    const localized = date.toLocaleString();
    const booking = new Booking({
    bookingID:      req.body.slot,
    booker_name:    req.body.firstname,
    booker_surname: req.body.lastname,
    booker_email:   req.body.email,
    booker_number:  req.body.phonenumber,
    bookedAt:       localized
    })
    booking.save(err=>{
      console.log(err)
    })
    Schedule.find()
    .then(schedules=>{
      const sch = schedules[2]
      sch.reserve(req.body.slot);
    })
    .then(()=>{
      res.json({
        slot:req.body.slot
      })
    })
    .catch(err=>{
      console.log(err);
    })
}

exports.getAnswers = (req, res, next)=>{
  User.findById(req.body.userID)
  .then(user=>{
    res.json(user.answers)
  })
  .catch(err=>{
    console.log(err);
  })
}


