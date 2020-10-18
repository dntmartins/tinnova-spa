import api  from './baseApi';

const deleteCar = async (id) => {
    const url = `/veiculos/${id}`;
    const response = await api.delete(url);
    return response.data;
  };


export default deleteCar;