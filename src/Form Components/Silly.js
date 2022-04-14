import sillyTester from "./SillyValidation";
// Reference SillyForm Array to find Specific Words
import { sillyWords } from "./sillyFormArrays";
import { useNumber } from "./sillyFormArrays";
import * as yup from 'yup';
import { useState } from 'react'

// Make a cool slider
// Dropdown options
// Radio
// Customize to validation form 
// use cypress

function Silly () {

    const [number, setNumber] = useNumber(sillyWords[0])

    console.log(number)

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
            </form>
            <div className='SillyParagraph'>
                <p>Insert Form submit Info here</p>
            </div>
       </div>
    )
}

export default Silly;