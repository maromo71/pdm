import {BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../components/HomePage'
import FrontEndPage from '../components/FrontEndPage'
import BackEndPage from '../components/BackEndPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/front-end' element={<FrontEndPage />} />
                <Route path='/back-end' element={<BackEndPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default MyRoutes
