import React, { useEffect, useState} from 'react';
import { useFormik } from 'formik';
import carsList from '../../services/carsList';
import addCar from '../../services/addCar';
import { Container, Title, FormContainer } from './styles';
import qs from 'qs';


function Main() {
  const [cars, setCars] = useState([]);
  
  useEffect(()=>{
    async function listCars() {
      const result = await carsList();
      setCars(result);
    }
    listCars();
  }, []);

  const {getFieldProps, handleSubmit} = useFormik({
    initialValues: {
      created: '18/10/2020',
      updated: "",
    },
    onSubmit(values) {
      addCar(values);
      console.log(JSON.parse(qs.stringify(values)))
    }
  });

  return (
    <Container>
      <Title>Adicionar um veículo</Title>
      <FormContainer>
        <form form className="baseForm" onSubmit={handleSubmit} noValidate>
          <label>
           Veículo:
            <input {...getFieldProps("veiculo")} id="veiculo" type="text"/>  
          </label>
          <br></br>
          <label>
           Marca:
            <input {...getFieldProps("marca")} id="marca" type="text"/>   
          </label>
          <br></br>
          <label>
           Ano:
            <input {...getFieldProps("ano")} id="ano" type="text"/>  
          </label>
          <br></br>
          <label>
           Descrição:
            <input {...getFieldProps("descricao")} id="descricao" type="text"/>   
          </label>
          <br></br>
          <label>
           Vendido:
            <input {...getFieldProps("vendido")} id="vendido" type="text"/>   
          </label>
          <br></br>
          <input type="submit" value="Enviar" />
        </form>
      </FormContainer>
    </Container>
  );
}

export default Main;