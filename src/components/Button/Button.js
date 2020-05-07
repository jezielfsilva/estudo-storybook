import React from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
    width: 18vw;
    height: 5vh;
    border-radius: 0.2em;
    font-size: 0.9em;
    color: #FEA000;
    background: #CCC678;
    border-style: none;
    font-size: 1.2em;
`;

 const Button = (props) => {
   return (
       <ButtonS>clickar aqui</ButtonS>
   )
}

export default Button;