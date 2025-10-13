import { getProfile } from "../api/apiProfile";
import { useApiQuery } from "@/hooks/useApiQuery";

export function useProfile(){
    return useApiQuery(["profile"], getProfile,{
      staleTime: 1000 * 60 * 5, //cache 5 دقائق    
    })
}