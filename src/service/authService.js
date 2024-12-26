import axios from "axios";
import axiosInstance from "./axios";

export const register = async (userData) => {
  try {
    const response = await axiosInstance.post("v1/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("v1/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error in login:", error.response || error.message);
    throw error.response
      ? error.response.data
      : { message: "An unexpected error occurred" };
  }
};

const logout = () => {
  return axios.post("http://localhost:8888/api/Account/logout");
};
export { logout };
