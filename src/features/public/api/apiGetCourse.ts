import ApiClient from "@/services/ApiClient";

export interface CourseItem {
  _id: string;
  title: string;
  description?: string;
  level?: string; // هنا backend بيرجع id reference ل-level
  category?: string;
  cover?: string; // الصورة
  demoVideo?: string | null;
  instructor?: string; // غالباً id للمحاضر
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  // لو في حقول إضافية ضيفهم هنا
}
export interface CoursesListData {
  data: CourseItem[]; // المصفوفة الفعلية
  total: number;
  page: number;
  pageSize?: number;
  totalPages?: number;
}

export interface CoursesResponse {
  status: string; // "success"
  message: string;
  data: CoursesListData;
}


export function apiGetCourse(page: number, pageSize: number): Promise<CoursesResponse> {
  return ApiClient.get(`/course?page=${page}&pageSize=${pageSize}`);
}