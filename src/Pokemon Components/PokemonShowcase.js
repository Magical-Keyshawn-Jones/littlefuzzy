// import { Link } from 'react-router-dom';
// import { pokemonImages } from './ExportPokemonImage';

// export function PokemonShowCase (props) {

//     const { pokemon } = props

//     return ( 

//         <div className='pokemonBox'>
//                 {/* <h1 className='pokemonHeading'>Welcome To Hate That That Pokemon!!!</h1> */}
//                 <div className='pokemonImages'>
//                     {pokemon.map((pokemon, index)=>{
//                         return (                    
//                             <Link className='pokemonLinkTo' to={`/pokemon/${index}`}>
//                                 <div>
//                                     <img key={index} src={pokemonImages[index]} alt=''/>
//                                 </div>
//                             </Link>)
//                     })}
//                 </div>
//         </div>   
//     )
// }