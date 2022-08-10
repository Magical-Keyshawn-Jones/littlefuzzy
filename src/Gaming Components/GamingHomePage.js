import { useState, useEffect } from "react";

export default function GamingHomePage(props) {
  const [current, setCurrent] = useState(7);
  const { gamingImages, videoGameReviews } = props

  const game = {
    game: 'LittleFuzzy',
    rating: 8,
    platform: 'Playstation 4',
    comment: 'My first real API'
  }

  // console.log(videoGameReviews)

  useEffect(() => {
    setTimeout(() => {
      switch (current) {
        case gamingImages.length - 1:
          setCurrent(0);
          break;
        default:
          setCurrent(current + 1);
      }
    }, 6000);
  }, [current]);

  return (
    <div className="gamingHome">
      <div className='topHalf'>
        <div className='topImage' id='edgeSpacing'>
          <img src={gamingImages[current]} alt='Something Here'/>
        </div>
        <div className='topLineSpace'></div>
        <div className='gameCoding' id='edgeSpacing'>
          <h1>Gaming & Coding</h1>
          <div>
            <p>
              I love video games of all kinds and I enjoy coding.
              I love idea and the reality that I can actually create something by coding.
              Sometimes I run into a bug or I can't figure out how to do something,
              It makes me excited to figure out how to fix a bug or to create something grand or better
              than my current code.
            </p>
            <p className='secondP' >
              This website is only the beginning of my capabilities. 
              If you need a full stack web developer that is a problem solver, curious, resourceful, self-driven,
              and constantly improving what are you waiting for? Contact Me
            </p>
          </div>
        </div>
      </div>
      <aside className='middleLineSpace'></aside>
      <div className='bottomHalf'>
        {/* <p>{axiosTest}</p> */}
      </div>
    </div>
  );
}