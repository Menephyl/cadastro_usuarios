import styled from "styled-components";


export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

export const Title = styled.h1`
color: #fff;
text-align: center;
font-size:36px;
font-weight:600;
font-style:normal;
margin: 10px;
`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 400px 400px;
gap: 20px;
margin: 30px 10px;
@media (max-width:750px){
grid-template-columns:1fr;
}
`

export const CardUsers = styled.div`
padding: 16px;
background-color: #0c2269ff;
border-radius:32px;
display: flex;
justify-content:space-between;
align-items: center;
gap: 20px;
max-width: 380px;



h3{
    font-size: 24px;
    color: #fff;
    margin-bottom:3px;
    text-transform:capitalize;
}
p{
    color: #fff;
    font-size: 12px;
    font-weight: 200;
}
`

export const TrashIcon = styled.img`
/* background-color: aliceblue; */
width: 24px;
  height: 24px;
  cursor: pointer;
  /* padding-left:30px; */
  &:hover{
    opacity: 0.7;
  }
  &:active{
    opacity: 0.4;
  }
`

export const AvatarUser=styled.img`
height: 80px;
`
