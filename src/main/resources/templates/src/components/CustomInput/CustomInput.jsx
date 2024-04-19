import React, { useState } from 'react'

const CustomInput = ({ limit, InputName, InputPattern, InputTitle, InputPlaceholder}) => {
    const [InputValue, setInputValue] = useState('');


    function handleChange(event) {
        const newValue = event.target.value.replace(/\D/g, '');

        if (newValue.length <= limit) {
            setInputValue(newValue);
        }
    }


    return (
        <input
            type="text"
            className="signup-form-input"
            value={InputValue}
            onChange={handleChange}
            name={InputName}
            pattern={InputPattern} //\d{3}\.\d{3}\.\d{3}-\d{2}
            title={InputTitle} //Digite um CPF válido no formato XXX.XXX.XXX-XX
            placeholder={InputPlaceholder}//'___.___.___-__'
            required
        />
    )
}

export default CustomInput