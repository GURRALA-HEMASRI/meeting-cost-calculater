import {
Routes,
Route,
Navigate
}
from "react-router-dom";

import Login
from "../pages/Login/Login";

import Register
from "../pages/Register/Register";

import Dashboard
from "../pages/Dashboard/Dashboard";

import MeetingCalculator
from "../pages/MeetingCalculator/MeetingCalculator";

import History
from "../pages/History/History";

import Analytics
from "../pages/Analytics/Analytics";

const ProtectedRoute =
({children})=>{

const token =
localStorage.getItem(
"token"
);

return token
? children
: <Navigate to="/"/>

};

function AppRoutes(){

return(

<Routes>

<Route
path="/"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

<Route

path="/calculator"

element={

<ProtectedRoute>

<MeetingCalculator/>

</ProtectedRoute>

}

/>

<Route

path="/history"

element={

<ProtectedRoute>

<History/>

</ProtectedRoute>

}

/>

<Route

path="/analytics"

element={

<ProtectedRoute>

<Analytics/>

</ProtectedRoute>

}

/>

<Route

path="*"

element={
<Navigate to="/"/>
}

/>

</Routes>

);

}

export default AppRoutes;