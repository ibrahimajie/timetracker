import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import axios from 'axios';

import Add from './Add';
import Dbtt from './Dbtt';
import Filter from './Filter';
// import Edit from './Edit';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="report" element={<Report />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <Navbar bg="success">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="logo32.png"
                            alt="Time Tracker Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand as={Link} to="/report">
                        <img
                            src="report32.png"
                            alt="Report Logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </>
    );
}

function Home() {
    
    const [timer, setTimer] = useState<any>([]);
  
    useEffect(() => {      
        const getTimer = () => {
            axios.get("http://localhost:5000/timer").then((res) => {
                setTimer(res.data);
            });
        };
        getTimer();
    }, [timer]);

    return (
        <>
            <h2>Home</h2>
            <Add timers={timer} setTimers={setTimer} />
            <br />
            <Dbtt />
        </>
    );
}

function Report() {
    return (
        <>
            <h2>Report</h2>
            <Filter />
        </>
    );
}