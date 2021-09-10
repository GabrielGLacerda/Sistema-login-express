const yup = require('yup');

let userSchema = yup.object().shape({
    email: yup.string().email('Email invalido, por favor insira suas informações corretamente').required('nescessario informar seu email!'),
    password: yup.string().min(5, 'Por favor, insira uma senha com mais de 5 caracteres').max(15, 'por favor, insira uma senha que não ultrapasse 15 caracteres').required('Nescessario informar sua senha!')
})

module.exports = userSchema;