import axios from "axios"
import * as yup from 'yup'
import { useState } from "react"
import gamingFormTest from "./GamingFormValidation"

export default function GamingForm () {

    // Initial Form Values
    const initialFormValues = {
        game: '',
        rating: '',
        platform: '',
        comment: ''
    }

    // Initial Form Errors
    const errorFormValues = {
        game: '',
        rating: '',
        platform: '',
        comment: ''
    }

    // Storing Form & Error Values inside of state
    const [formValues, setFormValues, handleChanges] = useInput(initialFormValues)
    const [errorValues, setErrorValues] = useState(errorFormValues)

    // Creating validator function for change function
    function validator (name, value) {
        yup.reach(gamingFormTest, name)
        .validate(value)
        .then(() => setErrorValues({...errorValues, [name]: ''}))
        .catch(err => setErrorValues({...errorValues, [name]: err.errors[0]}))
        //err.errors !Always! use 'errors[0]' to show error!
    }

    // Creating onChange handler
    function change (name, value) {

        setFormValues({...formValues, [name]: value})

        validator(name, value)
    }
   
    // Making custom useState hook for onChange
   function useInput (initialValue) {
        const [value, setValue] = useState(initialValue)
        function handleChanges (event) {
        
            // Grabbing values
            const { name, value } = event.target

            change(name, value)
        }

        return [value, setValue, handleChanges]
    }

    // function sends info to the API
    function submitButton (event) {
        event.preventDefault()
        
        axios.post('https://littlefuzzy-gaming-server.herokuapp.com/', formValues)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            const message = {
                message: err.response.data.message,
                status: `${err.response.status}, ${err.response.statusText}`
            }
            console.log(message)
        })

    }

    return (
        <div className='formContainer'>
            <form>
                <h1>Burning to Review Something?</h1>
                <button onClick={(event) => {submitButton(event)}}>Submit Here</button>
            </form>
        </div>
    )
}