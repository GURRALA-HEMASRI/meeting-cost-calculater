import {
useEffect,
useState
}
from "react";

import {

ResponsiveContainer,

BarChart,
Bar,

XAxis,
YAxis,

Tooltip,
CartesianGrid

}
from "recharts";

import {
getMeetings
}
from "../../services/meetingService";

function AnalyticsChart(){

const [
chartData,
setChartData
] =
useState([]);

useEffect(()=>{

loadChart();

},[]);

const loadChart =
async()=>{

try{

const meetings =
await getMeetings();

const formattedData =

meetings.map(
(meeting)=>({

name:
meeting.title,

cost:
meeting.cost

})
);

setChartData(
formattedData
);

}
catch(error){

console.log(
error
);

}

};

return(

<div

style={{

background:"#0f172a",

padding:"25px",

borderRadius:"20px",

border:
"1px solid #1e293b",

height:"450px"

}}

>

<h2
style={{
marginBottom:"20px"
}}
>

Meeting Cost Analysis

</h2>

<ResponsiveContainer>

<BarChart
data={chartData}
>

<CartesianGrid
strokeDasharray="3 3"
/>

<XAxis
dataKey="name"
/>

<YAxis/>

<Tooltip/>

<Bar

dataKey="cost"

fill="#3b82f6"

/>

</BarChart>

</ResponsiveContainer>

</div>

);

}

export default AnalyticsChart;