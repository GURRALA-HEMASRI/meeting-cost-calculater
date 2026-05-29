const Meeting =
require("../models/Meeting");

exports.getAnalytics =
async (
req,
res
)=>{

try{

const meetings =
await Meeting.find();

const totalMeetings =
meetings.length;

const totalCost =
meetings.reduce(
(sum,meeting)=>
sum + meeting.cost,
0
);

const avgCost =

totalMeetings > 0
?
totalCost /
totalMeetings
:
0;

const totalParticipants =
meetings.reduce(
(sum,meeting)=>
sum + meeting.participants,
0
);

res.json({

totalMeetings,

totalCost,

avgCost,

totalParticipants,

meetings

});

}
catch(error){

res.status(500).json({

message:
error.message

});

}

};