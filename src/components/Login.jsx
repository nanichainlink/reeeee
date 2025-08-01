import React, { useEffect, useRef, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginApiObligatorio } from '../services/login';
import { useNavigate, NavLink, Navigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();



    useEffect(() => {
        let localStorage = window.localStorage;
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("token");
        if (id && token) {
            navigate("/");
        }

    }, [])




    const usuarioRef = useRef()
    const passwordRef = useRef()
    const submitRef = useRef()


    const handleForm = () => {
        const usuario = usuarioRef.current.value
        const password = passwordRef.current.value

        submitRef.current.disabled = !(usuario && password);

        console.log('entro en handleform')
    }


    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const usuario = usuarioRef.current.value
            const password = passwordRef.current.value

            const resultado = await loginApiObligatorio(usuario, password)

            console.log('resultado', resultado)

            let localStorage = window.localStorage;
            localStorage.setItem("id", resultado.id);
            localStorage.setItem("token", resultado.token);

            // setLogueado(true)


            navigate("/");


        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <Form onChange={handleForm} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control ref={usuarioRef} type="text" placeholder="Usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" ref={submitRef} disabled >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login



