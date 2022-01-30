import React from 'react';
import { useContador } from '../../custom/useContador';

export const ContadorConCustomHook = () => {

    const { state, increment, decrement, reset } = useContador(100);
    
    return (
        <>
            <h1>Contador con Custom Hook: {state}</h1>
            <hr />

            <button className="btn btn-primary" onClick={() => increment(2)}>INCREMENTAR</button>

            <button className="btn btn-primary" onClick={reset}>RESETEAR</button>

            <button className="btn btn-primary" onClick={() => decrement(2)}>DECREMENTAR</button>
        </>
    )
}