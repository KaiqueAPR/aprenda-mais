
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
            message: "O campo nome e obrigatório."
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
            message: "O campo CPF e obrigatório."
        },
        minLength: {
            value: 11,
            message: "Digite os 11 digitos do CPF (Somente Numeros)"
        }
    })
}

function newObjValidatorDdd() {
    return ({
        required: {
            value: true,
            message: "O campo DDD e obrigatório."
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
            message: "O campo telefone e obrigatório."
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
            message: "O campo data de nascimento e obrigatório."
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
            message: "O campo email e obrigatório."
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
            message: "O campo senha e obrigatório."
        },
        minLength: {
            value: 8,
            message: "A senha deve ter no minimo 8 caracteres"
        },
        pattern: {
            value: /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
            message: 'A senha deve conter pelo menos um caracter especial'
        }
    })
}

function newObjValidatorCep() {
    return ({
        required: {
            value: true,
            message: "O campo CEP e obrigatório."
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
            message: "O campo logradouro e obrigatório."
        },
        minLength: {
            value: 5,
            message: "Digite o endereço aonde voce mora"
        }
    })
}