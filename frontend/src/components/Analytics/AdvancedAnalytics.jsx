import {
useEffect,
useState
}
from "react";

import {

ResponsiveContainer,

AreaChart,
Area,

PieChart,
Pie,
Cell,

XAxis,
YAxis,

Tooltip,
Legend

}
from "recharts";

import {
getMeetings
}
from "../../services/meetingService";

function AdvancedAnalytics(){

const [
areaData,
setAreaData
] =
useState([]);

const [
pieData,
setPieData
] =
useState([]);

useEffect(()=>{

loadData();

},[]);

const loadData =
async()=>{

try{

const meetings =
await getMeetings();

const chartData =

meetings.map(
(meeting,index)=>({

name:
`M${index+1}`,

cost:
meeting.cost

})
);

setAreaData(
chartData
);

const totalCost =
meetings.reduce(
(sum,m)=>
sum + m.cost,
0
);

const highCost =
meetings.filter(
m=>m.cost > 5000
).length;

const lowCost =
meetings.filter(
m=>m.cost <= 5000
).length;

setPieData([

{
name:
"High Cost",

value:
highCost
},

{
name:
"Low Cost",

value:
lowCost
}

]);

}
catch(error){

console.log(
error
);

}

};

const COLORS = [

"#ef4444",

"#10b981"

];

return(

<div

style={{

display:"grid",

gridTemplateColumns:
"1fr 1fr",

gap:"20px"

}}

>

{/* Area Chart */}

<div

style={{

background:"#0f172a",

padding:"20px",

borderRadius:"20px",

height:"350px"

}}

>

<h2>

Cost Trend

</h2>

<br/>

<ResponsiveContainer>

<AreaChart
data={areaData}
>

<XAxis
dataKey="name"
/>

<YAxis/>

<Tooltip/>

<Area

type="monotone"

dataKey="cost"

stroke="#3b82f6"

fill="#3b82f6"

/>

</AreaChart>

</ResponsiveContainer>

</div>

{/* Pie Chart */}

<div

style={{

background:"#0f172a",

padding:"20px",

borderRadius:"20px",

height:"350px"

}}

>

<h2>

Meeting Distribution

</h2>

<br/>

<ResponsiveContainer>

<PieChart>

<Pie

data={pieData}

dataKey="value"

nameKey="name"

outerRadius={120}

label

>

{

pieData.map(
(entry,index)=>(

<Cell

key={index}

fill={
COLORS[index]
}

/>

)
)

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

);

}

export default AdvancedAnalytics;