
import api from "../../../services/ApiClient";

// دا افتراض ان الداتا اللى بناخدها من ال API بالشكل ده
interface Credentials {
  email: string;
  password: string;

}

interface UserData {
  name?: string;
  email: string;
  password: string;
}

export const login = async (credentials: Credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};

export const register = async (userData: UserData) => {
  const { data } = await api.post("/auth/register", userData);
  return data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout" , {});
  return data;
};