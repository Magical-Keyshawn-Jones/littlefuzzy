import './GamingStyles.css'
import GamingHomePage from './GamingHomePage'
import { Routes, Route} from 'react-router-dom'

// To do list//
// Make an api for Gaming
// The api will have info on said game
// Create input for users to add 'Video Game played', 'Platform Played on' , 'Rating for the Game' 'Why Give this Rating'
// Be able to grab, create, change, or delete a game
// Add a login Page

export function Gaming (props) {
    // Login function takes in values,stores token, & send user to the website

    return (
        <Routes>
            {/* <Route path='/' element={
                <div> testing this thing</div>
            } /> */}
            <Route path='/' element={<GamingHomePage/>} />
        </Routes>
    )
}
