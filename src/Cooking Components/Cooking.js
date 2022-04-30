
import {
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

export function Cooking () {
    return (
        <div className='cookingHomePage'>
            <div className='cookingProfileImage'>
                <img src={starButterFly} alt='Star Butterfly' />
            </div>
        </div>
    )
}

// export default Cooking;