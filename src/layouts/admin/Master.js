import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import routes from '../../routes/routes';

export default function Master() {
    return (
        <>
            <div className='sb-nav-fixed'>
                <Navbar />

                <div id="layoutSidenav">

                    <div id="layoutSidenav_nav">
                        <Sidebar />
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <Routes>
                                {routes.map((route, id) => {
                                    return (
                                        route.component && (
                                            <Route
                                                key={id}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={ (props) => (
                                                    < route.component {...props} />
                                                )}
                                            />
                                        )
                                    )
                                })}
                                <Navigate path="admin" to="/admin/dashboard" />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </div>

            </div>
        </>
    )
}

