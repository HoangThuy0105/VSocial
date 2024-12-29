 
import axiosInstance from "./axios";

export const createArticle = async (formData) => {
  try {
    const response = await axiosInstance.post('/v1/post', formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};



  // Phương thức gọi API để lấy danh sách bài viết
  // async getArticles() {
  //   try {
  //     const response = await axiosInstance.get("v1/post");
  //     return response.data; // Trả về dữ liệu từ server
  //   } catch (error) {
  //     console.error("Lỗi khi lấy danh sách bài viết:", error);
  //     throw error;  
  //   }
  // }
 