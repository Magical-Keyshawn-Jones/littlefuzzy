import sillyTester from "./SillyValidation";
import * as yup from 'yup';
import { useState } from 'react'

// Make a cool slider
// Dropdown options
// Radio
// Make a validation form

function Silly () {

    // initial Form Values
    const initialSillyValues = {
        name: ''
    }

    // initial Error Form Values
    const errorSillyValues = {
        name: ''
    }

    // Making States for initial Silly and Error Values
    const [sillyValues, setSillyValues] = useState(initialSillyValues)
    const [errorValues, setErrorValues] = useState(errorSillyValues)

    // Validator function to Test Form values inputs
    function validator (name, value) {
        yup.reach(sillyTester, name)
        .validate(value)
        .then(()=> setErrorValues({...errorValues, [name]: ''}))
        .catch(err => setErrorValues({...errorValues, [err]: err.formError[0]}))
    }

    // change function for OnChangeHandler
    function change (name, value) {

        // Validates the input
        validator(name, value)

        setSillyValues({...sillyValues, [name]: value})
    }

    // onChange handler
    function onChangeHandler (event) {
        
        // Grabbing values
        const {name, type, checked, value } = event.target

        // To grab correct checkbox values
        const checkboxValue = type === 'checkbox' ? checked : value
    }

    return (
       <div className='SillyFormHolder'>
            <form className='SillyForm'>
                <label>
                    Name
                    <input
                    type='text'
                    name='name'
                    placeholder='Type name here'
                    value={sillyValues.name}
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