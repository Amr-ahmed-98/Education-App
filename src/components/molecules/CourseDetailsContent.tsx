import React from 'react';
import { Check } from '@/assets/icons/icons';
import { useTheme } from '@/hooks/useTheme';
import LearningTable from '../organisms/LearningTable';
import { Instructor4, Instructor3, student } from '@/assets/images/images';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaStar,
  FaLongArrowAltRight,
} from 'react-icons/fa';
interface CourseDetailsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
  descriptionTitle: string;
  descriptionParagraphs: string[];
  learningTitle: string;
  learningPoints: string[];
  curriculum: {
    title: string;
    description: string;
    timeOneToFour: string;
    timeFiveToSeven: string;
    weekOneToFourDescription: string;
    weekFiveToSevenDescription: string;
    weekOneToFourLearning: string[];
    weekFiveToSevenLearning: string[];
  };
  instructor: {
    name: string;
    position: string;
    bio: string;
  };
  reviews: {
    title: string;
    description: string;
    rate: string;
    numOfReviews: string;
  };
  studentReview: {
    title: string;
    comments: {
      rate: number;
      date: string;
      comment: string;
    }[];
  };
  studentsComments: {
    title: string;
    leaveRate: string;
    ReviewTitle: string;
    writeName: string;
    ReviwerEmail: string;
    ReviwerSummary: string;
    submitReview: string;
  };
}
interface SocailIcon {
  icon: React.ReactNode;
  link: string;
}

