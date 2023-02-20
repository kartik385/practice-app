import axios from "axios";
import Constants from "expo-constants";
const apiKey = Constants.expoConfig?.extra?.apiKey;
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

api.interceptors.request.use((config) => {
  config.url += `api_key=${"f5a3bc89dadbd14aede106400bf19a2d"}&language=en-US&region=US&page=1`;
  return config;
});
