import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import './PokemonStyles.css'

function PokemonProfile (props) {
    const { pokemon, loading, pokemonImages } = props
    const { pokemonId } = useParams()
    
    return (
        <div onClick={()=>{}}>
            {loading === true ? <h1>Grabbing Best Pokemon...</h1> : (
                <div>
                    <h1 className='pokemonHeading'>Welcome To love That {pokemon[pokemonId].name}!!!</h1>

                    <div className="pokemonProfileImage">
                        <img  src={pokemonImages[pokemonId]} alt=''/>
                    </div>

                </div> 
            )}
            
        </div>
    )
}


export default connect(state => state)(PokemonProfile)