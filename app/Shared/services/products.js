import axios from "axios";

export const getPopularProducts = async () => {
  //   const result = await axios
  //     .get(
  //       "https://raw.githubusercontent.com/christkv/ecommerce/master/preload_data/products.json"
  //     )
  //     .then((response) => {
  //       console.log("???...???", JSON.parse([response?.data]));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   return result;
  try {
    const result = await axios.get(`https://fakestoreapi.com/products`);
    return result;
  } catch (error) {
    return error.response;
  }
};
