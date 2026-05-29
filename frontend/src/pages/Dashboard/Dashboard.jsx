import {
useEffect,
useState
}
from "react";

import MainLayout
from "../../layouts/MainLayout";

import CostCard
from "../../components/CostCard/CostCard";

import AnalyticsChart
from "../../components/Analytics/AnalyticsChart";

import {
getAnalytics
}
from "../../services/analyticsService";

function Dashboard(){

const [
stats,
setStats
] =
useState(null);

const [
loading,
setLoading
] =
useState(true);

useEffect(()=>{

loadDashboard();

},[]);

const loadDashboard =
async()=>{

try{

const data =
await getAnalytics();

setStats(
data
);

}
catch(error){

console.log(
error
);

}
finally{

setLoading(
false
);

}

};

if(loading){

return(

<MainLayout>

<h2>

Loading Dashboard...

</h2>

</MainLayout>

);

}

return(

<MainLayout>

<h1

style={{

fontSize:"36px",

marginBottom:"25px"

}}

>

Dashboard

</h1>

<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(4,1fr)",

gap:"20px",

marginBottom:"25px"

}}

>

<CostCard

title=
"Total Meetings"

value=
{
stats?.totalMeetings || 0
}

color=
"#60a5fa"

/>

<CostCard

title=
"Money Spent"

value=
{
`₹${stats?.totalCost || 0}`
}

color=
"#ef4444"

/>

<CostCard

title=
"Average Cost"

value=
{
`₹${Number(
stats?.avgCost || 0
).toFixed(2)}`
}

color=
"#facc15"

/>

<CostCard

title=
"Participants"

value=
{
stats?.totalParticipants || 0
}

color=
"#10b981"

/>

</div>

<div

style={{

display:"grid",

gridTemplateColumns:
"repeat(3,1fr)",

gap:"20px",

marginBottom:"25px"

}}

>

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

Total Meetings

</p>

<h2
style={{
fontSize:"40px",
color:"#60a5fa"
}}
>

{
stats?.totalMeetings || 0
}

</h2>

</div>

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

Total Participants

</p>

<h2
style={{
fontSize:"40px",
color:"#10b981"
}}
>

{
stats?.totalParticipants || 0
}

</h2>

</div>

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

Average Meeting Cost

</p>

<h2
style={{
fontSize:"40px",
color:"#facc15"
}}
>

₹
{
Number(
stats?.avgCost || 0
).toFixed(0)
}

</h2>

</div>

</div>

<AnalyticsChart/>

</MainLayout>

);

}

export default Dashboard;