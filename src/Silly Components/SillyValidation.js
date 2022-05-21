import  * as yup  from 'yup';

const sillyTester = yup.object().shape({
    name: yup
    .string()
    .trim()
    // .min(5,'Need more than that kid')
    .required('Name is required'),
    gender: yup
    .string()
    .oneOf(['Male', 'Female']),
    animal: yup
    .string()
    .trim()
    .required('Animal Required'),
    maritalStatus: yup
    .string()
    .oneOf(['Single', 
    'Married', 
    'Divorced', 
    'Separated', 
    'Never Married'], 'Status Required'),
    goodAnimals: yup.boolean(),
    badAnimals: yup.boolean(),
    ending: yup
    .string()
    .oneOf(['Good Ending', 'Bad Ending'], 'Ending Required')
})

export default sillyTester;