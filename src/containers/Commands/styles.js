import styled from "styled-components";


export const Container = styled.div `
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width: 414px;
height: 896px;

`;

export const User = styled.li`   

display: flex;
justify-content: space-around;
align-items: center;
`;

export const Image = styled.img`
width: 246px;
height: 354px;
margin-top: 30px;

`;

export const H1 = styled.h1`
color:#ffffff;
margin-left: 101px;
margin-right: 100px;
width:213px;
height: 33px;
font-size:28px;

`;


export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 56px;

`;


export const Button = styled.button`
 width:342px;
 height: 68px;
 background: #FFFFFF24;
 margin-top: 5px;


 border-radius: 8px;
 font-size: 17px;
 font-weight: 900;
 line-height: 3px;
 letter-spacing: 0px;
 text-align: center;
 color: #FFFFFF;
 cursor: pointer;

 display: flex;
 align-items: center;
 justify-content: center;

 &:hover{
    opacity:0.8;
 }

 &:active{

  opacity:0.5

 }




`







