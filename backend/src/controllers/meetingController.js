const Meeting =
require("../models/Meeting");

exports.getMeetings =
async(
req,
res
)=>{

try{

const meetings =
await Meeting.find()
.sort({
createdAt:-1
});

res.json(
meetings
);

}
catch(error){

res.status(500)
.json(error);

}

};

exports.createMeeting =
async(
req,
res
)=>{

try{

const meeting =
await Meeting.create(
req.body
);

res.status(201)
.json(meeting);

}
catch(error){

res.status(500)
.json(error);

}

};

exports.deleteMeeting =
async(
req,
res
)=>{

try{

await Meeting.findByIdAndDelete(
req.params.id
);

res.json({

message:
"Meeting Deleted"

});

}
catch(error){

res.status(500)
.json(error);

}

};