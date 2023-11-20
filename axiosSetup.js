import axios from "axios";
import { API_URL } from "./config";

// Setting default url for the artworks axios instance used accross the app
const artworksAPI = axios.create({
  baseURL: API_URL,
});

export default artworksAPI;
