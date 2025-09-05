import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Home from '../page/home'

const AppLayout = () => {
    return (
        <div className='bg-[#121212] min-h-screen text-white'>
            <div className='container px-6 py-4  mx-auto'>
                <Header></Header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    )
}

export default AppLayout