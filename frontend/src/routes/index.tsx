import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home"
import { Creditos } from "../pages/Creditos";
import { Adicionar } from "../pages/Adicionar";
import { Visualizar } from "../pages/Visualizar";


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creditos" element={<Creditos />} />
            <Route path="/adicionar" element={<Adicionar />} />
            <Route path="/visualizar" element={<Visualizar />} />
        </Routes>
    )
}