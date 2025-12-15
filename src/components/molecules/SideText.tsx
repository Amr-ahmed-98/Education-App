
import {Button} from "../atoms/Button";
import GetX from '@/animation/GetX';
interface SideTextProps{
    title?: string,
    subtitle1?: string ,
    subtitle2?: string ,
    subtitle3?: string ,
    description?:string,
    button1?: string,
    button2?: string;
}

const SideText : React.FC<SideTextProps> = ({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    button1,
    button2
}) =>{
    return(
        <section className="grid py-[100px] items-center">
      <div >
        <GetX direction="right">
        <Button variant="outline1" size="lg">{title}</Button>
        </GetX>
        <GetX direction="left">
        <h1 className="mb-6 mt-[10px] text-b text-[48px] leading-[70px]"><span className="text-primary">{subtitle1}</span> {subtitle2} <span className="text-secondary"><br/>{subtitle3} </span></h1>
        </GetX>
         <GetX direction="top">
        <p className="text-text-grayDark dark:text-text-grayLight mb-[20px]">{description}</p>
        </GetX>

        <div className="flex gap-5">

                        <Button variant="primary" size="lg" path="/contact-us">{button1}</Button>
           
                        <GetX direction="right">
                    <Button variant="secondary" path="/Instructor" size="lg">{button2}</Button>
                    </GetX>
        </div>
     
    </div>
        </section>
    )
}

export default SideText;