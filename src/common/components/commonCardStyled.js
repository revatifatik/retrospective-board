import styled, { css } from "styled-components";
import { InputTextarea } from 'primereact/inputtextarea';

export const Container = styled.div`
max-width: 1440px;
margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
    text-align:center;
    margin-bottom:40px;
    ${props => props.inline ? css`
    display: flex;
    align-items: center;
    justify-content: center;` : css``}
`;

export const Header = styled.h1`
    font-size: 18px;
    text-decoration: underline;
    ${props => props.mainHeader ? css`
    box-sizing: border-box;
    display: inline;
    border: 1px solid #2d2d2d;
    padding: 10px;
    box-shadow: -5px 5px #aeaeae;
    `: ``}
`;

export const Icon = styled.span`    
color: white;
background: #6ed66e;
border-radius: 50%;
font-size:20px;
margin-left:15px;
`;

export const CardMain = styled.div`
    width: 80%;
    min-height: 150px;
`;

export const InputTextareaStyled = styled(InputTextarea)`
&.p-inputtext {
    background-color: ${props => props.cardColor ? props.cardColor : '#f5cdab'};
    border: 1px solid  ${props => props.cardColor ? props.cardColor : '#f5cdab'};
    border-bottom-right-radius: 15%;
}
margin: 0 5px;

`;


