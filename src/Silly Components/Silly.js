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
    const [movementNumber, setMovementNumber] = useNumber(movementVerbs)
    const [bestPersonNumber, setBestPersonNumber] = useState(null)
    const [bestMovementNumber, setBestMovementNumber] = useState(null)

    // initial Form Values
    const initialSillyValues = {
        name: '',
        animal: '',
    }

    // initial Error Form Values
    const errorSillyValues = {
        name: '',
        animal: '',
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

    function onSubmitHandler (event) {
        event.preventDefault()

        setBestPersonNumber(Math.floor(Math.random() * person.length))
        setBestMovementNumber(Math.floor(Math.random() * movementVerbs.length))

        setSilly(initialSillyValues)
    }

    return (
       <div className='SillyFormHolder'>
            <form className='SillyForm' onSubmit={(event)=>{onSubmitHandler(event)}}>
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
                <button>Submit</button>
            </form>
            <div className='SillyParagraph'>
                <p>
                    {`My ${person[bestPersonNumber || personNumber]} 
                    has ${movementVerbs[bestMovementNumber || movementNumber]} towards polar bears`}
                </p>
            </div>
       </div>
    )
}

export default Silly;