require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const connectDB =
require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const meetingRoutes =
require("./routes/meetingRoutes");

const analyticsRoutes =
require("./routes/analyticsRoutes");

const app =
express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/meetings",
meetingRoutes
);

app.use(
"/api/analytics",
analyticsRoutes
);

app.get(
"/",
(req,res)=>{
res.send(
"Meeting Cost Calculator API Running"
);
}
);

app.listen(
process.env.PORT,
()=>{
console.log(
`Server Running On Port ${process.env.PORT}`
);
}
);