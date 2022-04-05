import ReactPlayer from 'react-player';

function Home () {

    // Making Home Video Player component
    const homeVideo = 
        <div className='HomePlayer'>
            <ReactPlayer playing={true} loop={true} height='100%' width='100%' url='https://youtu.be/zrYpQGcZ06M'/>
        </div>

    // About Me Component
    const aboutMe = 
        <div className='aboutMe'>
             <h1 className='aboutHeader'>About Me</h1>
            <p>First thing everyone should know is that my nickname is <span className='Doorknob'>Doorknob</span> and I love the color <span className='Pink'>Pink</span>.
                I have a passion for God, Video Games, and Coding. I love acting silly and 
                making people laugh. <span className='PeoplePerson'>100% People Person!</span>
            </p>
        </div>
    
    return (
        <div className='HomeSheep'>
            {homeVideo}
            {aboutMe}
        </div>
    )
}

export default Home;