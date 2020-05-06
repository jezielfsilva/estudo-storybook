import React from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
    width: 10vw;
    height: 6vh;
    border-radius: 1em;
    font-size: 0.9em;
    color: #FEA000;
    background: #CCC678;
`;

 const Button = (props) => {
   return (
       <ButtonS>Clickar aqui</ButtonS>
   )
}

export default ButtonS;