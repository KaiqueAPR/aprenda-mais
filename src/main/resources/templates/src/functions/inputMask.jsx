export const InputMask = ({ regex, value, inputName }) => {


    const maskDdd = (value, regex, type) => {
        // 1 - Verificar se o valor e igual = (00 ou se e igual a 
        const regexOnlyTwoNummbers = /\(\d{2}/

        if (regexOnlyTwoNummbers.test(value)) {
            return value
            // Se Sim ele retorna o valor sem alteração
        } else {
            // se nao ira remover todos os caracteres que nao sejam numeros
            const mask = value.replace(/\D/g, '');
            return mask.replace(/(\d{2})/, '($1)');
            // E adiciona a mascara (00)
        }
        return 'a';

    }

    const maskPhone = (value, regex, type) => {
        const mask = value.replace(/\D/g, '');
        if (mask.length >= 6) {
            const maskValue = mask.replace(/(\d{5})(\d{1})/g, '$1-$2');
            return maskValue;
        } else {
            return mask;
        }
    }

    const maskCpf = (value, regex, type) => {
        const mask = value.replace(/\D/g, '');

        if (mask.length >= 4 && mask.length <= 6) {
            const maskValue = mask.replace(/(\d{3})(\d{1})/g, '$1.$2');
            return maskValue;
        }
        else if (mask.length >= 7 && mask.length <= 9) {
            const maskValue = mask.replace(/(\d{3})(\d{3})(\d{1})/g, '$1.$2.$3');
            return maskValue;
        }
        else if (mask.length >= 10 && mask.length <= 11) {
            return mask.replace(/(\d{3})(\d{3})(\d{3})(\d{1})/g, '$1.$2.$3-$4');
        } else {
            return mask;
        }

        // if (mask.length !== 11) {
        //     return mask;
        //   } else {
        //   return mask.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
        // }


    }

    const maskCep = (value, regex, type) => {
        const mask = value.replace(/\D/g, '');
         if (mask.length >= 6) {
            return mask.replace(/(\d{5})(\d{1})/, '$1-$2');
         }else {
            return mask;
        }
    }


    switch (inputName) {
        case 'ddd':
            return maskDdd(value, regex, 'ddd')

        case 'telefone':
            return maskPhone(value, regex, 'telefone')

        case 'cpf':
            return maskCpf(value, regex, 'cpf')

        case 'cep':
            return maskCep(value, regex, 'cep')

        default:
            return '';
    }




}

export default InputMask

