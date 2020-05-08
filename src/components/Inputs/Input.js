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

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #423FC2;
        font-size: 1.2em;
    }
`;

const Input = (props) => {
    return (
        <>
            <Label>
                <p>{props.labelText}</p>
                <InputFrm placeholder={props.placeholder} type={props.type}/>
            </Label>
        </>
    );
}

export default Input;