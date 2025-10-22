import { apiGetCourse } from "../api/apiGetCourse";
import { useQuery } from "@tanstack/react-query";
import type { CoursesResponse } from "../api/apiGetCourse";



export const usePublicCourses = (page:number , pageSize: number)=>{
    return useQuery<CoursesResponse , Error>({
        queryKey: ['publicCourses', page, pageSize],
        queryFn: () => apiGetCourse(page, pageSize),
    })
}