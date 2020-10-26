import axios from 'axios';

// usar localhost caso rode localmente, usar ip da máquina na rede, caso use outros dispositivo
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;