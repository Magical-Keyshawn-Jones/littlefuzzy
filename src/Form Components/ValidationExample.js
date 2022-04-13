// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required ya chump!')
    .min(3, 'Username has to be more than three characters ya chump!'),
  email: yup
    .string()
    .email('Must be a valid email address ya chump!')
    .required('Email is required ya chump'),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni'], 'Role is required COME ON!!!'),
  civil: yup
    .string()
    .oneOf(['married', 'single'], 'Gotta be either married or single, bud.'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean()
})


// function cleanPosting () {

//   const refinement = {
//       name: formValues.name.replace(/\s+/g, ' ').trim(),
//       specialText: formValues.specialText.replace(/\s+/g, ' ').trim(),
//       toppings: ['pepperoni', 'olives', 'cheese', 'pineapples'].filter(toppers => formValues[toppers])
//   }
// }

export default formSchema;