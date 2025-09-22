import Lottie from "lottie-react";
import * as icon from '../../assets/lotties/icons';

const ServerError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF0F0]">
      <Lottie animationData={icon.loading2} className="w-[320px]" loop />
      <h3 className="text-center text-xl mt-6 text-red-700 font-semibold">
        حدث خطأ في الخادم 🚨
      </h3>
      <p className="text-gray-600 mt-2">حاول مرة أخرى لاحقًا.</p>
    </div>
  );
};

export default ServerError;
