import { Link } from 'react-router-dom';

export function PokemonShowCase (props) {

    const { pokemon } = props

    console.log(pokemon)

    return ( 

        <div className='pokemonBox'>
                {/* <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1> */}
                <div className='pokemonImages'>
                    <Link to={`/pokemon/${0}`}>
                        <div>
                            {/* <img src={Bulbasaur} alt=''/> */}
                        </div>
                    </Link>
                    <Link to={`/pokemon/${3}`}>
                        <div>
                            {/* <img src={Charmander} alt=''/> */}
                        </div>
                    </Link>
                    <Link to={`/pokemon/${1}`}>
                        <div>
                            {/* <img src={Ivysaur} alt=''/> */}
                        </div>
                    </Link>
                </div>
        </div>   
    )
}