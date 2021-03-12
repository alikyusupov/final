const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spotSchema = new Schema({

	data: {
		spots:[]
	}

})


spotSchema.methods.reserve = function(id){
	console.log(id)

	const updatedSpots = [...this.data.spots];
	
	let coords = id.split("");

	if(coords.length===3){
		//coords = id.split("");//["1","0","0"]
		coords[0] = coords[0] + coords[1];
		coords.length = 2;
	}

	updatedSpots[parseFloat(coords[0])][parseFloat(coords[1])].slot = "reserved";
	
	const updatedData = {
		spots:updatedSpots
	};
	
	this.data = updatedData;
	
	this.save(err=>{
		if(err)
			console.log("Booking is failed!")
		console.log("Booking is done")
	});
	  
	
	}

module.exports = mongoose.model("Schedule", spotSchema);