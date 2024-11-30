import axios from "axios";
import axiosInstance from "./axios";

export const register = async (userData) => {
  console.log("hhh", userData);
  try {
    const response = await axiosInstance.post("users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const login = async (credentials, router) => {
  try {
    const response = await axiosInstance.post("auth/login", credentials);
    console.log("Login response from server:", response.data);
    setTimeout(() => {
      router.push({ name: "/home" });
    }, 1000);
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
