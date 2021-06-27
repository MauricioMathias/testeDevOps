import React, { useState } from "react";

export default function Form(props){
    const [name, setName] = useState('');

    function handleSubmit(padrao){
        padrao.preventDefault();
        props.adTask(name);
        setName("")
    }
    function handleChange(padrao){
        setName(padrao.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            O que precisa ser feito?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Adicionar
        </button>
      </form>
    )
};