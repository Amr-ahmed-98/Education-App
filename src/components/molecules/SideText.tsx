
import Button from "../atoms/Button";
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
        <Button variant="outline1" size="lg">{title}</Button>
        <h1 className="mb-6 mt-[10px] text-b text-[48px] leading-[70px]"><span className="text-primary">{subtitle1}</span> {subtitle2} <span className="text-secondary"><br/>{subtitle3} </span></h1>
        <p className="text-text-grayDark dark:text-text-grayLight mb-[20px]">{description}</p>
        <div className="flex gap-5">
                    <Button variant="primary" size="lg">{button1}</Button>
                    <Button variant="secondary" size="lg">{button2}</Button>
        </div>
     
    </div>
        </section>
    )
}

export default SideText;