import React from 'react';

// mb-3 = margin-bottom: 3 rem
// include text and icon for parameters
function FormInputGroup({text, icon, placeholder, value, onInput, onkeyup, readOnly = false}) {
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'>{text}{icon}</span>
        <input 
            type='number' 
            className='form-control' 
            placeholder={placeholder}
            value={value} 
            onInput={onInput}
            onKeyUp={onkeyup}
            readOnly={readOnly}
        />
    </div>

  )
}

export default FormInputGroup;