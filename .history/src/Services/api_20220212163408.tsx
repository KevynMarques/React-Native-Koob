import axios from "axios";

 export default const api = axios.create({
  baseURL:'https://parallelum.com.br/fipe/api/v1'
})