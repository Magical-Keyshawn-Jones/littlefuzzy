import { Routes, Route } from 'react-router-dom';
import { PokemonShowCase } from "./PokemonShowcase";
import PokemonProfile  from "./PokemonProfile";
import { pokemonImages } from './ExportPokemonImage';
import './PokemonStyles.css'
export function Pokemon (props) {
    // Pokemon api 'https://pokeapi.co/api/v2/pokemon/'

    const { pokemon, loading, } = props

    return ( 
        <div className='pokemonBox'>
            <Routes>
                <Route path='/:pokemonId' element={<PokemonProfile 
                    pokemon={pokemon} 
                    loading={loading}
                    pokemonImages={pokemonImages} 
                    />} />
                <Route path='/' element={<PokemonShowCase
                    pokemon={pokemon} 
                    loading={loading} 
                    pokemonImages={pokemonImages}
                 />} />
            </Routes>
        </div>   
    )
}
