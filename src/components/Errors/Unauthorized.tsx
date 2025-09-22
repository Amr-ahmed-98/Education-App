import Lottie from "lottie-react";
import * as icon from '../../assets/lotties/icons';

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF5F5]">
      <Lottie animationData={icon.loading} className="w-[300px]" loop />
      <h3 className="text-center text-xl mt-6 text-red-600 font-semibold">
        غير مصرح لك بالدخول 
      </h3>
      <p className="text-gray-600 mt-2">من فضلك قم بتسجيل الدخول أو تحقق من الصلاحيات.</p>
    </div>
  );
};

export default Unauthorized;
