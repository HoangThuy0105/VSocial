import axiosInstance from "./axios";
import store from '../store';

const token = store.getters['auth/getToken'];

export const searchUsers = async ({ accountId, keyword }) => {
    try {
        const response = await axiosInstance.get("v1/users/search", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { accountId: accountId, keyword: keyword },
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const addFriend = async (request) => {
    try {
        const response = await axiosInstance.post("v1/friend/add", request, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};
