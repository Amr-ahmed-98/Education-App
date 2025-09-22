import * as icon from '../../assets/lotties/icons';
import Lottie from "lottie-react";

function NotFound() {
  return (
  <div className="flex items-center justify-center min-h-screen bg-[#C4DBFF]">
           <Lottie animationData={icon.NotFound404} loop={true} className='w-[120%] sm:w-[120%] lg:w-[70%]' />
  </div>
  )
}

export default NotFound