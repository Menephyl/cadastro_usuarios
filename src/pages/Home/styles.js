import styled from "styled-components";
 


export const Container = styled.div`

 background-image: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(24, 62, 70, 1) 100%); 
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-evenly;
padding:20px ;
min-height:100vh;

`



export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.2rem;
max-width: 32rem;
background-color: inherit;
`

export const Title = styled.h2`
color: #fff;
text-align: center;
font-size:36px;
font-weight:600;
font-style:normal;

`

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Inputs = styled.input`
border-radius:0.6rem;
border: 1px solid black;
background-color: #fff;
padding: 12px 20px;
outline: none;
`

export const InputLabel = styled.label`
color: #fff;
font: 12px 500;
span{
    color: #ff0000;
    font-weight:bolder;

}
`

