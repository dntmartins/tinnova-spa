import React, { useEffect, useState} from 'react';
import carsList from '../../services/carsList';
import { Container, Title } from './styles';


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
      <Title>Todos os Veículos</Title>
       <ul>
        {cars.map(item => {
          console.log(item)
          return <li>{`Marca: ${item.marca} / Veiculo: ${item.veiculo}`}</li>;
        })}
      </ul>
    </Container>
  );
}

export default Main;