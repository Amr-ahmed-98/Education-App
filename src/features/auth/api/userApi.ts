import ApiClient from "@/services/ApiClient";
export interface User {
  id: string | number;
  name: string;
  email: string;
}


export const userApi = {
    getUser: (id:string | number ) => ApiClient.get<User>(`/users/${id}`),
    deleteUser: (id:string) => ApiClient.delete<void>(`/users/${id}`),
}



