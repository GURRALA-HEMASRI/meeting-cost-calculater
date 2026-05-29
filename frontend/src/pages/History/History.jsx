import {
useState,
useEffect
}
from "react";

import MainLayout
from "../../layouts/MainLayout";

import HistoryTable
from "../../components/HistoryTable/HistoryTable";

import {
getMeetings
}
from "../../services/meetingService";

import {
exportCSV
}
from "../../utils/exportCSV";

function History(){

const [
meetings,
setMeetings
] =
useState([]);

const [
search,
setSearch
] =
useState("");

useEffect(()=>{

loadMeetings();

},[]);

const loadMeetings =
async()=>{

try{

const data =
await getMeetings();

setMeetings(
data
);

}
catch{

console.log(
"Error loading meetings"
);

}

};

const filteredMeetings =

meetings.filter(
(meeting)=>

meeting.title

.toLowerCase()

.includes(

search
.toLowerCase()

)

);

return(

<MainLayout>

<h1

style={{

fontSize:"36px",

marginBottom:"20px"

}}

>

Meeting History

</h1>

<div

style={{

display:"flex",

gap:"15px",

marginBottom:"20px"

}}

>

<input

placeholder=
"Search Meetings"

value={search}

onChange={(e)=>
setSearch(
e.target.value
)
}

className=
"glass-input"

style={{
flex:1
}}

/>

<button

onClick={()=>
exportCSV(
filteredMeetings
)
}

className=
"glass-btn"

style={{
width:"220px"
}}

>

Export CSV

</button>

</div>

<HistoryTable

meetings={
filteredMeetings
}

/>

</MainLayout>

);

}

export default History;