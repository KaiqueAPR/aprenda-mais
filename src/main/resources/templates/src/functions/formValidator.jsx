
export function CustomValidator(inputName) {
    switch (inputName) {
        case 'nome':
            return newObjValidatorNome()
        case 'ddd':
            return newObjValidatorDdd()
        case 'cpf':
            return newObjValidatorCpf()
        case 'telefone':
            return newObjValidatorTel()
        case 'dtNascimento':
            return newObjValidatorDate()
        case 'email':
            return newObjValidatorEmail()
        case 'senha':
            return newObjValidatorPassword()
        case 'cep':
            return newObjValidatorCep()
        case 'logradouro':
            return newObjValidatorAddress()
        default:
            return 'Campo inválido'
    }
}


function newObjValidatorNome() {
    return ({
        required: {
            value: true,
            message: "O campo nome e obrigatorio"
        },
        minLength: {
            value: 5,
            message: "Nome muito curto"
        }
    })
}

function newObjValidatorCpf() {
    return ({
        required: {
            value: true,
            message: "O campo CPF e obrigatorio"
        },
        minLength: {
            value: 14,
            message: "Digite os 11 digitos do CPF (Somente Numeros)"
        },
        validate: {
            notValidCpf: (value) => { 
                return (value !== '000.000.000-00' && 
                value !== '111.111.111-11' && 
                value !== '222.222.222-22' &&
                 value !== '333.333.333-33' && 
                 value !== '444.444.444-44' &&
                  value !== '555.555.555-55' &&
                   value !== '666.666.666-66' && 
                   value !== '77777777777' && 
                   value !== '88888888888' &&
                    value !== '99999999999' || "CPF REPROVADO"
            );
            }
        }
    })
}

function newObjValidatorDdd() {
    return ({
        required: {
            value: true,
            message: "O campo DDD e obrigatorio"
        },
        minLength: {
            value: 2,
            message: "Digite o DDD do seu celular (Somente Numeros)"
        }
    })
}

function newObjValidatorTel() {
    return ({
        required: {
            value: true,
            message: "O campo telefone e obrigatorio"
        },
        minLength: {
            value: 10,
            message: "Digite o seu celular (Somente Numeros)"
        }
    })
}

function newObjValidatorDate() {
    return ({
        required: {
            value: true,
            message: "O campo data de nascimento e obrigatorio"
        },
        minLength: {
            value: 10,
            message: "Digite no formato XX/XX/XXXX (Somente Numeros)"
        }
    })
}

function newObjValidatorEmail() {
    return ({
        required: {
            value: true,
            message: "O campo email e obrigatorio"
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Digite um email valido"
        }
    })
}

function newObjValidatorPassword() {
    return ({
        required: {
            value: true,
            message: "O campo senha e obrigatorio"
        },
        minLength: {
            value: 8,
            message: "A senha deve ter no minimo 8 caracteres"
        },
        pattern: {
            value: /[ !@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/,
            message: 'A senha deve conter pelo menos um caracter especial'
        }
    })
}

function newObjValidatorCep() {
    return ({
        required: {
            value: true,
            message: "O campo CEP e obrigatorio"
        },
        minLength: {
            value: 9,
            message: "Digite os 8 digitos do CEP (Somente Numeros)"
        }
    })
}

function newObjValidatorAddress() {
    return ({
        required: {
            value: true,
            message: "O campo logradouro e obrigatorio"
        },
        minLength: {
            value: 5,
            message: "Digite o endereço aonde voce mora"
        }
    })
}