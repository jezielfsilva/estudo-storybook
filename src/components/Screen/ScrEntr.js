import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Input from '../Inputs/Input';

const Back = styled.div`
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

const Form = styled.div`
    width: 40vw;
    height: 46vh;
    background: #FFFFFF;
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

const Scre = (props) => {
    return (
        <Back>
            <Title>Estudo sobre Storybook</Title>
            <Form>
                <Text>Entre na sua conta</Text>
                <Input labelText="Email" type="email" placeholder="nome@mail.com"/>
                <Input labelText="Senha" type="password" placeholder="Inserir Senha"/>
                <Button width="8rem" height="2rem" background="#DC2F28" color="#FFFFFF">Entrar</Button>
            </Form>
        </Back>
    );
}

export default Scre;