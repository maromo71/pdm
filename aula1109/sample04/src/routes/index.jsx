import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import FrontEndPage from "../pages/FrontEndPage"
import BackEndPage from "../pages/BackEndPage"

export default function MyRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/front-end" element={<FrontEndPage />} />
                <Route path="/back-end" element={<BackEndPage />} />
            </Routes>
        </BrowserRouter>
    )
}