import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { useState } from 'react';
function PokemonProfile (props) {
    const { pokemon } = props
    const path = useHistory()
    const [newPokemon, setNewPokemon] = useState('')

    console.log(newPokemon)
    console.log(newPokemon[0])

    return (
        <div onClick={()=>{path.push('/pokemon')}}>
            Insider Pokemon Here
        </div>
    )
}

function GrabbingStorage (state) {
    return {
        pokemon: state.pokemonInfo.pokemon
    }
}

export default connect(GrabbingStorage, {})(PokemonProfile)