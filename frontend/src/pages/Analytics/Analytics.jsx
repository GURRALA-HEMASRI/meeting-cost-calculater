import {
useEffect,
useState
}
from "react";

import MainLayout
from "../../layouts/MainLayout";

import AnalyticsCard
from "../../components/Analytics/AnalyticsCard";

import AdvancedAnalytics
from "../../components/Analytics/AdvancedAnalytics";

import {
getAnalytics
}
from "../../services/analyticsService";

function Analytics(){

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

loadAnalytics();

},[]);

const loadAnalytics =
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

Loading Analytics...

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

Analytics Dashboard

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

<AnalyticsCard

title=
"Total Meetings"

value=
{
stats?.totalMeetings || 0
}

color=
"#3b82f6"

/>

<AnalyticsCard

title=
"Total Cost"

value=
{
`₹${stats?.totalCost || 0}`
}

color=
"#ef4444"

/>

<AnalyticsCard

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

<AnalyticsCard

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

<AdvancedAnalytics/>

</MainLayout>

);

}

export default Analytics;