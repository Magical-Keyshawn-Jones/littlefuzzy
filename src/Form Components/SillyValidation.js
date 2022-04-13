import  * as yup  from 'yup';

const sillyTester = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required')
})

export default sillyTester;