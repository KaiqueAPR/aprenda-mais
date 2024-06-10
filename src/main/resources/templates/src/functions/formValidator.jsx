
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
            value: 14,
            message: "Digite os 11 digitos do CPF (Somente Numeros)"
        },
        validate: {
            notValidCpf: (value) => {
                return (
                    verificaPrimeiroDigito(value) === true || 
                    "CPF REPROVADO"
                );
            }
        }
    })
}

function verificaPrimeiroDigito(cpf) {
    /**
     * 1 - Recebe o CPF, e calcula os 9 primeiros digitos do CPF de forma de crescente
     *  
     *  EX: 111.444.777-05 - Iremos pegar os 9 primeiros digitos (111.444.777) e multiplicar por 10, 9, 8, 7, 6, 5, 4, 3, 2
     *  Pegamos o resultado da multiplicação e somamos todos os resultados
     *  A soma total, dividimos por 11, e pegamos o resto da divisão
     *  Se o resto da divisão for menor que 2, o primeiro digito verificador deve ser 0
     *  Se o resto da divisão for maior que 2, o primeiro digito verificador deve ser 11 - resto da divisão
     *  Se o primeiro digito verificador for igual ao calculado, passamos para o segundo digito verificador
     */
    const cpfNumeros = cpf.replace(/[^\d]+/g, '').substring(0, 9);
    const cpfPrimeiroDigitoVerificador = parseInt(cpf.replace(/[^\d]+/g, '').substring(9, 10));
    //const cpfSegundoDigitoVerificador = cpf.replace(/[^\d]+/g,'').substring(10, 11);
    let somaCrescente = 10;
    let somaCrescenteTotal = 0;

    // Realiza a multiplicação dos 9 primeiros digitos do CPF
    for (let i = 0; i < cpfNumeros.length; i++) {
        let multiplicacao = 0;

        if (i == 0) {
            multiplicacao = cpfNumeros.substring(0, 1) * somaCrescente;
            somaCrescenteTotal = multiplicacao + somaCrescenteTotal;
        } else {
            multiplicacao = cpfNumeros.substring(i, i + 1) * somaCrescente;
            somaCrescenteTotal = multiplicacao + somaCrescenteTotal;
        }

        // console.log(multiplicacao);
        // console.log(somaCrescenteTotal);
        somaCrescente--;
    }

    // Captura o resto da divisão
    let divisaoTotal = somaCrescenteTotal % 11;

    // Se o resto da divisão for menor que 2, o primeiro digito verificador deve ser 0
    if (divisaoTotal < 2) {
        return cpfPrimeiroDigitoVerificador === 0 ? verificaSegundoDigito(cpf) : false;
    } else {
        // Se o resto da divisão for maior que 2, o primeiro digito verificador deve ser 11 - resto da divisão
        return cpfPrimeiroDigitoVerificador === 11 - divisaoTotal ? verificaSegundoDigito(cpf) : false;
    }

}

function verificaSegundoDigito(cpf) {
    const cpfNumeros = cpf.replace(/[^\d]+/g, '').substring(0, 10);
    const cpfSegundoDigitoVerificador = parseInt(cpf.replace(/[^\d]+/g, '').substring(10, 11));
    let somaCrescente = 11;
    let somaCrescenteTotal = 0;

    // Realiza a multiplicação dos 9 primeiros digitos do CPF
    for (let i = 0; i < cpfNumeros.length; i++) {
        let multiplicacao = 0;

        if (i == 0) {
            multiplicacao = cpfNumeros.substring(0, 1) * somaCrescente;
            somaCrescenteTotal = multiplicacao + somaCrescenteTotal;
        } else {
            multiplicacao = cpfNumeros.substring(i, i + 1) * somaCrescente;
            somaCrescenteTotal = multiplicacao + somaCrescenteTotal;
        }

        // console.log(multiplicacao);
        // console.log(somaCrescenteTotal);
        somaCrescente--;
    }

    // Captura o resto da divisão
    let divisaoTotal = somaCrescenteTotal % 11;

    // Se o resto da divisão for menor que 2, o primeiro digito verificador deve ser 0
    if (divisaoTotal < 2) {
        return cpfSegundoDigitoVerificador === 0 ? true : false;
    } else {
        // Se o resto da divisão for maior que 2, o primeiro digito verificador deve ser 11 - resto da divisão
        return cpfSegundoDigitoVerificador === 11 - divisaoTotal ? true : false;
    }

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
            value: /[ !@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]/,
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