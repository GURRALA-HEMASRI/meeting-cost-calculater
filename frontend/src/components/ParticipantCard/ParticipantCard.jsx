function ParticipantCard({

participant,
onDelete

}){

return(

<div

style={{

background:"#0f172a",

padding:"20px",

borderRadius:"16px",

border:
"1px solid #1e293b",

display:"flex",

justifyContent:
"space-between",

alignItems:"center"

}}

>

<div>

<h3>

{participant.name}

</h3>

<p>

{participant.role}

</p>

<p>

₹
{participant.costPerHour}
/hr

</p>

</div>

<button

onClick={onDelete}

style={{

background:"#ef4444",

color:"white",

border:"none",

padding:"10px 15px",

borderRadius:"10px"

}}

>

Remove

</button>

</div>

);

}

export default ParticipantCard;