exports.getRecommendation = (
cost,
attendees,
duration,
agenda
)=>{

let confidence = 100;

let savings = 0;

let recommendation =
"Meeting is justified";

let worthConducting =
"YES";

if(cost > 10000){

confidence -= 25;

savings +=
cost * 0.30;

recommendation =
"Meeting cost is high. Reduce attendees.";

}

if(attendees > 8){

confidence -= 20;

savings +=
cost * 0.20;

recommendation =
"Too many attendees for this discussion.";

}

if(duration > 60){

confidence -= 15;

savings +=
cost * 0.15;

recommendation =
"Meeting duration seems longer than necessary.";

}

const agendaText =
agenda
?
agenda.toLowerCase()
:
"";

if(

agendaText.includes(
"status update"
)

||

agendaText.includes(
"weekly update"
)

||

agendaText.includes(
"progress update"
)

){

confidence -= 25;

savings +=
cost * 0.25;

recommendation =
"Consider using email or Slack instead.";

}

if(confidence < 50){

worthConducting =
"NO";

}

return {

worthConducting,

confidence:
Math.max(
confidence,
0
),

potentialSavings:
Math.round(
savings
),

recommendation

};

};