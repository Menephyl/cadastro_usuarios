import styled from 'styled-components'

export const Button = styled.button`
border: ${(props) => props.theme === 'primary' ? 'none' : '2px solid #ffffffff'};
 background: ${(props) => props.theme === 'primary'
        ? 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(24, 62, 70, 1) 100%)'
        : 'transparent'};
 font-size:16px;
 color: #ffffffff;
 padding: 16px 32px;
 width: fit-content;
 cursor: pointer;
 border-radius:30px;

 &:hover{
opacity: 0.6;
 }
&:active{
    opacity:0.2;
}



`