 
import axiosInstance from "./axios";

export default {
  // Phương thức gọi API để đăng bài
  async postArticle(article) {
    try {
      const response = await axiosInstance.post("v1/post", article);
       
      if (response && response.data) {
        return response.data; // Trả về dữ liệu từ server
      } else {
        console.error("Phản hồi từ server không hợp lệ:", response);
        throw new Error("Phản hồi từ server không hợp lệ.");
      }
    } catch (error) {
      // Xử lý lỗi chi tiết
      console.error("Lỗi khi đăng bài viết:", error);
      
      // Nếu server trả về lỗi cụ thể, bạn có thể lấy thông tin lỗi chi tiết
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "Đã xảy ra lỗi khi đăng bài viết.");
      }
      
      // Ném lỗi chung nếu không có thông tin chi tiết
      throw error;
    }
    },



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
};