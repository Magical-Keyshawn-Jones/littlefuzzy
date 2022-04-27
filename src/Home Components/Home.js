import ReactPlayer from 'react-player';
import Silly from '../Form Components/Silly'
// Make form and afterwards make a button to get rid of the form

export function Home () {

    // Making Home Video Player component
    const homeVideo = 
        <div className='HomePlayer'>
            <ReactPlayer playing={true} loop={true} height='100%' width='100%' url='https://youtu.be/zrYpQGcZ06M'/>
        </div>

    // About Me Component
    const aboutMe = 
        <div className='aboutMe'>
             <h1 className='aboutHeader'>About Me</h1>
            {/* <p>First thing everyone should know is that my nickname is <span className='Doorknob'>Doorknob</span> and I love the color <span className='Pink'>Pink</span>.
                I have a passion for God, Video Games, and Coding. I love acting silly and 
                making people laugh. <span className='PeoplePerson'>100% People Person!</span>
            </p> */}
            <ul className='aboutMeListHolder'>
                <li className='AboutMeList'>My nickname is <span className='Doorknob'>Doorknob</span></li>
                <li className='AboutMeList'>I love the color <span className='Pink'>Pink</span></li>
                <li className='AboutMeList'>I have a passion for God, Video Games, and Coding</li>
                <li className='AboutMeList'>I love acting silly and making people laugh</li>
                <li className='AboutMeList'><span className='PeoplePerson'>100% People Person!</span></li>
            </ul>
        </div>
    
    return (
        <div>
            <div className='HomeSheep'>
                {homeVideo}
                {aboutMe}
            </div>
            <Silly/>
        </div>
    )
}