import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Root from './Pages/Root'
import Auth from './Pages/Auth'
import Link from './Pages/Link'
import Success from './Pages/Success'
import Registration from './Pages/Registration'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/authentication' element={<Auth />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/link' element={<Link />} />
            <Route path='/success' element={<Success />} />
        </Routes>
    </BrowserRouter>
)
