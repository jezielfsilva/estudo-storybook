import React from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.2em;
    font-size: 0.9em;
    color: ${props => props.color};
    background: ${props => props.background};
    border-style: none;
    font-size: 1.2em;
`;

 const Button = (props) => {
   return (
   <ButtonS
        background={props.background}
        width={props.width}
        height={props.height}
        color={props.color}
   >{props.children}</ButtonS>
   )
}

export default Button;