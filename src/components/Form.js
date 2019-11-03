import React from 'react';

function Form( {q, handleInput, handleFormSubmit }) {
    return(
        <form>
            <input
                id="Title"
                type="text"
                value={q}
                name="q"
                placeholder="Doctor Sleep" 
                onChange={handleInput}
                required
                />
            <button 
                onClick={handleFormSubmit}
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default Form;