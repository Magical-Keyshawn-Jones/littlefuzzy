import { useParams } from "react-router-dom"
import { connect } from "react-redux"

function PokemonProfile (props) {
    const { pokemon, loading } = props
    const { pokemonId } = useParams()
    console.log(pokemon[pokemonId])
    
    return (
        <div onClick={()=>{}}>
            {loading === true ? <h1>Grabbing Best Pokemon...</h1> : (
                <div>
                    <h1 className='pokemonHeading'>Welcome To Hate That {pokemon[pokemonId].name}!!!</h1>
                    <h2>{pokemon[pokemonId].name}</h2>
                </div> 
            )}
            
        </div>
    )
}


export default connect(state => state)(PokemonProfile)