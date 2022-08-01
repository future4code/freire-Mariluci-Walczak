import styled from "styled-components";

export const AppContainer = styled.div`
border: 3px solid green;
height: 98vh;
box-sizing: border-box;
width: 480px;
margin: auto;
display: flex;
flex-direction: column; 
`
export const MessagesContainer = styled.div`
flex-grow: 1;
padding: 10px;
display: flex;
flex-direction: column-reverse;
flex-wrap:nowrap
`
export const InputsContainer = styled.div`
display: flex;
`
export const NameInput = styled.input`
width: 100px;
`
export const MessageInput = styled.input`
flex-grow: 1;
`