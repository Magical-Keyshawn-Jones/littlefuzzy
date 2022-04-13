import  * as yup  from 'yup';

const sillyTester = yup.object().shape({
    name: yup
    .string()
    .trim()
    .min(5,'Need more than that kid')
    .required('Name is required')
})

export default sillyTester;