import React, { useState } from "react";

function Form() {
    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [city, setCity] = useState('');
    // const [module, setModule] = useState('');

    const [input, setInput] = useState({
        name: '',
        age: '',
        city: '',
        module: '',
    })

    const handleChange = ({ target }) => {
        setInput({...input,
            [target.name]:  target.value})
    }

    // console.log(name, age, city, module);
    console.log(input);

    return (
        <form>
            <label htmlFor="name">Nome completo</label>
            <input
                type="text"
                id="name"
                name="name"
                value={ input.name }
                onChange={ handleChange }
            ></input>

            <label htmlFor="age">Idade</label>
            <input
                type="number"
                id="age"
                name="age"
                value={ input.age }
                onChange={ handleChange }
            ></input>

            <label htmlFor="city">Cidade</label>
            <input
                type="text"
                id="city"
                name="city"
                value={ input.city }
                onChange={ handleChange }
            ></input>

            <legend>Módulo</legend>

            <input 
                type="radio"
                id="fundamentals"
                name="module"
                value="Fundamentos"
                checked={input.module === 'Fundamentos'}
                onChange={ handleChange }
            ></input>
            <label htmlFor="fundamentals">Fundamentos</label>

            <input 
                type="radio"
                id="frontend"
                name="module"
                value="Front-end"
                checked={input.module === 'Front-end'}
                onChange={ handleChange }
            ></input>
            <label htmlFor="frontend">Front-end</label>

            <input 
                type="radio"
                id="backend"
                name="module"
                value="Back-end"
                checked={input.module === 'Back-end'}
                onChange={ handleChange }
            ></input>
            <label htmlFor="backend">Back-end</label>
            
            <input 
                type="radio"
                id="cc"
                name="module"
                value="Ciência da Computação"
                checked={input.module === 'Ciência da Computação'}
                onChange={ handleChange }
            ></input>
            <label htmlFor="cc">Ciência da Computação</label>
        </form>

    );
}

export default Form;
