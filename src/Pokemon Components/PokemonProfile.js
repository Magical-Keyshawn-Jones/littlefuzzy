import { useHistory, useParams } from "react-router-dom"
import { connect } from "react-redux"

function PokemonProfile (props) {
    const { pokemon } = props
    const path = useHistory()
    const { pokemonId } = useParams()
    
    return (
        <div onClick={()=>{path.push('/pokemon')}}>
            <h1 className='pokemonHeading'>Welcome To Hate That {pokemon[pokemonId].name}!!!</h1>
            Insider Pokemon Here
        </div>
    )
}


export default connect(null, {})(PokemonProfile)