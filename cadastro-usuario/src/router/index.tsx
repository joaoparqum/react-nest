import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/home'
import { Form } from '../pages/form'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/form' element={<Form/>}/>

                <Route path='*' element={<Navigate to='/home' />}/>   
            </Routes>
        </BrowserRouter>
    )    
}