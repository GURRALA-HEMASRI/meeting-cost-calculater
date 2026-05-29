import {
Bell,
LogOut,
UserCircle2
}
from "lucide-react";

import {
useNavigate
}
from "react-router-dom";

function Navbar(){

const navigate =
useNavigate();

const logout = ()=>{

localStorage.removeItem(
"token"
);

navigate("/");

};

return(

<div

style={{

height:"70px",

background:"#0f172a",

display:"flex",

alignItems:"center",

justifyContent:"space-between",

padding:"0 30px",

borderBottom:
"1px solid #1e293b"

}}

>

<h2>
Meeting Cost Calculator
</h2>

<div

style={{

display:"flex",

alignItems:"center",

gap:"20px"

}}

>

<Bell/>

<UserCircle2/>

<LogOut

style={{
cursor:"pointer"
}}

onClick={logout}

/>

</div>

</div>

);

}

export default Navbar;