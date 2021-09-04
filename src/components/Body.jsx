import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const BodyContainer = styled.div`
    flex: 0.8;
`;

const Body = () => {
    return (
        <BodyContainer>
            <Header/>
        </BodyContainer>
    )
}

export default Body
