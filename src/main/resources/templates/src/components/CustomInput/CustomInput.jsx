import { InputMask } from '../../functions/inputMask';
import React from 'react';

const CustomInput = ({ limit, InputValue, HandleChangeProp, InputName, InputPattern, InputTitle, InputPlaceholder }) => {
    // const [InputValue, setInputValue] = useState('');


    // function handleChange(event) {
    //     const newValue = event.target.value.replace(/\D/g, '');
    //     setInputValue(newValue);
    // }

    const objDados = {
        regex: InputPattern,
        value: InputValue,
        inputName: InputName
    }


    return (

        // <input
        //     type="text"
        //     className="signup-form-input"
        //     value={InputValue}
        //     onChange={HandleChangeProp}
        //     name={InputName}
        //     pattern={InputPattern}
        //     title={InputTitle}
        //     placeholder={InputPlaceholder}
        //     maxLength={limit}
        //     required
        // />



        <input
            type="text"
            className="signup-form-input"
            value={InputMask(objDados)}
            onChange={HandleChangeProp}
            name={InputName}
            pattern={InputPattern}
            title={InputTitle}
            placeholder={InputPlaceholder}
            maxLength={limit}
            required
        />


    )
}

export default CustomInput