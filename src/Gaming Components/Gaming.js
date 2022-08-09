import './GamingStyles.css'
import axios from 'axios';
import GamingHomePage from './GamingHomePage'
import gamingImages from "./exportGamingImages";
import { Routes, Route} from 'react-router-dom'

// To do list//
// Make an api for Gaming
// The api will have info on said game
// Create input for users to add 'Video Game played', 'Platform Played on' , 'Rating for the Game' 'Why Give this Rating'
// Be able to grab, create, change, or delete a game
// Add a login Page

export function Gaming (props) {
    // Login function takes in values,stores token, & send user to the website

    const game = {
        game: 'LittleFuzzy',
        rating: 8,
        platform: 'Playstation 4',
        comment: 'My first real API'
    }

    // axios.post('https://littlefuzzy-gaming-server.herokuapp.com/', game)
    // .then(res => {
    //     console.log(res)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

    axios.get('https://littlefuzzy-gaming-server.herokuapp.com/games')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })

    return (
        <Routes>
            {/* <Route path='/' element={
                <div> testing this thing</div>
            } /> */}
            <Route path='/' element={<GamingHomePage gamingImages={gamingImages} />} />
        </Routes>
    )
}
