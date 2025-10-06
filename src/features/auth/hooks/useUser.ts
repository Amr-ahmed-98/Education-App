import { useApiQuery } from "@/hooks/useApiQuery";
import { userApi  } from "../api/userApi";
import type { User} from '../api/userApi';

export function useUser(id: string){
      return useApiQuery<User>(
      ["user", id],
      ()=> userApi.getUser(id)
      )
}