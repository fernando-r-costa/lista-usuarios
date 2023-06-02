import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3004/users",
  // json-server --watch db_usuarios.json --port 3004
});

export default api;