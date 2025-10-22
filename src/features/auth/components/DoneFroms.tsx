
import * as icon from '../../../assets/icons/icons';
import { useTranslation } from 'react-i18next';
import Button from '@/components/atoms/Button';
export function DoneForm() {
    const { t } = useTranslation();
  return (
    <section className='flex flex-col justify-center items-center py-[60px] px-[10px] bg-white dark:bg-dark-secondary text-center  rounded-2xl w-full md:w-[40%] mx-auto mt-[100px]'>
           <div className='w-[70px] h-[70px] bg-[#DCFCE7] rounded-[50%] flex justify-center items-center'>
          <icon.Check className='text-[#16A34A]' size={36} />
         </div>
        <h5 className='pt-[20px] font-bold text-3xl mb-[20px]'>{t("donePage.title")}</h5>
        <p className='pb-[20px] text-[18px] mb-[px]'>{t("donePage.subTitle")}</p>
    <Button 
    size="lg"
     path="/Sign-in" 
     >{t("donePage.btn")}
     </Button>
       
    </section>
  )
}

