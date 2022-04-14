import { useState } from 'react';


const movementVerbs = [
    'bolted', 'bounced', 'cantered', 'charged', 'clambered', 'climbed',
    'coasted', 'darted', 'dashed', 'drifted', 'clumped', 'crawled', 'crept',
    'flown', 'frolicked', 'galloped', 'glided', 'hastened', 'hiked', 'hopped',
    'hurried', 'hurtled', 'inched', 'jogged', 'journeyed', 'jumped', 'leaped',
    'limped', 'lolloped', 'lumbered', 'lurched', 'marched', 'moseyed', 'paraded', 
    'pranced', 'raced', 'rambled', 'roamed', 'ran', 'scampered', 'scooted', 'scrammed',
    'scrambled', 'scurried', 'shuffled', 'skipped', 'sleepwalked', 'slid', 'slithered',
    'sneaked', 'somersaulted', 'speeded', 'stomped', 'strolled', 'stumbled', 'swam', 
    'tiptoed', 'traveled', 'trudged', 'vaulted', 'waddled', 'wandered', 'zigzagged', 'zoomed'
]

const person = [
 'siblings', 'relative', 'Nuclear family', 'Foster Family', 'In-laws',
 'Grandfather', 'Grandmother', 'Father', 'Mother', 'Uncle', 'Aunt', 
 'Sister-in-Law', 'Brother', 'Sister', 'Cousin' , 'Nephew', 'Niece', 
 'Son', 'Grandson', 'Granddaughter', 'Daughter-in-Law', 'Stepmother', 
 'Stepson', 'Stepdaughter', 'Stepsister', 'Stepbrother', 'Halt-brother', 
 'Half-sister', 'Grandparents', 'Children', 'Brother-in-Law', 'Stepfather'   
]

const sillyWords = [
  person, movementVerbs
]

// Random Number function
// SideNote it is possible to get a random in between number
function sillyRandomNumber (number) {
  const randomNumber = Math.floor(Math.random() * number)
  return randomNumber
}

// Creating a Custom UseState that returns a random Number based on the length of array
function useNumber (array) {
  
  // Storing array.length in state
  const [arrayNumber, setArrayNumber]= useState(array.length)

  // Storing random number inside a variable to prevent infinite loop
  const sillyRandomNumbers = sillyRandomNumber(arrayNumber)

  // Storing random number in state
  const [randomNumber, setRandomNumber] =useState(sillyRandomNumbers)

  // Returning the random number and Set arrayNumber (setRandomNumber will not be used)
  return [randomNumber, setArrayNumber]

} 


export {
  sillyWords,
  useNumber,
  
}
// console.log(sillyWords)