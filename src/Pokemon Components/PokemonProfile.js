import { useHistory } from "react-router-dom"

export function PokemonProfile (props) {

    const path = useHistory()
    
    return (
        <div onClick={()=>{path.push('/pokemon')}}>
            Insider Pokemon Here
        </div>
    )
}