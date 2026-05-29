function AIRecommendation({

cost,
attendees,
duration,
agenda

}){

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
"Too many attendees.";

}

if(duration > 60){

confidence -= 15;

savings +=
cost * 0.15;

recommendation =
"Reduce meeting duration.";

}

const text =
agenda.toLowerCase();

if(

text.includes(
"status update"
)

||

text.includes(
"weekly update"
)

||

text.includes(
"progress update"
)

){

confidence -= 25;

savings +=
cost * 0.25;

recommendation =
"Email or Slack may be enough.";

}

if(confidence < 50){

worthConducting =
"NO";

}

return(

<div

style={{

background:"#0f172a",

padding:"25px",

borderRadius:"20px",

border:
"1px solid #1e293b"

}}

>

<h2>

AI Recommendation

</h2>

<br/>

<p>

Worth Conducting:

<strong>

{" "}
{worthConducting}

</strong>

</p>

<br/>

<p>

Confidence:

<strong>

{" "}
{confidence}%

</strong>

</p>

<br/>

<p>

Potential Savings:

<strong>

{" "}

₹
{
Math.round(
savings
)
}

</strong>

</p>

<br/>

<p>

Recommendation:

<strong>

{" "}

{
recommendation
}

</strong>

</p>

</div>

);

}

export default AIRecommendation;