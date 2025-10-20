// import {usePublicCourses} from '../../features/public/hooks/useGetCourses';

// function CoursesList() {
//   const { data, isLoading, error } = usePublicCourses(6,1);

//   console.log("API full response:", data);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>خطأ في الاتصال بالسيرفر: {String(error.message)}</p>;

//   // بناءً على شكل الـ response: data.data.data هو المصفوفة الفعلية
//   // - data (react-query) => CoursesResponse
//   // - data.data => CoursesListData
//   // - data.data.data => CourseItem[]
//   const courseList = data?.data?.data ?? [];

//   if (courseList.length === 0) {
//     return <p>لا يوجد كورسات حاليا</p>;
//   }

//   return (
//     <div>
//       {courseList.map((course: any) => (
//         <div key={course._id} className="mb-6">
//           <h3 className="text-lg font-semibold">{course.title}</h3>
//           {course.cover && <img src={course.cover} alt={course.title} className="w-full max-w-xs" />}
//           {course.description && <p>{course.description}</p>}
//         <p>Level: {typeof course.level === "object" ? course.level?.name : course.level}</p>

//           <p>Created at: {new Date(course.createdAt || "").toLocaleDateString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CoursesList;

function Instructor() {
  return (
    <div>Instructor</div>
  )
}

export default Instructor