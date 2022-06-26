import React from 'react'

function Personaje({ pj }) {

    let dotColor;
    if (pj.status === "Alive") {

        dotColor = 'green'
    } else if (pj.status === "unknown") {
        dotColor = 'yellow'

    } else {
        dotColor = 'red'

    }

    return (

        <div className='py-5 px-2'>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-md w-full" src={pj.image} alt={pj.name} />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pj.name}</h5>
                    <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">Origen: {pj.origin.name}</p>
                    <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">Localización: {pj.location.name}</p>
                    <div className='flex space-x-5'>
                        <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">Estado: {pj.status}</p>
                        <span className={`text-${dotColor}-500`}>●</span>
                    </div>
                    <p className="mb-3 font-normal text-base text-gray-700 dark:text-gray-400">Especie: {pj.species}</p>
                </div>
            </div>
        </div >
    )
}

export default Personaje