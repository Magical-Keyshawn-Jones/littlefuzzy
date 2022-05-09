import sillyTester from "./SillyValidation";
// Reference SillyForm Array to find Specific Words
import { useNumber, person, movementVerbs } from "./sillyFormArrays";
import * as yup from 'yup';
import { useState } from 'react'

// Make a cool slider
// Dropdown options
// Radio
// Customize to validation form 
// use cypress

function Silly () {

    const [personNumber, setPersonNumber] = useNumber(person)
    const [movementNumbers, setMovementNumbers] = useNumber(movementVerbs)

    // initial Form Values
    const initialSillyValues = {
        name: ''
    }

    // initial Error Form Values
    const errorSillyValues = {
        name: ''
    }

    // Making States for initial Silly and Error Values
    const [silly, setSilly, handleSilly] = useInput(initialSillyValues)
    const [errorValues, setErrorValues] = useState(errorSillyValues)

    // Validator function to Test Form values inputs
    function validator (name, value) {
        yup.reach(sillyTester, name)
        .validate(value)
        .then(()=> setErrorValues({...silly, [name]: ''}))
        .catch(err => setErrorValues({...silly, [name]: err.errors[0]})) //err.errors is a completely unrelated variable. !Always! use errors to show error!
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

    return (
       <div className='SillyFormHolder'>
            <form className='SillyForm'>
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
                <button>Submit</button>
            </form>
            <div className='SillyParagraph'>
                <p>{`My ${person[personNumber]} has ${movementVerbs[movementNumbers]} towards polar bears`}</p>
            </div>
       </div>
    )
}

export default Silly;