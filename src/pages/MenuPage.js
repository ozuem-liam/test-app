import React, { Component } from 'react';
import FetchMeal from '../context/context';
import styled from '@emotion/styled';

const MenuWrapper = styled.div`
.Learn-more {
    color: white;
    background: var(--mainYellow);
    font-size: 15px;
    width: 150px;
    height: 40px;
    border: 2px solid var(--mainYellow);
    border-radius: 1.5em;
    margin-bottom: 1em;
}
`;
class MenuPage extends Component {

    render() {
        return (
                <MenuWrapper>
                    <FetchMeal />
                    <button className="Learn-more">Learn More</button>
                </MenuWrapper>
        );
    }
}

export default MenuPage;
