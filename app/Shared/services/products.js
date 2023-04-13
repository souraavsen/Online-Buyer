import axios from "axios";

export const handleFetchProducts = async () => {
  try {
    const result = await axios.get(`https://fakestoreapi.com/products`);
    return result;
  } catch (error) {
    return error.response;
  }
};
