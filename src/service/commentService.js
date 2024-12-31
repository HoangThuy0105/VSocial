import axios from "axios";
import axiosInstance from "./axios";
import store from '../store';

const token = store.getters['auth/getToken'];

export const checkComment = async (request) => {
    try {
        const response = await axios.post("http://127.0.0.1:5000/comment/predict-toxic", request);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const createComment = async (request) => {
    try {
        const response = await axiosInstance.post("v1/comment", request, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getComment = async (request) => {
    try {
        const response = await axiosInstance.get(`v1/comment/${request}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};