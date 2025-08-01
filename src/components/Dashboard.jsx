import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import CircularIndeterminate from './CircularIndeterminate';


const Dashboard = () => {

    const navigate = useNavigate();
    const [logueado, setLogueado] = useState(false)


    useEffect(() => {
        loadData()
    }, [])


    const loadData = async () => {
        let localStorage = window.localStorage;
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        // Sleep function to delay execution
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(2000); // Wait for 2 seconds 
        if (!id || !token) {
            navigate("/login");
        } else {
            setLogueado(true);
        }
    };

    return (
        <>
            {logueado ? <Outlet></Outlet> : <CircularIndeterminate />}
        </>
    )
}

export default Dashboard