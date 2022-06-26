import React, { useEffect, useState } from 'react'
import Personaje from './Personaje';
// useEffect permite ejecutar código cuando el componente es creado
// useState son, de algún modo, las variables de React

function ListPersonajes() {

    // Esto me va a almacenar los personajes, en un arreglo
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        async function showData() {

            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            // console.log(data.results);

            // Esta función me permite guardar los datos del response dentro de la variable
            setPersonajes(data.results)
            // Una vez tenga el resultado de mi petición dentro de la variable de React, ya puedo renderizarlo 
        }

        showData()
    }, []);

    return (

        personajes.map(pj => {
            return (
                //No es el componente en si mismo quien debe tener el key, 
                // sino donde se está utilizando dicho componente

                <Personaje pj={pj} key={pj.id} />
            )
        })


    )
}

export default ListPersonajes