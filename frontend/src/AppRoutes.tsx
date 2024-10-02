import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Working from "./pages/RoleSelectionView";
import RoleSelectionView from "./pages/RoleSelectionView";


const AppRoutes = () => {

    return (
     <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path = '/auth' element = { <Auth/> } />
        <Route path = '/role-selection' element = { <RoleSelectionView />} />
        <Route path = '/working' element = { <Working /> } />
     </Routes>
    )
}

export default AppRoutes;