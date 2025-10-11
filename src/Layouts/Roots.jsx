import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
 import DelayedSuspense from '../Components/DelayedSuspense/DelayedSuspense';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main>
                <Suspense fallback={<DelayedSuspense delay={1500} />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Roots;