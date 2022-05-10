import  * as yup  from 'yup';

const sillyTester = yup.object().shape({
    name: yup
    .string()
    .trim()
    // .min(5,'Need more than that kid')
    .required('Name is required'),
    animal: yup
    .string()
    .trim()
    // .min(1, 'wut you do?')
    .required('Animal Required')
})

export default sillyTester;