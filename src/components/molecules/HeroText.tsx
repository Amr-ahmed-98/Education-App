
import Button from "../atoms/Button";
interface HeroTextProps{
    title?: string,
    subtitle1?: string ,
    subtitle2?: string ,
    subtitle3?: string ,
    description?:string,
    image?:string,
    variant: "icons" | "button";
    icons?: { src: React.ReactNode; label: string }[];
    button?: string;
}

const HeroText : React.FC<HeroTextProps> = ({
    title = "Default Title",
    variant,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    image,
    icons,
    button,
}) =>{
    return(
        <section className="grid py-[100px] grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* الصورة */}
      <div>
        <img src={image} alt={title} className="rounded-lg shadow-2xl w-[100%] sm:w-[100%] lg:w-[85%]" />
      </div>
      {/* النص */}
      <div >
        <Button variant="outline1" size="lg">{title}</Button>
        <h1 className="mb-6 mt-[10px] text-b text-[40px] font-bold leading-[70px]"><span className="text-primary">{subtitle1}</span> {subtitle2} <span className="text-secondary">{subtitle3} </span></h1>
        <p className="text-text-grayDark dark:text-text-grayLight mb-[20px]">{description}</p>
       {/* icons variant */}
        {variant === "icons" && icons && (
          <div className="flex gap-3  flex-col">
            {icons.map((icon, i) => (
              <div key={i} className="flex flex-row  gap-2">
              <>
                  {typeof icon.src === "string" ? (
                   
                 <img src={icon.src} alt={icon.label} className="w-10 h-10 bg-white" />
                ) : (
               icon.src
                )}
                <span>{icon.label}</span>
              </>
              </div>
            ))}
          </div>
        )}

  {/* button variant */}
        {variant === "button" && button && (
            <Button variant="primary" size="lg">{button}</Button>
        )}
      </div>

    
    </section>
    )
}

export default HeroText;