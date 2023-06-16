import axios from "axios";

const api = axios.create({
  baseURL: "https://banco-dados.vercel.app/users",
  // json-server --watch db_usuarios.json --port 3004
});

export default api;