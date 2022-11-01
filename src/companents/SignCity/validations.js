import * as yup from 'yup'

const validations = yup.object().shape({
    cityF: yup.string().required(),
})

export default validations