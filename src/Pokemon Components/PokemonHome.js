import { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { PokemonShowCase } from "./PokemonShowCase";

export function Pokemon () {
    // Pokemon api 'https://pokeapi.co/api/v2/pokemon/'

    return ( 
        <div className='pokemonBox'>
            <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1>
            <Switch>
                <Route  path='/pokemon/something'>
                    Wassup Kid
                </Route>
                <Route path='/pokemon'>
                    <PokemonShowCase/>
                </Route>
            </Switch>
        </div>   
    )
}
