import { Routes, Route } from 'react-router-dom';
import { PokemonShowCase } from "./PokemonShowcase";
import PokemonProfile  from "./PokemonProfile";

export function Pokemon (props) {
    // Pokemon api 'https://pokeapi.co/api/v2/pokemon/'

    const { pokemon } = props

    console.log(pokemon)

    return ( 
        <div className='pokemonBox'>

            <Routes>
                <Route path='/pokemon/:pokemonId' element={<PokemonProfile pokemon={pokemon} />} />
                <Route path='/' element={<PokemonShowCase pokemon={pokemon} />} />
            </Routes>
            {/* <Switch>
                <Route  path='/pokemon/:pokemonId'>
                    <PokemonProfile pokemon={pokemon} />
                </Route>
                <Route path='/pokemon'>
                    <PokemonShowCase pokemon={pokemon} />
                </Route>
            </Switch> */}
        </div>   
    )
}
