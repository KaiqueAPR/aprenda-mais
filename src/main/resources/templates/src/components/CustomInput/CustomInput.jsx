import React, { useState } from 'react'

const CustomInput = ({ limit, InputValue, HandleChangeProp, InputName, InputPattern, InputTitle, InputPlaceholder}) => {
    // const [InputValue, setInputValue] = useState('');


    // function handleChange(event) {
    //     const newValue = event.target.value.replace(/\D/g, '');
    //     setInputValue(newValue);
    // }


    return (
        <input
            type="text"
            className="signup-form-input"
            value={InputValue}
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