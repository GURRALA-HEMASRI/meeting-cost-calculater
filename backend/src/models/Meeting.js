const mongoose =
require("mongoose");

const meetingSchema =
new mongoose.Schema({

title:{
type:String
},

date:{
type:String
},

participants:{
type:Number
},

cost:{
type:Number
}

},
{
timestamps:true
}
);

module.exports =
mongoose.model(
"Meeting",
meetingSchema
);