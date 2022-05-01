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
                <div className='cookingProfileImage'>
                    <img src={starButterFly} alt='Star Butterfly' />
                </div>
                <div className='carouselContainer'>
                    <div className='cookingCarousel'>
                        <div id='cookingArrow' className='cookingArrowLeft' onClick={()=>{leftClickHandler()}}></div>
                        <div className='slide'>
                            <img src={caroselImages[current]} alt='Slideshow images' />
                        </div>
                        <div id='cookingArrow' className='cookingArrowRight' onClick={()=>{rightClickHandler()}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default Cooking;