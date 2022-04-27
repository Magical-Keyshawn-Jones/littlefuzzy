import { Link } from 'react-router-dom';
import Ivysaur from '../Images/Pokemon/ivysaur.png';
import Charmander from '../Images/Pokemon/charmander.png';
import Bulbasaur from '../Images/Pokemon/Bulbasaur.png';

export function PokemonShowCase (props) {

    const { pokemonInfo } = props

    return ( 

        <div className='pokemonBox'>
                {/* <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1> */}
                <div className='pokemonImages'>
                    <Link to={`/pokemon/${0}`}>
                        <div>
                            <img src={Bulbasaur} alt=''/>
                        </div>
                    </Link>
                    <Link to={`/pokemon/${3}`}>
                        <div>
                            <img src={Charmander} alt=''/>
                        </div>
                    </Link>
                    <Link to={`/pokemon/${1}`}>
                        <div>
                            <img src={Ivysaur} alt=''/>
                        </div>
                    </Link>
                </div>
        </div>   
    )
}