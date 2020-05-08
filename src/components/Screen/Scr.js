import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Inputs/Input';

const Ground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 99vw;
    height: 99vh;
    background: #FAC905;
`;

const Title = styled.h1`
    color: #F94B4F;
    font-size: 2em;
    font-family: arial;
    width: 40vw;
`;

const Forml = styled.div`
    width: 40vw;
    height: 46vh;
    background: #FFFFAF;
    border-radius: 0.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Text = styled.p`
    color: #C3B704;
    font-size: 1.5em;
    font-family: arial;
`;

const Backl = (props) => {
    return (
        <Ground>
            <Title>Estudo de storybook</Title>
            <Forml>
                <Text>Se inscreva aqui</Text>
                <Input labelText="Nome" type="text" placeholder="Nome"/>
                <Input labelText="Email" type="email" placeholder="nome@mail.com"/>
                <Input labelText="Senha" type="password" placeholder="Inserir Senha"/>
                <Button width="8rem" height="2rem" background="#396FFF" color="#FFFFFF">Criar Conta</Button>
            </Forml>
        </Ground>
    );
}

export default Backl;