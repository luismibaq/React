import React, { useEffect, useState } from 'react';
import { Mensaje } from './Mensaje';
export const Formulario = () => {

    const [formState, setFormState] = useState({
        nombre: '',
        email: ''
    });

    const { nombre, email } = formState;

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        console.log('Creación del componente por primera vez: useEffect ejecutado...');
    }, [])

    useEffect(() => {
        console.log('formState cambió...');
    }, [formState])

    useEffect(() => {
        console.log('email cambió...');
    }, [email])

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            
            {(nombre === 'Natalia') && <Mensaje />}
        </>
    )
}