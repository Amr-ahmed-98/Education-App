import * as icon  from '../../assets/lotties/icons';
import Lottie from "lottie-react";

export default function LoadingScreen(){
    return (
           <div className="flex items-center justify-center min-h-screen bg-[#A1BFE9]">
            <div style={{width: 800, height:800}}>
                <Lottie animationData={icon.loading2} loop={true} />
            </div>
        </div>
    )
}