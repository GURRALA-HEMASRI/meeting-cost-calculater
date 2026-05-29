function CostCard({

title,
value,
color

}){

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

<p
style={{
color:"#94a3b8"
}}
>
{title}
</p>

<h2

style={{

fontSize:"32px",

fontWeight:"700",

marginTop:"10px",

color

}}

>

{value}

</h2>

</div>

);

}

export default CostCard;