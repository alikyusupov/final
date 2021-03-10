const User = require('../models/User')

const Message = require('../models/Message')

const Schedule = require('../models/Schedule')

const bcrypt = require("bcryptjs");

exports.postSignup = (req, res, next)=>{
    User.findOne({ email: req.body.email })
    .then(userDoc => {
      if (userDoc) {
        return res.json({message:"Email already exists"});
      }
      return bcrypt.hash(req.body.password,12)
      .then(hashedPassword => {
      const user = new User({
        name: req.body.name,
        email: req.body.mail,
        password: hashedPassword,
      });
      return user.save();
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
			return res.json({message:"Неверный логин"})
		}
		bcrypt.compare(req.body.password, user.password)
		.then((doMatch)=>{
			if(doMatch && req.body.mail != "admin@admin.ru"){
        console.log("user")
        //global.isAuth = true;  понял что это плохая идея
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
              adminStatus: false,
              sessionID:  req.session.id,
              userID:     req.session.user._id,
              username:   req.session.user.name
            })
        })
      }
      else if(doMatch && req.body.mail == "admin@admin.ru"){
        console.log("master")
        //global.isAdmin = true;
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
          status:false
        })
      } 
		})
		.catch(err => console.log(err));
	})
}

exports.postLogout = (req, res, next)=>{
    global.isAuth = false;
    global.isAdmin = false;
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
  console.log(req.session)
  Message.find({sender:req.body.userID})
  .then(messages=>{
      res.json(messages)
  })
  .catch(err=>{
      console.log(err)
  })
}

