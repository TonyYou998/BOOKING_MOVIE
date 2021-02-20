import axios from "axios";
// export default axios.create({
//   // khởi tạo api
//   baseURL: "https://movie0706.cybersoft.edu.vn/api",
// });

const mainAPi = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
});
const mockApi = axios.create({
  baseURL: "https://5f826f3d06957200164334ca.mockapi.io/api",
});
export { mainAPi, mockApi };
