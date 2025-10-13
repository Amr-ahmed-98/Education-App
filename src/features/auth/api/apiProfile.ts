import ApiClient from "@/services/ApiClient";

export interface ProfileResponse{
    id:string;
    email:string;
    role:string;
}

export function getProfile(): Promise<ProfileResponse>{
    return ApiClient.get<ProfileResponse>("/auth/profile");
}