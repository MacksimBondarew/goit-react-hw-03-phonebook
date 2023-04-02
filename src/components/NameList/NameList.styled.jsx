import styled, { keyframes } from 'styled-components';

export const ContactsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
    margin-bottom: 10px;
    animation: fadeIn 0.5s ease-in-out;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    &.fadeOut {
        animation: fadeOut 0.5s ease-in-out forwards;
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;

export const ContactNameSpan = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: auto 0;
`;

export const ContactNumberSpan = styled.span`
    font-size: 14px;
    color: #666;
    margin: auto 0;
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

const fadeOutAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;
export const RemoveContact = styled.button`
    padding: 8px 12px;
    background-color: #f44336;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #d32f2f;
        svg {
            animation: ${svgAnimation} 1s ease-in-out infinite;
        }
    }

    &:active {
        background-color: #b71c1c;
        svg {
            fill: #f44336;
        }
        + ${ContactItem} {
            animation: ${fadeOutAnimation} 0.5s ease-in-out forwards;
        }
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.4);
    }

    svg {
        width: 20px;
        height: 20px;
        fill: #fff;
        margin-right: 5px;
        transition: all 0.2s ease-in-out;
    }
`;