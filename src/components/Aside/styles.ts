import styled from 'styled-components';

export const Container = styled.div `
    grid-area: AS;
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.color.gray};

`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;

`;
export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`;
export const MenuItemLink = styled.a`
    color: ${props => props.theme.color.info};
    text-decoration: none;

    margin: 7px 0;
    display: flex;
    align-items: center;
    transition: opacity: 3s;
    &:houver {
        opacity: .7;
    }

    >svg {
        font-size: 18px;
        margin-right: 5px;
    }
    
`;