import React, { useState } from 'react';
import { AgregaGenero } from './componentes/AgregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';

export const VideojuegosApp = () => {
    //Utilizamos el hook useState para inicializar la lista de generos de videojuegos.
    const [generos, setGeneros] = useState(['action']);
    //Función que nos permite cambiar el estado de la lista de géneros para agregar
    // nuevos géneros a la lista.
    const agregaGenero = () => {
        setGeneros(estadoActualGeneros => [...estadoActualGeneros, 'Nuevo Género']);
    }
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Gamebook</h1>
                    <p className="lead">¡Bienvenido a la página donde podrás consultar información de
                        videojuegos!</p>
                </div>
            </div>
            {/*
Creamos una propiedad 'setGeneros' al componente AgregaGenero y le pasamos como valor la
referencia de la función 'setGeneros' que obtuvimos en la desestructuración del useState
 */}
            <AgregaGenero setGeneros={setGeneros} />
            {/*Se eliminó el botón*/}
            {/*
Creamos la lista de géneros
 */}
            <ol className="list-group list-group-numbered">
                {
                    generos.map(genero => {
                        //Reemplazamos el elemento <li> por la llamda al componente ResultadoVideojuegos, pasando
                        // como parámetro el género. Se tiene que utilizar la propiedad key al igual que se hizo
                        // con el elemento <li> anteriormente
                        return <ResultadoVideojuegos
                            key={genero}
                            genero={genero}
                        />

                    })
                }
            </ol>
        </>
    )
}