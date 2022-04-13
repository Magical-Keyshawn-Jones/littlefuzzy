import { useState, useEffect } from 'react';
import * as yup from 'yup';
import formTest from './Validation';
import axios from 'axios';


function Form (props) {

    // Making Initial form values
    const initialFormValues = {
        name: '',
        email: '',
        password: ''
    
    }

    // Making Initial form errors
    const initialFormError = {
        name: '',
        email: '',
        password: ''
    
    }

    // Initializing disabled
    const initializedDisabled = true

    // Storing InitialValues inside of useState
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formError, setFormError] = useState(initialFormError)
    const [disabled, setDisabled] = useState(initializedDisabled)

    // Making a validator for boolean values
    function validator (name, value) {
        yup.reach(formTest, name)
        .validate(value)
        .then(() => setFormError({...formError, [name]: ''}))
        .catch(err => setFormError({...formError, [err]: err.formError[0]}))
    }

    // Making a Change function for onChange
    function change(name, value) {

        // Passing the name of the input Name and the Value
        validator(name,value)

        // Changing form values
        setFormValues({...formValues, [name]: value})
    }

    // Making an onChange function for onChange
    const onChange = (event) => {

        // Defining Name, type, checked, value = to the event 
        const {name, type, checked, value} = event.target

        // Making variable to grab the correct value of the checked boxes
        const checkerValue = type === 'checkbox' ? checked : value 

        change(name, checkerValue)
    }

     // Making a function for post to send the Form
     function sender (newVariables) {
        axios.post(`https://reqres.in/api/users`, newVariables)
        .then(object => console.log(object))
        .catch(err => console.log('error!',err))
    }

    // Making Value trimmer/Cleaner
    function cleanPosting () {

        // Storing formValues keys inside of a new object
        const refinement = {
            name: formValues.name.replace(/\s+/g, ' ').trim(),
            email: formValues.email.replace(/\s+/g, ' ').trim(),
            password: formValues.password.replace(/\s+/g, ' ').trim()
        }

        sender(refinement)
        
        return refinement
    }

    // Making function for onSubmit function
    function onSubmit (event) {

        // Stopping full page reload
        event.preventDefault()

        // Cleaning and Testing Form
        cleanPosting()

        // Resetting the form
        setFormValues(initialFormValues)
    }

    // Adding a functionality to disable the button
    useEffect(() => {
        formTest.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label className='fixer'>
                    <div className='stubborn'>
                        <p className='stubborning'>Name</p>
                    </div> 

                    <input
                    type='text'
                    name='name'
                    placeHolder='Please type name here'
                    value={formValues.name}
                    onChange={onChange}
                    className='fixerUpper'
                    />
                </label>

                <br/>
                <label className='fixer'>
                    <div className='stubborn'>
                        <p className='stubborning'>Email</p>
                    </div> 

                    <input
                    type='email'
                    name='email'
                    placeHolder='Please type email here'
                    value={formValues.email}
                    onChange={onChange}
                    className='fixerUpper'
                    />
                </label>

                <br/>
                <label className='fixer'>
                    <div className='stubborn'>
                        <p className='stubborning'>Password</p>
                    </div> 

                    <input
                    type='password'
                    name='password'
                    placeHolder='Please type password here'
                    value={formValues.password}
                    onChange={onChange}
                    className='fixerUpper'
                    />
                </label>

                <br/>
                <button>Submit</button>

                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{formError.name}</div>
                <div>{formError.email}</div>
                <div>{formError.password}</div>
            </div>
        </form>
    )
}

export default Form