const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

	bookingID:{
		type: Number,
		required: true
	},
	booker_name:{
		type: String,
		required:true
	},
	booker_surname:{
		type: String,
		required: true
	},
	booker_number:{
		type: String,
		required:true
	},
	booker_email:{
		type: String,
		required:true
	},
    bookedAt:{
        type:String,
        default:"N/A"
    }
})

module.exports = mongoose.model("Booking", bookingSchema);