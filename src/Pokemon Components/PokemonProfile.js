import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { useState } from 'react';
function PokemonProfile (props) {
    const { pokemon } = props
    const path = useHistory()
    const [newPokemon, setNewPokemon] = useState(pokemon)

    
    return (
        <div onClick={()=>{path.push('/pokemon')}}>
            Insider Pokemon Here
        </div>
    )
}


export default connect(null, {})(PokemonProfile)