const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const spotSchema = new Schema({

	data: {
		spots:[]
	}

})

module.exports = mongoose.model("Schedule", spotSchema);