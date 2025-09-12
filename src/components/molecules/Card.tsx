import React from 'react';
import { Clock, BookOpen, Star, Users } from '../../assets/icons/icons';
import {t} from 'i18next';
import { useTheme } from '@/hooks/useTheme';

interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  rating: number;
  totalRatings: number;
  price: number;
  lessons: number;
  description?: string;
}

interface CourseCardProps {
  course: Course;
  className?: string;
}

const Card: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  const { theme } = useTheme();

  const classes = theme === 'dark'
    ? 'bg-dark-800 text-gray-200'
    : 'bg-white text-gray-900';

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={`${
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : index < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'text-gray-300'
        } transition-colors duration-200`}
      />
    ));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-700';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'Advanced':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm mx-auto transform hover:-translate-y-1 ${classes} ${className}`}>
      {/* Header Image with Badge */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1">
            <Clock size={16} />
            {t('HomeCard.Duration', { duration: course.duration })}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Level Badge */}
        <div className="flex items-start justify-between mx-7">
          <span className={`py-2 px-5 text-md font-medium ${t(getLevelColor(course.level))} rounded-full`}>
            {t('HomeCard.Level', { level: course.level })}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-md font-bold mt-5 px-7 line-clamp-2 min-h-[3.5rem]">
            {t('HomeCard.Title', { title: course.title })}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex justify-around items-center gap-2 mb-4 mt-0">
          <div className="flex items-center gap-1">
            {renderStars(course.rating)}
          </div>
          <span className="text-md font-normal">
            ({t('HomeCard.Rating', { totalRatings: course.totalRatings })})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 mx-7">
          <span className="text-xl text-red-400">${t('HomeCard.Price', { price: course.price.toFixed(2) })}</span>
        </div>

        {/* Course Details */}
        <div className="flex justify-around items-center gap-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            <span className="text-md font-medium">{t('HomeCard.Lessons', { lessons: course.lessons })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span className="text-md font-medium">{t('HomeCard.Lessons', { students: course.lessons })}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
