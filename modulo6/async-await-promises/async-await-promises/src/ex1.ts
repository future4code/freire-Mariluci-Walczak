import axios from "axios"
import { baseURL } from "./baseURL"

//a. Qual endpoint você deve utilizar para isso? - getSubscribers

//b. Como indicamos o tipo de uma função assíncrona que retorna um 
//"array de qualquer coisa"?

// c.
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };