import React from 'react';

function Navbutton( {buttonText, disabled } ) {
    return (
        <button
            onClick={ () =>  console.log(buttonText) }
            disabled={ disabled }
        >
            <p>{ buttonText }</p>
        </button>
    );
}

export default Navbutton;