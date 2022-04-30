import { useParams } from "react-router-dom"
import { connect } from "react-redux"

function PokemonProfile (props) {
    const { pokemon } = props
    const { pokemonId } = useParams()
    
    return (
        <div onClick={()=>{}}>
            <h1 className='pokemonHeading'>Welcome To Hate That {pokemon[pokemonId].name}!!!</h1>
            Insider Pokemon Here
            
        </div>
    )
}


export default connect(null, {})(PokemonProfile)