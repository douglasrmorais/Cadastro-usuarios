import styled from "styled-components"

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '2px solid #FF00FF'};
    background: ${props => props.theme === 'primary' ? ' linear-gradient(180deg, #FE7E5D, 0%, #FF6378 100%)' : 'transparent'};
    font-size: 16px;
    color: #ffffff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
     ${props => props.theme === 'primary' ? 'opacity: 0.8' : 'background: black; opacity: 0.9'};
    }

    &:active {
        ${props => props.theme === 'primary' ? 'opacity: 0.6' : 'opacity: 0.5'};
    }

`