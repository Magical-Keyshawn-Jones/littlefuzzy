import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import './PokemonStyles.css'

export function PokemonShowCase (props) {

    const { pokemon, loading, pokemonImages } = props

    function onClickHandler(){
        window.scrollTo({ top: 0 })
    }

    return ( 

        <div className='pokemonBox'>
                {/* <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1> */}
                <div className='pokemonShowcaseImage'>
                    {loading === true ? <h1>Loading!!!!</h1> : 
                        pokemon.map((pokemon, index)=>{
                            return (                    
                                <Link className='pokemonShowCaseLinkTo' onClick={()=>{onClickHandler()}} key={nanoid(10)} to={`/pokemon/${index}`}>
                                    <div>
                                        <img  src={pokemonImages[index]} alt=''/>
                                    </div>
                                </Link>)
                        })
                    }
                </div>
        </div>   
    )
}