import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function Games () {

     // Storing Game objects inside of an array to Test useParams
     const videoGames = [
        { id: 1, name: 'Borderlands'}, { id: 2, name: 'Batman'}, { id: 3, name: 'God of War'}
    ]

    // Storing Array inside of useState
    const [games, setGames] = useState(videoGames)

     // Finding the id inside of useParams/Using it the match url id
     const { viral } = useParams()

      // Storing the Object that matched the id of the url id
      const finder = games.find(item => item.id === parseInt(viral))


    return (
        <h1> I absolutely hate {finder.name}</h1>
    )
}

// export default Games;