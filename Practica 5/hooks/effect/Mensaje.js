import React, { useEffect } from 'react';
export const Mensaje = () => {

    useEffect(() => {
            
        console.log('Componente montado...');

        const mouseMove = (e) => {
            const coordenadas = { x: e.x, y: e.y };
            console.log(coordenadas);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('Componente desmontado...');
        }
    }, []);
    return (
        <>
            <h3>Este es un mensaje...</h3>
        </>

    )
}