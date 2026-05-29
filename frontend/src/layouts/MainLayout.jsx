import Navbar
from "../components/Navbar/Navbar";

import Sidebar
from "../components/Sidebar/Sidebar";

function MainLayout({
children
}){

return(

<div
style={{
display:"flex",
minHeight:"100vh"
}}
>

<Sidebar/>

<div
style={{
flex:1
}}
>

<Navbar/>

<div
className="page"
>

{children}

</div>

</div>

</div>

);

}

export default MainLayout;