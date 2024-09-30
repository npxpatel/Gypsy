import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";


const AppRoutes = () => {

    return (
     <Routes>
        <Route  path='/' element = { <Home /> } />
        <Route  path = '/sign-up' element = { <Signup/> } />
     </Routes>
    )
}

export default AppRoutes;