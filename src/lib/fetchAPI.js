import axios from "axios";
export const BASE_URL =
  "http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1";

const headers = { "Content-Type": "application/json", UserID: "Sin" };

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

export default axiosInstance;
