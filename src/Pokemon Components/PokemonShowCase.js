import { Link } from 'react-router-dom';
import axios from 'axios';
import Ivysaur from '../Images/Pokemon/ivysaur.png';
import Charmander from '../Images/Pokemon/charmander.png';
import Bulbasaur from '../Images/Pokemon/Bulbasaur.png';

export function PokemonShowCase (props) {

    const pokemonList = [];

    axios.get('https://pokeapi.co/api/v2/pokemon/')
       .then(res=>{
           const pokemonListApi = res.data.results
           console.log(pokemonList)
           pokemonListApi.forEach(pokemon=> pokemonList.push(pokemon))
       })
       .catch(err=>console.log('error!',err))
    return ( 

        <div className='pokemonBox'>
                {/* <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1> */}
                <div className='pokemonImages'>
                    <Link to='/pokemon/something'>
                        <div>
                            <img src={Bulbasaur} alt=''/>
                        </div>
                    </Link>
                    <Link to='/pokemon/something'>
                        <div>
                            <img src={Charmander} alt=''/>
                        </div>
                    </Link>
                    <Link to='/pokemon/something'>
                        <div>
                            <img src={Ivysaur} alt=''/>
                        </div>
                    </Link>
                </div>
        </div>   
    )
}