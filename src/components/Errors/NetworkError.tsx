import Lottie from "lottie-react";
import * as icon from '../../assets/lotties/icons';

const NetworkError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#EFF6FF]">
      <Lottie animationData={icon.NotFound404} className="w-[300px]" loop />
      <h3 className="text-center text-xl mt-6 text-blue-600 font-semibold">
        لا يوجد اتصال بالإنترنت 📡
      </h3>
      <p className="text-gray-600 mt-2">تأكد من اتصالك بالشبكة وحاول مرة أخرى.</p>
    </div>
  );
};

export default NetworkError;
