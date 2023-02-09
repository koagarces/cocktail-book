import { BASE_URL } from "./base";
import axios from "axios";

export const getCocktailByName = async (data) => {
  try {
    const res = await axios.get(`${BASE_URL}/search.php?s=${data}`);
    return res.data.drinks;
  } catch (error) {
    throw error;
  }
};
