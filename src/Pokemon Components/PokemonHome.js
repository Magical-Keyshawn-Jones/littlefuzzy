import { Route, Switch, useParams} from 'react-router-dom';
import { PokemonShowCase } from "./PokemonShowcase";
import PokemonProfile  from "./PokemonProfile";

export function Pokemon (props) {
    // Pokemon api 'https://pokeapi.co/api/v2/pokemon/'

    const { pokemon } = props
    const { pokemonId } = useParams

    return ( 
        <div className='pokemonBox'>
            <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1>
            <Switch>
                <Route  path={`/pokemon/:${pokemonId}`}>
                    <PokemonProfile/>
                </Route>
                <Route path='/pokemon'>
                    <PokemonShowCase pokemon={pokemon} />
                </Route>
            </Switch>
        </div>   
    )
}
