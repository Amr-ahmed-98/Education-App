import Lottie from "lottie-react";
import * as icon from '../../assets/lotties/icons';

const ServiceUnavailable = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8F0]">
      <Lottie animationData={icon.errorClient400} className="w-[320px]" loop />
      <h3 className="text-center text-xl mt-6 text-orange-600 font-semibold">
        الخدمة غير متاحة حالياً 🚧
      </h3>
      <p className="text-gray-600 mt-2">الخادم مشغول أو تحت الصيانة.</p>
    </div>
  );
};

export default ServiceUnavailable;
