import React, { useState, useEffect }  from 'react';
import {InfoVideojuegos} from './InfoVideojuegos';

//Recibe como argumento el género que se va utilizar para hacer la búsqueda de los videojuegos
// utilizando el API de RAWG
export const ResultadoVideojuegos = ({ genero }) => {

    //Utilizamos useEffect para invocar la función getVideojuegos.
    useEffect(() => {
        getVideojuegos();
    }, []);
    //Creamos el estado del componente con useState
    const [infoJuegos, setInfoJuegos] = useState([]);
    //Invocamos el api de RAWG para obtener los videojuegos del género proporcionado en los parámetrs del
    // componente.
    const getVideojuegos = async () => {
        //URL del api de RAWG que validamos en postman
        const url = 'https://api.rawg.io/api/games?key=ed09efc5359f45178a750f528128f1c&genres=' + encodeURI(genero);
        console.log("Hola");
        //Utilizamos Fetch API para invocar la url.
        const respuesta = await fetch(url);
        //Recuperamos el JSON de la respuesta, el cual contiene la información de los videojuegos.
        const { results } = await respuesta.json();
        //Obtenemos solamente la información que vamos a necesitar del json de la respuesta.
        const juegos = results.map(juego => {
            return {
                id: juego.id,
                nombre: juego.name,
                imagen: juego.background_image,
                rating: juego.rating,
                metacritic: juego.metacritic
            }
        })
        console.log(juegos);
        //Invocamos el metodo setInfoJuegos que obtivimos con la desestructuración del hook useState
        setInfoJuegos(juegos);
    }

    return (
        <>
            <h3 className="card-title">{genero}
                <div className={"container d-flex flex-wrap align-items-center"}>
                    {/*  */}
                    {
                        infoJuegos.map((juego) => {
                                return (
                                    <InfoVideojuegos
                                        key={juego.id}
                                        juego={juego}
                                    />)
                            }
                        )}
                    {/**/}
                </div>
            </h3>
        </>
    )
}