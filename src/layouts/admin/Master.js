import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Master() {
    return (
        <>
            <div className='sb-nav-fixed'>
                <Navbar />
            </div>
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

            </div>
        </>
    )
}
