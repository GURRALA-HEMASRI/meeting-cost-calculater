import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/meetings`;

export const getMeetings =
async()=>{

const response =
await axios.get(
API
);

return response.data;

};

export const saveMeeting =
async(meeting)=>{

const response =
await axios.post(
API,
meeting
);

return response.data;

};

export const deleteMeeting =
async(id)=>{

const response =
await axios.delete(
`${API}/${id}`
);

return response.data;

};