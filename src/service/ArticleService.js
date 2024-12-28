 
import axiosInstance from "./axios";

export default {
  async createArticle(formData) {
    try {
      const response = await axiosInstance.post('/v1/post', formData);
      console.log("Response from API:", response);
      return response.data;
    } catch (error) {
      console.error("Error in createArticle:", error);
      throw error;
    }
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
 