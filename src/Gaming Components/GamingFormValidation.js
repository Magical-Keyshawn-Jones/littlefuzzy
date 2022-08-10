import * as yup from 'yup'

const gamingFormTest = yup.object().shape({
    game: yup
    .string()
    .trim()
    .required('Game is required'),

    rating: yup
    .string()
    .oneOf(['1','2','3','4','5','6','7','8','9','10'])
    .required('Rating is required'),

    platform: yup
    .string()
    .trim()
    .required('Platform is required'),

    comment: yup
    .string()
    .trim()
    .max(200)
})

export default gamingFormTest