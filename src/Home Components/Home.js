import ReactPlayer from 'react-player';
import Silly from '../Silly Components/Silly'
import './HomeStyles.css'
// Make form and afterwards make a button to get rid of the form

export function Home ( props ) {

    // Making Home Video Player component
    const homeVideo = 
        <div className='HomePlayer'>
            <ReactPlayer controls={true} playing={true} loop={true} height='100%' width='100%' url='https://youtu.be/zrYpQGcZ06M'/>
        </div>

// Grabbing height and width of window
const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight
}
    // About Me Component
    const aboutMe = 
        <div className='aboutMe'>
             <h1 className='aboutHeader'>About Me</h1>
             {/* <p>
                 My nickname is Doorknob. I have a passion for God, video games, and coding. I am pretty skilled at
                 <br/>
                 Javascript, Html, CSS, and React so far
             </p> */}
            <ol>
                <li>My nickname is <span className='pink'>Doorknob</span></li>
                {/* <li>I love the color <span className='pink'>pink</span></li> */}
                {/* <li>I have a passion for God, Video Games, and Coding</li> */}
                <li>I am skilled at Javascript, Html, CSS, React,</li>
                <li>Redux, SQL</li>
                <li><span className='bold'>100% People Person!</span></li>
            </ol>
        </div>

    return (
        <div className='Home'>
            <p className='HomeLineTop'></p>
            <div className='HomeSheep'>
                {homeVideo}
                {aboutMe}
            </div>
            <p className='HomeLineBottom'></p>
            <Silly/>
        </div>
    )
}