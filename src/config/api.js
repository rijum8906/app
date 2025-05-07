const BASE_URL = "https://api.example.com";

const API = {
  LOGIN: `${BASE_URL}/auth/login`,
  REGISTER: `${BASE_URL}/auth/signup`,
  GET_USER: `${BASE_URL}/user/profile`,
  UPDATE_PROFILE: `${BASE_URL}/user/update`,
  // Add more endpoints as needed
};

export default API;
