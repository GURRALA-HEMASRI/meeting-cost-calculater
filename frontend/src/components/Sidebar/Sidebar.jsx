import {
Link,
useLocation
}
from "react-router-dom";

function Sidebar(){

const location =
useLocation();

const menu = [

{
name:"Dashboard",
path:"/dashboard"
},

{
name:"Calculator",
path:"/calculator"
},

{
name:"History",
path:"/history"
},

{
name:"Analytics",
path:"/analytics"
}

];

return(

<div

style={{

width:"250px",

background:"#0f172a",

padding:"25px",

borderRight:
"1px solid #1e293b"

}}

>

<h1>

MCC

</h1>

<div
style={{
marginTop:"30px"
}}
>

{

menu.map(
(item)=>{

const active =

location.pathname ===
item.path;

return(

<Link

key={item.path}

to={item.path}

>

<div

style={{

padding:"12px",

marginBottom:"10px",

borderRadius:"12px",

background:

active
?
"#2563eb"
:
"transparent"

}}

>

{item.name}

</div>

</Link>

);

}
)

}

</div>

</div>

);

}

export default Sidebar;