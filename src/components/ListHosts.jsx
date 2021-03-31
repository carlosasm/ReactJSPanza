import React, {useState, useEffect} from 'react'



const ListHosts = () => {
    const [nombre, setNombre] = useState('Pedro')
    useEffect( () => {
        setTimeout( () => { 
            setNombre('Manuel')
        }, 2000)
    })


    return (
        <div>
        
      

            <div>
                <h1>Inicio</h1>
                {nombre}
            </div>

        </div>
    )
}

export default ListHosts
