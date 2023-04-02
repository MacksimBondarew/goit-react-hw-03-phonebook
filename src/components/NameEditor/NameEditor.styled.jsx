import styled from 'styled-components';


export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
`;


export const LabelName = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
`;

export const LabelPhone = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-align: center;
`;

export const NameInput = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: #0088cc;
    }

    &:invalid {
        border-color: #e74c3c;
    }
`;

export const NumberInput = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border: 2px solid #ccc;
    border-radius: 5px;

    &:focus {
        outline: none;
        border-color: #0088cc;
    }

    &:invalid {
        border-color: #e74c3c;
    }
`;

export const AddContactButton = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    background-color: #0088cc;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #006699;
    }
`;
