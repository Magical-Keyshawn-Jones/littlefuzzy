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
            <h1 className='aboutHeader'>Technical Super Skills</h1>
            <ol>
                <li> HTML, CSS, JavaScript, React.js, Redux, Hooks, Context API, Yup,  Jest, Cypress, Axios, Responsive Design</li>
                <li>Node.js, Express, SQL, Git CLI, GitHub, VS Code, Vercel, Heroku, Knex</li>
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