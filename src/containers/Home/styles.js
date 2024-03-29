import styled from "styled-components";

export  const Container = styled.div `
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
width: 414px;
height: 896px;

`;

export const Image = styled.img`
  margin-top: 30px;
  width: 342px;
  height: 354px;
`;
export const H1 = styled.h1`
color:white;
margin-left: 101px;
margin-right:100px;
width: 213px;
height: 33px;
font-size: 28px;

`;
export const ContainerItens = styled.div`
   
   display: flex;
   flex-direction: column;
   margin-bottom: 56px;
   
   
`;

export const InputLabel = styled.p`
 width:55px;
 height:22px;
 margin-left: 10px;

 font-family: Roboto;
 font-size: 18px;
 font-weight: 700;
 line-height: 22px;
 letter-spacing: -0.40799999237060547px;
 text-align: left;
 `;


export const Input = styled.input`
  background:#FFFFFF40;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 8px;
  width: 342px;
  height: 58px;
  padding: 15px;
  margin-bottom: 42px;
;
  font-size: 20px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;

export const Button = styled.button`
width:342px;
height: 68px;
background: #d93856;

border-radius:8px;
font-size: 17px;
font-weight: 900;
line-height: 3px;
letter-spacing: 0px;
text-align:center;
color:#FFFFFF;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover{
  opacity:0.5;
  }
&:active{

  opacity:0.5;
}


`;













