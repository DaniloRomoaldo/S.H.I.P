import {Route, Routes} from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"

export default function Router (){
    return(
        <>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}