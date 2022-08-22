import axios from "axios"
import * as yup from 'yup'
import { useState } from "react"
import { useDispatch } from "react-redux"
import gamingFormTest from "./GamingFormValidation"

export default function GamingForm (grabReviews) {

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

    const dispatch = useDispatch()

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
            console.log(res.data)
            // dispatch(grabReviews())
        })
        .catch(err => {
            const message = {
                message: err.response.data.message,
                status: `${err.response.status}, ${err.response.statusText}`
            }
            console.log(message)
        })

        setFormValues(initialFormValues)

    }

    return (
        <div className='formContainer'>
            <form>
                <h1>Burning to Review Something?</h1>

                <label>
                    Game
                    <input
                    type='text'
                    name='game'
                    placeholder='Type game here'
                    value={formValues.game}
                    onChange={handleChanges}
                    />
                    {errorValues.game}
                </label>

                <label>
                    Rating
                    <input
                    type='text'
                    name= 'rating'
                    placeholder='Rating is out of 10'
                    value={formValues.rating}
                    onChange={handleChanges}
                    />
                    {errorValues.rating}
                </label>

                <label>
                    Platform
                    <input
                    type='text'
                    name='platform'
                    placeholder='Type platform here'
                    onChange={handleChanges}
                    />
                    {errorValues.platform}
                </label>

                <label>
                    Comment
                    <input
                    type='text'
                    name='comment'
                    placeholder='Type comment here'
                    value={formValues.comment}
                    onChange={handleChanges}
                    />
                    {errorValues.comment}
                </label>

                <button onClick={event => {submitButton(event)}}>Submit</button>
                <button>Refresh Reviews</button>
            </form>
        </div>
    )
}