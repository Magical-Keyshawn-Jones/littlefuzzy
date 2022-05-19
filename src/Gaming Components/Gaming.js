import './GamingStyles.css'

// To do list
// Make an api for Gaming
// The api will have info on said game
// Create input for users to add 'Video Game played', 'Platform Played on' , 'Rating for the Game' 'Why Give this Rating'
// Be able to grab, create, change, or delete a game

export function Gaming (props) {
   
    const { words } = props
    
    return (
        <div className='GamingHome'>
            <div className='GamingTitle'>
                <h1>I love Gaming and {words} Yall!!!</h1>
            </div>
        </div>
    )
}
