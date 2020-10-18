import api  from './baseApi';

const carsList = async () => {
    const url = `/veiculos`;
    const response = await api.get(url);
    console.log(response)
    return response.data;
  };


export default carsList;