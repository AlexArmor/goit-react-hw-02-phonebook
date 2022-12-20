import styled from 'styled-components';

export const Form = styled.form`
border: 1px solid green; 
width: 400px;
padding: 10px;
`;

export const Title = styled.h3`
margin-top: 0;
`;

export const InputName = styled.input`
width: 200px;
display: block;
`;

export const InputNumber = styled.input`
width: 200px;
display: block;
margin-bottom: 15px;
`;

export const BtnSubmit = styled.button`
width: 100px;
height: 30px;
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: orange;
}
`;