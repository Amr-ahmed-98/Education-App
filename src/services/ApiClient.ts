import axiosInstance from "./AxiosConfig";

class ApiClient {
  get<T>(url: string, params?: Record<string, any>): Promise<T> {
    return axiosInstance.get<T>(url, { params }).then(res => res.data);
  }
  post<T>(url: string, data?: any) : Promise<T>{
    return axiosInstance.post<T>(url, data).then(res => res.data);
  }
  put<T>(url: string, data?: any): Promise<T> {
    return axiosInstance.put<T>(url, data).then(res => res.data);
  }
  delete<T>(url: string): Promise<T> {
    return axiosInstance.delete<T>(url ).then(res => res.data);
  }
}
export default new ApiClient();
