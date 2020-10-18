import api  from './baseApi';

const carsList = async (car) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
    const url = `/veiculos`;
    const response = await api.post(url, car, config);
    return response.data;
  };


export default carsList;