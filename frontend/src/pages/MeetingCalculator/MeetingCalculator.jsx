import {
useState
}
from "react";

import MainLayout
from "../../layouts/MainLayout";

import MeetingForm
from "../../components/MeetingForm/MeetingForm";

import ParticipantCard
from "../../components/ParticipantCard/ParticipantCard";

import AIRecommendation
from "../../components/AIRecommendation/AIRecommendation";

import {
saveMeeting
}
from "../../services/meetingService";

function MeetingCalculator(){

const [
participants,
setParticipants
] =
useState([]);

const [
duration,
setDuration
] =
useState(60);

const [
agenda,
setAgenda
] =
useState("");

const addParticipant =
(participant)=>{

setParticipants([

...participants,

participant

]);

};

const removeParticipant =
(index)=>{

setParticipants(

participants.filter(
(_,i)=>
i !== index
)

);

};

const totalHourlyCost =
participants.reduce(

(sum,p)=>

sum +
p.costPerHour,

0

);

const totalCost =

(
totalHourlyCost
/
60
)

*
duration;

const handleSave =
async()=>{

try{

await saveMeeting({

title:
`Meeting-${Date.now()}`,

date:
new Date()
.toLocaleDateString(),

participants:
participants.length,

cost:
Number(
totalCost.toFixed(2)
),

duration,

agenda

});

alert(
"Meeting Saved"
);

}
catch(error){

console.log(
error
);

alert(
"Save Failed"
);

}

};

return(

<MainLayout>

<h1

style={{

fontSize:"36px",

marginBottom:"20px"

}}

>

Meeting Calculator

</h1>

<div

style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr 1fr",

gap:"20px"

}}

>

{/* LEFT SECTION */}

<div>

<MeetingForm
onAdd={
addParticipant
}
/>

<br/>

<div

style={{

background:"#0f172a",

padding:"20px",

borderRadius:"20px"

}}

>

<h3>

Duration (Minutes)

</h3>

<br/>

<input

type="number"

value={duration}

onChange={(e)=>
setDuration(
Number(
e.target.value
)
)
}

className="glass-input"

/>

</div>

<br/>

<div

style={{

background:"#0f172a",

padding:"20px",

borderRadius:"20px"

}}

>

<h3>

Meeting Agenda

</h3>

<br/>

<textarea

value={agenda}

onChange={(e)=>
setAgenda(
e.target.value
)
}

placeholder=
"Example: Weekly status update, Sprint planning, Production issue discussion..."

style={{

width:"100%",

height:"140px",

padding:"12px",

borderRadius:"12px",

background:"#1e293b",

color:"white",

border:"none",

resize:"none"

}}

/>

</div>

</div>

{/* PARTICIPANTS */}

<div>

{

participants.map(
(
participant,
index
)=>(

<div

key={index}

style={{
marginBottom:"10px"
}}

>

<ParticipantCard

participant={
participant
}

onDelete={()=>
removeParticipant(
index
)
}

/>

</div>

)
)

}

</div>

{/* COST + AI */}

<div>

<div

style={{

background:"#0f172a",

padding:"25px",

borderRadius:"20px",

border:
"1px solid #1e293b",

marginBottom:"20px"

}}

>

<h2>

Live Cost

</h2>

<br/>

<h1

style={{

fontSize:"48px",

color:"#4ade80"

}}

>

₹
{
totalCost.toFixed(2)
}

</h1>

<p

style={{

marginTop:"10px",

color:"#94a3b8"

}}

>

Participants:
{" "}
{
participants.length
}

</p>

<p

style={{

color:"#94a3b8"

}}

>

Duration:
{" "}
{
duration
}
 mins

</p>

</div>

<AIRecommendation

cost={
totalCost
}

attendees={
participants.length
}

duration={
duration
}

agenda={
agenda
}

/>

<button

onClick={
handleSave
}

className="glass-btn"

style={{
marginTop:"20px"
}}

>

Save Meeting

</button>

</div>

</div>

</MainLayout>

);

}

export default MeetingCalculator;