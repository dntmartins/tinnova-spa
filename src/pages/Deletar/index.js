import React, { useEffect, useState} from 'react';
import carsList from '../../services/carsList';
import deleteCar from '../../services/deleteCar';
import { Container, Title, TextError } from './styles';


function Main() {
  const [cars, setCars] = useState([]);
  
  useEffect(()=>{
    async function listCars() {
      const result = await carsList();
      setCars(result);
    }
    listCars();
  }, []);

  return (
    <Container>
      <Title>Deletar Veículos</Title>
       <ul>
        {cars.map(item => {
          return <li id={item._id} >{`Marca: ${item.marca} / Veiculo: ${item.veiculo}`} <button onClick={()=>{
            deleteCar(item._id).then(()=>{
              const obj = document.getElementById(item._id);
              obj.remove();
            }).catch(()=>{
              return <TextError>Ocorreu um erro</TextError>
            });
          }}>Deletar</button></li>;
        })}
      </ul>
    </Container>
  );
}

export default Main;