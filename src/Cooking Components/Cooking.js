import { useState, useEffect } from 'react'
import {
    caroselImages,
    starButterFly,
    princessCake,
    christianCake,
    foodCakes,
    turquoiseCake,
    weddingCake
} from './ExportCookingImages'

// Todos:
// Add a carosel in top right, featuring here cake designs. onClick go to cake profile
// profile in top Left
// Picture of cake on left, paragraph on the right. Then alternate going down
// Maybe add a animation some how with the images

export function Cooking (props) {

    const [current, setCurrent] = useState(0) 

    // Left Arrow Click 
    function leftClickHandler(){
        switch(current){
            case 0:
                setCurrent(caroselImages.length - 1)
            break;
            default:
                setCurrent(current - 1)
        }
    }

    // Right Arrow Click
    function rightClickHandler(){
        switch(current){
            case caroselImages.length - 1:
                setCurrent(0)
            break;
            default:
                setCurrent(current + 1)
        }
    }
    
    return (
        <div className='cookingHomePage'>
            <div className='cookingTopLevelContainer'>
                <div className='profileContainer'>
                    <div className='cookingProfileImage'>
                        <img src={starButterFly} alt='Star Butterfly' />
                    </div>
                    <h1>Contact Info</h1>
                    <br/>
                    <p>Just Call Me</p>
                </div>
                <div className='carouselContainer'>
                    <div className='cookingCarousel'>
                        <div id='cookingArrow' className='cookingArrowLeft' onClick={()=>{leftClickHandler()}}></div>
                        <div className='slide'>
                            <img src={caroselImages[current]} alt='Slideshow images' />
                        </div>
                        <div id='cookingArrow' className='cookingArrowRight' onClick={()=>{rightClickHandler()}}></div>
                    </div>
                    <h1>About Me</h1>
                    <p>Hi! <span>I'm Queen WhateverWannaBe</span>. I absolutely <span>love</span> cooking! Since I was little I always helped my mom cook and it was a lot of fun. 
                        The pictures above are cakes I've done in the past and each one has an awesome story and recipe. If you need someone to bake and <span>majestic</span> cake 
                        for you, family, or business, then I'm your girl. 
                    </p>
                </div>
            </div>
        </div>
    )
}

// export default Cooking;