

interface TitleCourseProps {
   title1?:string,
   title2?:string ,
   title3?:string,
   title4?:string 
}

const TitleCourse: React.FC<TitleCourseProps> = ({
     title1, 
     title2, 
     title3,
      title4 }) => {
      return (
         <div className="text-center mb-[50px] ">
            <h2 className="text-[40px]"><span className="text-secondary ">{title1} </span> {title2} <br/> {title3} <span className="text-primary">{title4}</span></h2>
         </div>
      )
}

export default TitleCourse;