import { FileVideoCamera, LockKeyhole } from 'lucide-react';
interface WeekLearning {
  weekLearn: string[];
  time: string;
  description: string;
}
export default function LearningTable({
  weekLearn,
  time,
  description,
}: WeekLearning) {
  return (
    <div>
      <div className="border border-[#D9D9D9] dark:border-[#64748B] mt-10 flex flex-col p-6  ">
        <h2 className="text-[16px] sm:text-[18px] ">{time}</h2>
        <p className="my-5 border-b pb-2 border-[#D5D5D5] dark:border-[#64748B]  text-[#777777]">
          {description}
        </p>
        <ul>
          {weekLearn?.map((point, index) => (
            <li
              key={index}
              className="flex items-start my-3 border-b space-x-2 border-[#D5D5D5] dark:border-[#64748B] pb-3"
            >
              <div className="flex-shrink-0 w-5 h-5  rounded-full flex items-center justify-center mt-0.5">
                <FileVideoCamera className="w-5 h-5 dark:text-[#64748B]" />
              </div>
              <p className="text-black sm:text-[14px] dark:text-[#64748B]">
                {point}
              </p>
              <div className="flex-shrink-0 w-5 h-5 dark:text-[#64748B] rounded-full flex items-center justify-center mt-0.5 ms-auto">
                <LockKeyhole className="w-5 h-5 " />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
