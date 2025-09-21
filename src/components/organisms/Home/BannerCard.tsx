import  React  from "react";
interface BannerCardProbs {
  label?: string;
  icon?: React.ReactNode;
}

const BannerCard: React.FC<BannerCardProbs> = ({ 
    label, 
    icon,
}) => {
  return (
    <div className=" py-[20px] ">
      <div className="flex ">
        <div className="w-[70px] h-[70px] text-white bg-primary rounded-[50%] flex justify-center items-center">{icon}</div>
        <p className="font-bold text-[15px] text-white flex justify-center items-center ml-[10px]">{label}</p>
      </div>
    </div>
  );
};

export default BannerCard;