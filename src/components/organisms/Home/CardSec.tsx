interface CardSecProps{
    description?:string,
    image?:string,
    icons?:React.ReactNode,
    name?: string,
    track?:string,
}

const CardSec : React.FC<CardSecProps> = ({
    description,
    image,
    icons, 
    name,
    track
}) =>{
    return(
    <div className="bg-light-primary px-[25px] py-[50px] rounded-[10px] dark:bg-dark-secondary">
      <img className="w-[80px] h-[80px] rounded-[50%] mb-[24px]" src={image} alt="img" />
      <p className="leading-[40px]">{description}</p>
      <div className="flex flex-row gap-1">{icons} {icons} {icons} {icons}{icons}</div>
      <p className="py-[15px]">{name}</p>
      <p>{track}</p>
    </div>
    )
}

export default CardSec;