const SocialIcons: SocailIcon[] = [
  { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
  { icon: <FaWhatsapp />, link: 'https://wa.me/' },
  { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
];
const counts = [10, 0, 0, 0, 0];
const CourseDetailsContent: React.FC<CourseDetailsProps> = ({
  activeTab,
  onTabChange,
  tabs,
  descriptionTitle,
  descriptionParagraphs,
  learningTitle,
  learningPoints,
  curriculum,
  instructor,
  reviews,
  studentReview,
  studentsComments,
}) => {
  const { theme } = useTheme();

  const inputs = [
    { id: 'title', placeholder: studentsComments.ReviewTitle, type: 'text' },
    { id: 'name', placeholder: studentsComments.writeName, type: 'text' },
  ];

  const classes =
    theme === 'dark' ? 'bg-dark-800 text-gray-200' : ' text-gray-900';

  return (
    <div className={`flex-1 lg:pr-8 ${classes} p-4 sm:p-6 lg:p-8 rounded-xl `}>
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6 lg:mb-8">
        <nav className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`py-2 px-2 sm:py-3 sm:px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap min-w-fit ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {/* Overview */}
        <div
          className={
            activeTab.includes('Overview') || activeTab === 'نظرة عامة'
              ? 'block'
              : 'hidden'
          }
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {descriptionTitle}
          </h2>
          {descriptionParagraphs.map((p, idx) => (
            <p key={idx} className="mb-2 text-gray-600 dark:text-gray-300">
              {p}
            </p>
          ))}

          <h2 className="text-xl sm:text-2xl font-bold mt-6 mb-4">
            {learningTitle}
          </h2>
          {learningPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="flex-shrink-0 w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{point}</p>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div
          className={
            activeTab.includes('Curriculum') || activeTab === 'المنهج الدراسي'
              ? 'block'
              : 'hidden'
          }
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-xl sm:text-2xl font-bold ">
              {curriculum?.title}
            </h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-300">
              {curriculum?.description}
            </p>
          </div>
          <div className="mt-4 WeedOneToFour">
            <LearningTable
              weekLearn={curriculum?.weekOneToFourLearning}
              description={curriculum?.weekOneToFourDescription}
              time={curriculum?.timeOneToFour}
            />
          </div>
          <div className="mt-4 WeedFiveToSeven">
            <LearningTable
              weekLearn={curriculum?.weekFiveToSevenLearning}
              description={curriculum?.weekFiveToSevenDescription}
              time={curriculum?.timeFiveToSeven}
            />
          </div>
        </div>

        {/* Instructor */}
        <div
          className={
            activeTab.includes('Instructor') || activeTab === 'المدرب'
              ? 'block'
              : 'hidden'
          }
        >
          <div className="flex items-start flex-col gap-7 md:flex-row  p-6 mx-auto">
            <div className="flex-shrink-0">
              <img
                src={Instructor4}
                alt={`${Instructor4} profile picture`}
                className="w-[139px] h-[137px] object-cover "
              />
            </div>
            <div className="flex flex-col">
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-medium dark:text-white text-slate-900">
                  {instructor?.name}
                </h2>

                <h3 className="text-lg font-medium text-[14px] text-[#606060] dark:text-gray-300">
                  {instructor?.position}
                </h3>

                <p className="text-[15px] leading-8 text-[#606060] dark:text-gray-300">
                  {instructor?.bio}
                </p>
              </div>
              <div className="flex flex-row mt-[20px]">
                {SocialIcons.map((icon, index) => (
                  <Link
                    className="w-[40px] h-[40px] mr-3  flex items-center justify-center rounded-[50%] text-[#606060] dark:text-gray-300 border border-[#D9D9D9] hover:scale-110 duration-200 ease-in-out"
                    to={icon.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div
          className={`${
            activeTab.includes('Reviews') || activeTab === 'المراجعات'
              ? 'block'
              : 'hidden'
          } flex flex-col gap-10`}
        >
          <div className="title flex flex-col gap-2">
            <h2 className="text-xl sm:text-2xl font-bold">{reviews.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 ">
              {reviews.description}
            </p>
          </div>
          <div className="rate">
            <div className="flex gap-7 rounded-lg">
              <div className="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800">
                <div className="text-3xl font-bold text-[#EE4A62] mb-2">
                  {reviews.rate}
                </div>

                <div className="flex mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5"
                      fill="#FFBA00"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ({reviews.numOfReviews})
                </div>
              </div>

              <div className="flex flex-col space-y-2 flex-1">
                {[5, 4, 3, 2, 1].map((number, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-black dark:text-white w-2">
                      {number}
                    </span>

                    <svg
                      className="w-4 h-4"
                      fill="#FFBA00"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <div
                      className="flex-1  rounded"
                      style={{
                        backgroundColor: index === 0 ? '#FFBA00' : '#e5e5e5',
                        height: '4px',
                      }}
                    ></div>

                    <span className="text-sm text-black dark:text-white ml-2 font-bold">
                      {counts[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="studentComments flex flex-col gap-5">
            <h2 className="text-2xl font-bold  text-black dark:text-white">
              {studentReview.title}
            </h2>
            <div className="flex flex-col gap-6">
              {studentReview.comments.map((review, index) => (
                <div
                  key={index}
                  className="flex gap-6 pb-5 border-b border-[#D5D5D5]"
                >
                  <img
                    src={Instructor3}
                    alt={Instructor3}
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex mb-2">
                      {[...Array(review.rate)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5"
                          fill="#FFBA00"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h2 className="text-sm text-[#606060] dark:text-gray-400">
                      {review.date}
                    </h2>
                    <p className="mt-2 text-[#606060] dark:text-gray-200">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {studentsComments.title}
            </h2>

            {/* Rating section */}
            <div className="flex gap-5 items-center">
              <p className="text-black font-medium dark:text-white text-[18px]">
                {studentsComments.leaveRate}
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="cursor-pointer">
                    <FaStar className="w-5 h-5  text-[#D5D3CC]" />
                  </span>
                ))}
              </div>
            </div>
            <div className="inputs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {inputs.map((input) => (
                  <input
                    key={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none bg-white dark:bg-gray-800"
                  />
                ))}
              </div>

              {/* Email input */}
              <div className="mb-4">
                <input
                  type="email"
                  placeholder={studentsComments.ReviwerEmail}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white dark:bg-gray-800"
                />
              </div>

              {/* Summary textarea */}
              <div className="mb-4">
                <textarea
                  placeholder={studentsComments.ReviwerSummary}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white dark:bg-gray-800"
                />
              </div>

              {/* Submit button */}
              <button className="flex items-center gap-5 justify-center w-full sm:w-1/4 md:w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md">
                <span>{studentsComments.submitReview}</span>
                <FaLongArrowAltRight className="mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
