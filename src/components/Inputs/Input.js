import React from 'react';
import styled from 'styled-components';

const InputFrm = styled.input`
    width: 18vw;
    height: 4.8vh;
    border-radius: 0.3em;
    border: 0.07em solid #090000;
    background: #FFFFAF;
    font-size: 1.2em;
`;

const Input = (props) => {
    return (
        <InputFrm/>
    );
}

export default Input;