import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

  // useState
  const [inputValue, setinputValue] = useState('');

  // Mostramos valores actualizados del input cuando la persona escribe algo
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setinputValue(e.target.value);
  }
  // Manejo de enter
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('handleSubmit', inputValue);

    // validación
    if (inputValue.trim().length > 2) {
      // obtenemos información de otro componente con 
      setCategories(cats => [inputValue, ...cats]);
      setinputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

    </form>
  )
}
// setCategories --> sera requerido usar esta función
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}