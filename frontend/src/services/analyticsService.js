import axios from "axios";

const API =
`${import.meta.env.VITE_API_URL}/analytics`;

export const getAnalytics =
async()=>{

const response =
await axios.get(
API
);

return response.data;

};