import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaLongArrowAltLeft, FaLongArrowAltRight} from '../../assets/icons/icons';
import * as icon from '../../assets/icons/icons';
import { Link } from "react-router-dom";
import SlideInOnScroll from '../../animation/GetX'; 

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
   
const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // TODO: Add API call to submit form data
    reset();
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-dark-primary py-12 px-4 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Contact Details */}
          <div className="lg:w-1/2 space-y-8 flex flex-col justify-center ">
            <SlideInOnScroll direction="left" delay={0}>
              {/* Main Title */}
              <div className="space-y-2 ">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
                  {isRTL ? (
                    <>
                      نحن دائماً
                      <span className="text-[var(--color-secondary)] pl-5">
                        متحمسون للتواصل
                      </span>
                      <span className="text-[var(--color-primary)] ">
                        معك!
                      </span>
                    </>
                  ) : (
                    <>
                      We're Always
                      <span className="text-[var(--color-secondary)] px-2">
                        Eager to
                      </span>
                      <span className="text-[var(--color-primary)] ">
                        Hear From You!
                      </span>
                    </>
                  )}
                </h2>
              </div>
            </SlideInOnScroll>

            <SlideInOnScroll direction="left" delay={0.2}>
              {/* Contact Information */}
              <div className="space-y-6">
                {/* Address */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {t('address', 'Address')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {isRTL 
                      ? 'ستوديو 76د، رايلي فورد، شمال مايكل تشيستر، CF99 6QQ'
                      : 'Studio 76d, Riley Ford, North Michael chester, CF99 6QQ'
                    }
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {t('email', 'Email')}
                  </h3>
                  <a 
                    href="mailto:edublink@example.com"
                    className=" underline dark:text-white hover:underline transition-colors"
                  >
                    edublink@example.com
                  </a>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {t('phone', 'Phone')}
                  </h3>
                  <a 
                    href="tel:+0914135548598"
                    className=" underline dark:text-white hover:underline transition-colors"
                  >
                    (+091) 413 554 8598
                  </a>
                </div>
              </div>
            </SlideInOnScroll>

            <SlideInOnScroll direction="left" delay={0.4}>
              {/* Social Icons */}
              <div className="flex flex-row mt-[20px]">
                <Link
                  className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
                  to="/"
                >
                  <icon.FaLinkedinIn size={24} className="text-amber-50" />
                </Link>
                <Link
                  className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
                  to="/"
                >
                  <icon.FaInstagram size={24}  className="text-amber-50" />
                </Link>
                <Link
                  className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
                  to="/"
                >
                  <icon.FaWhatsapp size={24}  className="text-amber-50" />
                </Link>
                <Link
                  className="w-[50px] h-[50px] mr-[7px]  flex items-center justify-center rounded-[50%] bg-[#1C4281]"
                  to="/"
                >
                  <icon.FaFacebookF size={24} className="text-amber-50" />
                </Link>
              </div>
            </SlideInOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <SlideInOnScroll direction="right" delay={0}>
              <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {t('getInTouch', isRTL ? 'تواصل معنا' : 'Get In Touch')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {isRTL 
                      ? 'املأ هذا النموذج لحجز جلسة استشارية.'
                      : 'Fill out this form for booking a consultant advising session.'
                    }
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('name', isRTL ? 'الاسم' : 'Name')}
                    </label>
                    <input
                      {...register('name', { required: t('nameRequired', 'Name is required') })}
                      type="text"
                      placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                      className="w-full px-4 py-3 bg-gray-50  border dark:bg-dark-secondary border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[var(--color-primary)] dark:focus:border-[var(--color-dark-primary)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)]">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('email', isRTL ? 'البريد الإلكتروني' : 'Email')}
                    </label>
                    <input
                      {...register('email', { 
                        required: t('emailRequired', 'Email is required'),
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: t('emailInvalid', 'Please enter a valid email')
                        }
                      })}
                      type="email"
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your Email'}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-secondary 0 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[var(--color-primary)] dark:focus:border-[var(--color-dark-primary)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)]">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('phoneNumber', isRTL ? 'رقم الهاتف' : 'Phone Number')}
                    </label>
                    <input
                      {...register('phone', { required: t('phoneRequired', 'Phone number is required') })}
                      type="tel"
                      placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your Number phone'}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[var(--color-primary)] dark:focus:border-[var(--color-dark-primary)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)]">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('yourMessage', isRTL ? 'رسالتك' : 'Your Message')}
                    </label>
                    <textarea
                      {...register('message', { required: t('messageRequired', 'Message is required') })}
                      rows={4}
                      placeholder={isRTL ? 'أدخل رسالتك' : 'Enter you message'}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-[var(--color-primary)] dark:focus:border-[var(--color-dark-primary)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-[var(--color-secondary)] dark:text-[var(--color-dark-secondary)]">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full bg-primary cursor-pointer text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:focus:ring-[var(--color-dark-primary)] focus:ring-opacity-50"
                  >
                    {isRTL ? <FaLongArrowAltRight size={15} /> : <FaLongArrowAltLeft size={15} />}
                    {t('submitMessage', isRTL ? `أرسل الرسالة ` : `Submit Message `)}
                  </button>
                </form>
              </div>
            </SlideInOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;