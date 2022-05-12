import { useState, useEffect } from 'react'
import './CookingStyles.css'
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

// !!Fix Sizing to stop The Page from Yelling at me!!! Everything is too large
// transform scale for zooming cabilities

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

    function autoSlider(){
        switch(current){
            case caroselImages.length - 1:
                setTimeout((setCurrent(0)),2000)
            break;
            default:
                setTimeout((setCurrent(current + 1)),2000)
                
        }
    }

    // useEffect(()=>{
    //     autoSlider()
    // },[current])

    // autoSlider()
    
    return (
        <main className='cookingHomePage'>
            <header className='cookingTopLevelContainer'>
                <div className='profileContainer'>
                    <div className='cookingProfileImage'>
                        <img src={starButterFly} alt='Star Butterfly'/>
                    </div>
                    <br/>
                    <p>Queen of Bakery</p>
                </div>

                <div className='carouselContainer'>
                    <div className='cookingCarousel'>
                        <div id='cookingArrow' className='cookingArrowLeft' onClick={()=>{leftClickHandler()}}></div>
                        <div className='slide'>
                            <a href={`#${caroselImages[current]}`}>
                            <img src={caroselImages[current]} alt='Slideshow images'/>
                            </a>
                        </div>
                        <div id='cookingArrow' className='cookingArrowRight' onClick={()=>{rightClickHandler()}}></div>
                    </div>
                    <h1>About Me</h1>
                    <p>
                        Hi! <span>I'm Queen WhateverWannaBe</span>. I absolutely <span>love</span> cooking! Since I was little I always helped my mom cook and it was a lot of fun. 
                        The pictures above are cakes I've done in the past and each one has an awesome story and recipe. If you need someone to bake and <span>majestic</span> cake 
                        for you, family, or business, then I'm your girl! 
                    </p>
                </div>
            </header>

            <section id={`${christianCake}`} className='cakeInfoContainer'>
                <div className='cakeParagraphContainer'>
                    <p>
                        Looking for a cake that's godly and delicious? A cake you use to segway into Godly conversations? Then search no more! With every bite scripture is being fed right into the belly and soul.
                        This is my go to cake for church events
                    </p>
                </div>
                <div className='cakeInfoImage'>
                    <img src={christianCake} alt='Christian Cake' />
                </div>
            </section>

            <section id={`${turquoiseCake}`} className='cakeInfoContainer'>
                <div className='cakeInfoImage'>
                    <img src={turquoiseCake} alt='Turquoise Cake' />
                </div>
                <div className='cakeParagraphContainer'>
                    <p>
                        This cake was made specifically from the Crystal Lab Industries. I synthesized and fused the delicious crystals to form the Worlds first 'Crystal Cake Biome'
                        Perfect for people who love blue, the ocean, and just genuinely love crystals
                    </p>
                </div>
            </section>

            <section id={`${princessCake}`} className='cakeInfoContainer'>
                <div className='cakeParagraphContainer'>
                    <p>
                        A cake meant only for Queens and Princesses. A beautiful white and pink bed with cute little tiny teddy bear! Take a bite of this cake and you will 
                        find only rainbows and unicorns
                    </p>
                </div>
                <div className='cakeInfoImage'>
                    <img src={princessCake} alt='Princess Cake' />
                </div>
            </section>

            <section id={`${foodCakes}`} className='cakeInfoContainer'>
                <div className='cakeInfoImage'>
                    <img src={foodCakes} alt='Food Cake' />
                </div>
                <div className='cakeParagraphContainer'>
                    <p>
                        Do you love food! Are you looking for fast food thats not so greasy? I present to you the Food Cake! I can mash a bunch of food on top of each other like 
                        a cake food frankenstein. Alternatively, I can tailor the food cake to your choice. lobster, fries, burgers, pancakes, you name it and I can do it.  
                    </p>
                </div>
            </section>

            <section id={`${weddingCake}`} className='cakeInfoContainer'>
                <div className='cakeParagraphContainer'>
                    <p>
                        Getting Married, wanting to marry to someone, or just want to taste a wedding cake in general? I can make a super tall fancy looking cake for any couple 
                        and in the most elegant way
                    </p>
                </div>
                <div className='cakeInfoImage'>
                    <img src={weddingCake} alt='Wedding Cake' />
                </div>
            </section>
        </main>
    )
}
