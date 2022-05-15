// Reference SillyForm Array to find Specific Words
import sillyTester from "./SillyValidation";
import './SillyStyles.css'
import { useNumber, person, movementVerbs } from "./sillyFormArrays";
import * as yup from 'yup';
import { useState } from 'react'

// Make a cool slider
// Add Dropdown options 'Married' or 'Soon To be Married' or 'Eventually Get Married' or 'Forever Alone'
// Add Radio for 'Dead' or 'Alive'
// Customize to validation form 
// use cypress

function Silly () {

    const [personNumber, setPersonNumber] = useNumber(person)
    const [movementNumber, setMovementNumber] = useNumber(movementVerbs)
    const [bestPersonNumber, setBestPersonNumber] = useState(null)
    const [bestMovementNumber, setBestMovementNumber] = useState(null)

    // initial Form Values
    const initialSillyValues = {
        name: '',
        animal: '',
        maritalStatus: '',
        ending: '',
        friendlyAnimal: false,
        
    }

    // initial Error Form Values
    const errorSillyValues = {
        name: '',
        animal: '',
        maritalStatus: '',
        ending: '',

    }

    // Making States for initial Silly and Error Values
    const [silly, setSilly, handleSilly] = useInput(initialSillyValues)
    const [errorValues, setErrorValues] = useState(errorSillyValues)

    // Validator function to Test Form values inputs
    function validator (name, value) {
        yup.reach(sillyTester, name)
        .validate(value)
        .then(()=> setErrorValues({...errorValues, [name]: ''}))
        .catch(err => setErrorValues({...errorValues, [name]: err.errors[0]})) //err.errors is a completely unrelated variable. !Always! use errors to show error!
    }

    // change function for OnChangeHandler
    function change (name, value) {

        setSilly({...silly, [name]: value})

        // Validates the input
        validator(name, value)
    }

    // Making custom hook for onChange
    function useInput  (initialValue) {
        const [value, setValue] = useState(initialValue)
        function handleChanges (event) {
            
            // Grabbing values
            const { name, type, checked, value } = event.target

            // To grab correct checkbox values
            const checkboxValue = type === 'checkbox' ? checked : value

            change(name, checkboxValue)
        }

        return [value, setValue, handleChanges]
    }

    function submitButton (event) {
        event.preventDefault()

        setSilly(initialSillyValues)
    }

    function refreshButton (event) {
        event.preventDefault()

        setBestPersonNumber(Math.floor(Math.random() * person.length))
        setBestMovementNumber(Math.floor(Math.random() * movementVerbs.length))
    }

    return (
       <div className='SillyFormHolder'>
            <form className='SillyForm'>
                <h3>Create Your Story</h3>
                <label>
                    Name
                    <input 
                    className= 'testInput'
                    type='text'
                    name='name'
                    placeholder='Type name here'
                    value={silly.name}
                    onChange={handleSilly}
                    />
                    {errorValues.name}
                </label>

                <label>
                    Animal
                    <input 
                    className= 'testInput'
                    type='text'
                    name='animal'
                    placeholder='Type Animal here'
                    value={silly.animal}
                    onChange={handleSilly}
                    />
                    {errorValues.animal}
                </label>

                <label>
                    Marital Status
                    <select
                    name='maritalStatus'
                    value={silly.maritalStatus}
                    onChange={handleSilly}
                    >
                        <option>Select</option>
                        <option>Single</option>
                        <option>Married</option>
                        <option>Divorced</option>
                        <option>Separated</option>
                        <option>Never Married</option>
                    </select>
                    {errorValues.maritalStatus}
                </label>
                
                <label>
                    Friendly Animal
                    <input
                    type='checkbox'
                    name='friendlyAnimal'
                    checked={silly.friendlyAnimal}
                    onChange={handleSilly}
                    />
                </label>

                <label className='endingRadio'>
                    Ending
                    <div>
                    <label>
                        Good Ending
                        <input
                        type='radio'
                        name='ending'
                        value='Good Ending'
                        onChange={handleSilly}
                        checked={silly.ending === 'Good Ending'}
                    />
                    </label>

                    <label>
                        Bad Ending
                        <input
                        type='radio'
                        name='ending'
                        value='Bad Ending'
                        onChange={handleSilly}
                        checked={silly.ending === 'Bad Ending'}
                        />
                    </label>
                    </div>
                </label>

                <div className='formButtonContainer'>
                <button onClick={(event)=>{submitButton(event)}}>Submit</button>
                <button onClick={(event)=>{refreshButton(event)}}>Refresh</button>
                </div>
            </form>
            <div className='SillyParagraph'>
                <div>
                    <p>{`My ${person[bestPersonNumber || personNumber]} has ${movementVerbs[bestMovementNumber || movementNumber]} towards polar bears`}</p>
                </div>
            </div>
       </div>
    )
}

export default Silly;