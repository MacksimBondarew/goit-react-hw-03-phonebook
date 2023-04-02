import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const svgAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    margin-top: 0px;
`;

export const FilterNameLabel = styled.label`
    display: flex;
    align-items: center;
    position: relative;
`;

export const FilterNameSpan = styled.span`
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    color: #555;
    animation: ${fadeInAnimation} 0.5s ease-in-out;
`;

export const FilterImput = styled.input`
    padding: 10px;
    border-radius: 20px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #eee;
    outline: none;
    flex-grow: 1;
    background-color: #fff;
    transition: all 0.2s ease-in-out;

    &:focus {
        border-bottom: 2px solid #3f51b5;
    }

    &::placeholder {
        color: #bbb;
    }
`;

export const FilterImputIcon = styled.svg`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: #bbb;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        animation: ${svgAnimation} 1s ease-in-out infinite;
        fill: #3f51b5;
    }

    &:active {
        fill: #3f51b5;
    }
`;
