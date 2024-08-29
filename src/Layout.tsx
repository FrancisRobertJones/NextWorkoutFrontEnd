import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background justify-center">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout