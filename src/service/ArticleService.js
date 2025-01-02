import axiosInstance from "./axios";
import store from '../store';

// const token = JSON.parse(localStorage.getItem("jwt"));
const token = store.getters['auth/getToken'];
// const accountId = store.getters['auth/getAccountId'];

export const createArticle = async (formData) => {
  console.log(Object.fromEntries(formData.entries()))
  const response = await axiosInstance.post('v1/post', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    }
  });
  return response;
}

export const getAllPort = async () => {
  try {
    const response = await axiosInstance.get("v1/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response; // Trả về dữ liệu từ server
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết:", error);
    throw error;
  }
}

export const getPortFriend = async (accountId) => {
  try {

    const response = await axiosInstance.get(`v1/post/friend/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết:", error);
    throw error;
  }
}

export const getMyPost = async (accountId) => {
  try {
    const response = await axiosInstance.get(`v1/post/acc/${accountId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách bài viết:", error);
    throw error;
  }
}
