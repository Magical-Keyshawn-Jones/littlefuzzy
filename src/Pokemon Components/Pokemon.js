import { useEffect } from "react";
import axios from "axios";

// Pokemon api 'https://pokeapi.co/api/v2/pokemon/'

export function Pokemon () {

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res=> console.log(res))
        .catch(err=> console.log('error!', err))
    },[])    

    return (
        <div className='pokemonBox'>
                <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1>
        </div>   
    )
}
