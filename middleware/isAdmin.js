module.exports = (req, res, next)=>{
	if(!req.session.isAdmin){
		return res.json({message:"Вы не Админ!"})
	}
	next()
}