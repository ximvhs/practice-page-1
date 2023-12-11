import React from 'react';
import Card from './Card';
import styled from "styled-components" 

const CardListContent = styled.div `
    display: grid;  
    grid-template-columns: repeat(3, 1fr);
    gap: 100px 10px;
`;

const CardList = () => {
    return (
        <CardListContent>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </CardListContent>
    );
};

export default CardList;