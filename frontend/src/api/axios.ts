// phase 4.2: axios setup

import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export default api;
