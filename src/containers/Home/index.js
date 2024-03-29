import React,{useState, useRef} from "react";
import BurgerClub from "../../assents/burger Front.svg";
import {Container,H1,Image, ContainerItens, Input, InputLabel}  from "./styles";

import axios from 'axios';

function Home () {

  const [ newCommands, setNewCommands] = useState([]);

 const history = useHistory();

 const inputOrder = useRef()
 const inputClient = useRef()

 async function joinNewCommands(){

 const { data:newCommands} = await axios.post("http://localhost:3001/commands",{
    order: inputOrder.current.value,
    clientName: inputClient.current.value,
 });

setNewCommands([...newCommands, newCommands])

  history.push('/commands')

 
}


return (
<Container>
      <Image alt="logo-imagem" src= {BurgerClub} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClient} placeholder="Nome" />
        <Button onClick={joinNewCommands}>Novo Pedido      
        </Button>
   
      </ContainerItens>
    </Container>
)


}

export default Home