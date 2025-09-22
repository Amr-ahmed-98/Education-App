import Lottie from "lottie-react";
import * as icon from '../../assets/lotties/icons';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#F9FAFB]">
      <Lottie animationData={icon.errorServer500} className="w-[280px]" loop={false} />
      <h3 className="text-center text-lg mt-4 text-gray-700 font-medium">
        لا توجد بيانات للعرض 📭
      </h3>
    </div>
  );
};

export default EmptyState;
