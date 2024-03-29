

import React,{ useState, useEffect } from "react";
import BurgerClub from "../../assents/burger back.svg";
import Trash from "../../assents/trash.svg";
import { H1, Container, Image, ContainerItens, Input, InputLabel, Button} from "../Commands/styles";

function Commands () {
  const [ newCommands, setNewCommands] = useState([]);

 const history = useHistory();


 useEffect(()=> {
    
  async function fetchCommands(){
    
    const {data:allOrder} = await axios.get("http://localhost:3001/commands");
    setNewCommands(allOrder);


    fetchCommands();


  },[])


  async function deleteCommands(commandsId){
        await axios.delete(`http://localhost:3001/commands/${commandsId}`)

        const delCommands = newCommands.filter((commands)=> commands.id !== commandsId);
        setNewCommands(delCommands);

          }


          function goBackPage(){
            history.push('/')

          }






return (
<Container>
      <Image alt="logo-imagem" src= {BurgerClub} />

        <H1>Pedido</H1>
        <ContainerItens>
       
      
        <ul>
           {orden.map((commands)=>(
             <Order key={commands.id}>
             <p> {commands.orden} </p>< p> {commands.name}</p>
             <button><img src={Trash} alt="lata-de-lixo"/></button>
             </Order>
           ))}
        </ul>

        <Button  onClick={goBackPage}> Voltar</Button>

   
      </ContainerItens>

    </Container>
)


}

export default Commands