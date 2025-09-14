import React, { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Question {
  id: string;
  question: string;
  answer?: string;
  subQuestions?: Question[];
}

interface Category {
  id: string;
  title: string;
  questions: Question[];
}

interface Section {
  id: string;
  title: string;
  categories: Category[];
}

const ChevronIcon = React.memo<{ isExpanded: boolean; className?: string }>(
  ({ isExpanded, className = '' }) => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 text-gray-600 dark:text-gray-300 ${
        isExpanded ? 'rotate-180' : ''
      } ${className}`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 9l-7 7-7-7'
      />
    </svg>
  )
);

ChevronIcon.displayName = 'ChevronIcon';

const SubQuestion = React.memo<{
  subQuestion: Question;
  sectionId: string;
  categoryId: string;
  parentQuestionId: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  t: (key: string, fallback?: string) => string;
}>(
  ({
    subQuestion,
    sectionId,
    categoryId,
    parentQuestionId,
    isExpanded,
    onToggle,
    t,
  }) => {
    const translationKey = useMemo(
      () => `${sectionId}.${categoryId}.${parentQuestionId}.${subQuestion.id}`,
      [sectionId, categoryId, parentQuestionId, subQuestion.id]
    );

    return (
      <div>
        <button
          className='w-full text-left flex justify-between items-start'
          onClick={() => onToggle(subQuestion.id)}
          aria-expanded={isExpanded}
        >
          <span className='text-gray-700 dark:text-gray-300 text-sm'>
            {t(`${translationKey}.question`, subQuestion.question)}
          </span>
          <ChevronIcon
            isExpanded={isExpanded}
            className='flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-400 mt-0.5'
          />
        </button>

        {isExpanded && (
          <p className='text-gray-600 dark:text-gray-400 text-xs mt-2'>
            {t(
              `${translationKey}.answer`,
              subQuestion.answer || 'Answer not available'
            )}
          </p>
        )}
      </div>
    );
  }
);

SubQuestion.displayName = 'SubQuestion';

const QuestionItem = React.memo<{
  question: Question;
  sectionId: string;
  categoryId: string;
  isExpanded: boolean;
  expandedSubQuestions: Record<string, boolean>;
  onToggle: (id: string) => void;
  onSubQuestionToggle: (id: string) => void;
  t: (key: string, fallback?: string) => string;
}>(
  ({
    question,
    sectionId,
    categoryId,
    isExpanded,
    expandedSubQuestions,
    onToggle,
    onSubQuestionToggle,
    t,
  }) => {
    const translationKey = useMemo(
      () => `${sectionId}.${categoryId}.${question.id}`,
      [sectionId, categoryId, question.id]
    );

    return (
      <div className='border-b border-gray-100 dark:border-gray-700 last:border-b-0'>
        <button
          className='w-full p-3 md:p-4 text-left flex justify-between items-start bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-[var(--color-dark-secondary)] transition-colors'
          onClick={() => onToggle(question.id)}
          aria-expanded={isExpanded}
        >
          <span className='text-gray-800 dark:text-gray-200 text-sm md:text-base mr-2'>
            {t(`${translationKey}.question`, question.question)}
          </span>
          <ChevronIcon
            isExpanded={isExpanded}
            className='flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5'
          />
        </button>

        {isExpanded && (
          <div className='px-4 pb-3 md:px-5 md:pb-4'>
            <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base mb-3'>
              {t(
                `${translationKey}.answer`,
                question.answer || 'Answer not available'
              )}
            </p>

            {question.subQuestions && question.subQuestions.length > 0 && (
              <div className='ml-4 md:ml-6 pl-3 md:pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-3'>
                {question.subQuestions.map((subQuestion) => (
                  <SubQuestion
                    key={subQuestion.id}
                    subQuestion={subQuestion}
                    sectionId={sectionId}
                    categoryId={categoryId}
                    parentQuestionId={question.id}
                    isExpanded={expandedSubQuestions[subQuestion.id] || false}
                    onToggle={onSubQuestionToggle}
                    t={t}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

QuestionItem.displayName = 'QuestionItem';

const CategoryItem = React.memo<{
  category: Category;
  sectionId: string;
  isExpanded: boolean;
  expandedQuestions: Record<string, boolean>;
  expandedSubQuestions: Record<string, boolean>;
  onToggle: (id: string) => void;
  onQuestionToggle: (id: string) => void;
  onSubQuestionToggle: (id: string) => void;
  t: (key: string, fallback?: string) => string;
}>(
  ({
    category,
    sectionId,
    isExpanded,
    expandedQuestions,
    expandedSubQuestions,
    onToggle,
    onQuestionToggle,
    onSubQuestionToggle,
    t,
  }) => {
    const translationKey = useMemo(
      () => `${sectionId}.${category.id}`,
      [sectionId, category.id]
    );

    return (
      <div className='border border-gray-200 dark:border-gray-700 rounded-md'>
        <button
          className='w-full p-3 md:p-4 text-left flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-[var(--color-dark-secondary)] transition-colors'
          onClick={() => onToggle(category.id)}
          aria-expanded={isExpanded}
        >
          <h3 className='font-medium text-gray-800 dark:text-white'>
            {t(`${translationKey}.title`, category.title)}
          </h3>
          <ChevronIcon isExpanded={isExpanded} />
        </button>

        {isExpanded && (
          <div className='border-t border-gray-200 dark:border-gray-700'>
            {category.questions.map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                sectionId={sectionId}
                categoryId={category.id}
                isExpanded={expandedQuestions[question.id] || false}
                expandedSubQuestions={expandedSubQuestions}
                onToggle={onQuestionToggle}
                onSubQuestionToggle={onSubQuestionToggle}
                t={t}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

CategoryItem.displayName = 'CategoryItem';

const SectionItem = React.memo<{
  section: Section;
  isExpanded: boolean;
  expandedCategories: Record<string, boolean>;
  expandedQuestions: Record<string, boolean>;
  expandedSubQuestions: Record<string, boolean>;
  onToggle: (id: string) => void;
  onCategoryToggle: (id: string) => void;
  onQuestionToggle: (id: string) => void;
  onSubQuestionToggle: (id: string) => void;
  t: (key: string, fallback?: string) => string;
}>(
  ({
    section,
    isExpanded,
    expandedCategories,
    expandedQuestions,
    expandedSubQuestions,
    onToggle,
    onCategoryToggle,
    onQuestionToggle,
    onSubQuestionToggle,
    t,
  }) => {
    const translationKey = useMemo(() => section.id, [section.id]);

    return (
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden'>
        <button
          className='w-full p-4 md:p-5 text-left flex justify-between items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors'
          onClick={() => onToggle(section.id)}
          aria-expanded={isExpanded}
        >
          <h2 className='font-semibold text-lg md:text-xl text-gray-800 dark:text-white'>
            {t(`${translationKey}.title`, section.title)}
          </h2>
          <ChevronIcon isExpanded={isExpanded} />
        </button>

        {isExpanded && (
          <div className='p-4 md:p-5 space-y-4'>
            {section.categories.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                sectionId={section.id}
                isExpanded={expandedCategories[category.id] || false}
                expandedQuestions={expandedQuestions}
                expandedSubQuestions={expandedSubQuestions}
                onToggle={onCategoryToggle}
                onQuestionToggle={onQuestionToggle}
                onSubQuestionToggle={onSubQuestionToggle}
                t={t}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

SectionItem.displayName = 'SectionItem';

const FAQsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [expandedState, setExpandedState] = useState<{
    sections: Record<string, boolean>;
    categories: Record<string, boolean>;
    questions: Record<string, boolean>;
    subQuestions: Record<string, boolean>;
  }>({
    sections: {},
    categories: {},
    questions: {},
    subQuestions: {},
  });

  // Complete FAQ data structure
  const sections: Section[] = [
    {
      id: 'general',
      title: 'General Questions',
      categories: [
        {
          id: 'platform-basics',
          title: 'Platform Basics',
          questions: [
            {
              id: 'q1',
              question: 'What is this platform and how does it work?',
              answer:
                'This platform is an online learning management system that provides comprehensive courses and educational resources. It works by offering structured learning paths, interactive content, assessments, and progress tracking to help users achieve their learning goals.',
            },
            {
              id: 'q2',
              question: 'Can I access the courses from my phone or tablet?',
              answer:
                'Yes, our platform is fully responsive and optimized for all devices including smartphones, tablets, and desktop computers. You can seamlessly switch between devices and your progress will be synchronized.',
              subQuestions: [
                {
                  id: 'q2-1',
                  question: 'How do I download the mobile app?',
                  answer:
                    'You can download our mobile app from the App Store for iOS devices or Google Play Store for Android devices. Search for our platform name and look for the official app.',
                },
                {
                  id: 'q2-2',
                  question: 'Does the mobile app have all features?',
                  answer:
                    'Yes, the mobile app includes all the core features available on the web platform, including course access, video playback, quizzes, progress tracking, and community features.',
                },
              ],
            },
          ],
        },
        {
          id: 'course-access',
          title: 'Course Access & Navigation',
          questions: [
            {
              id: 'q3',
              question: 'Can I retake courses from my phone or tablet?',
              answer:
                'Yes, you can retake any course from any device. Simply navigate to your course library and select the course you want to retake. Your previous progress will be saved, and you can choose to start fresh or continue from where you left off.',
            },
            {
              id: 'q4',
              question: "Can I retake quizzes if I don't pass the first time?",
              answer:
                'Yes, you can retake quizzes after a 24-hour cooling period. This allows you time to review the material and better prepare for your next attempt. Most courses allow up to 3 attempts per quiz.',
            },
          ],
        },
      ],
    },
    {
      id: 'account-management',
      title: 'Account Management',
      categories: [
        {
          id: 'registration-login',
          title: 'Registration & Login',
          questions: [
            {
              id: 'q5',
              question: 'How do I create an account?',
              answer:
                'To create an account, click on the "Sign Up" button on our homepage. Fill in your personal information, choose a secure password, and verify your email address. Once verified, you can start exploring our courses immediately.',
            },
            {
              id: 'q6',
              question: 'I forgot my password. How can I reset it?',
              answer:
                'Click on "Forgot Password" on the login page, enter your registered email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
            },
            {
              id: 'q7',
              question: 'How do I change my account information?',
              answer:
                'Log into your account and go to "Profile Settings" or "Account Settings" in your dashboard. Here you can update your personal information, change your password, and modify your learning preferences.',
            },
          ],
        },
        {
          id: 'profile-management',
          title: 'Profile Management',
          questions: [
            {
              id: 'q8',
              question: 'Can I change my username after registration?',
              answer:
                'Username changes are limited and may require contacting customer support. However, you can always update your display name and other profile information in your account settings.',
            },
          ],
        },
      ],
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      categories: [
        {
          id: 'troubleshooting',
          title: 'Troubleshooting',
          questions: [
            {
              id: 'q9',
              question: 'The course videos are not loading. What should I do?',
              answer:
                'First, check your internet connection and try refreshing the page. If the problem persists, try clearing your browser cache, disabling browser extensions, or switching to a different browser. Contact our technical support if issues continue.',
              subQuestions: [
                {
                  id: 'q9-1',
                  question: 'What browsers are supported?',
                  answer:
                    'We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using Chrome or Firefox with hardware acceleration enabled.',
                },
              ],
            },
            {
              id: 'q10',
              question: 'Why is my course progress not saving?',
              answer:
                'Progress saving issues can occur due to browser cookies being disabled, poor internet connection, or browser compatibility issues. Ensure cookies are enabled and try logging out and back in. Contact support if the problem persists.',
            },
          ],
        },
        {
          id: 'system-requirements',
          title: 'System Requirements',
          questions: [
            {
              id: 'q11',
              question: 'What are the minimum system requirements?',
              answer:
                'For optimal performance, we recommend: Internet speed of at least 5 Mbps, 4GB RAM, updated browser, and speakers or headphones. Mobile devices should be running iOS 12+ or Android 8+.',
            },
          ],
        },
      ],
    },
    {
      id: 'payment-billing',
      title: 'Payment & Billing',
      categories: [
        {
          id: 'payment-options',
          title: 'Payment Options',
          questions: [
            {
              id: 'q12',
              question: 'Can I pay in installments?',
              answer:
                'Yes, we offer flexible payment plans for most courses. You can choose from monthly, quarterly, or semester-based payment options. Payment plans are available at checkout or can be set up by contacting our billing department.',
            },
            {
              id: 'q13',
              question: 'What payment methods do you accept?',
              answer:
                'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some regions, local payment methods like mobile money or digital wallets.',
            },
          ],
        },
        {
          id: 'billing-support',
          title: 'Billing Support',
          questions: [
            {
              id: 'q14',
              question: 'How do I get a receipt for my payment?',
              answer:
                'Receipts are automatically sent to your registered email address after each successful payment. You can also download receipts from your account dashboard under "Billing History" or "Payment Records".',
            },
            {
              id: 'q15',
              question: "Can I get a refund if I'm not satisfied?",
              answer:
                "Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied within the first 30 days and have completed less than 30% of the course, you can request a full refund through our support system.",
            },
          ],
        },
      ],
    },
    {
      id: 'certificates-credentials',
      title: 'Certificates & Credentials',
      categories: [
        {
          id: 'certificate-issuance',
          title: 'Certificate Issuance',
          questions: [
            {
              id: 'q16',
              question: 'Do you provide completion certificates?',
              answer:
                'Yes, we provide digital certificates of completion for all paid courses. Certificates are automatically generated once you complete all course requirements, including assignments and final assessments.',
            },
            {
              id: 'q17',
              question: 'Are your certificates recognized by employers?',
              answer:
                'Our certificates are widely recognized in the industry and include verification features. Many of our courses are designed in partnership with industry professionals and align with current job market requirements.',
            },
          ],
        },
        {
          id: 'credential-verification',
          title: 'Credential Verification',
          questions: [
            {
              id: 'q18',
              question: 'How can employers verify my certificate?',
              answer:
                'Each certificate includes a unique verification code and QR code that employers can use to verify authenticity on our verification portal. Certificates also include completion dates and course details.',
            },
          ],
        },
      ],
    },
    {
      id: 'policies-legal',
      title: 'Policies & Legal',
      categories: [
        {
          id: 'terms-conditions',
          title: 'Terms & Conditions',
          questions: [
            {
              id: 'q19',
              question: 'What happens if the platform updates its terms?',
              answer:
                'We will notify all users via email and through in-platform notifications at least 30 days before any significant changes to our terms and conditions take effect. Continued use of the platform after the effective date constitutes acceptance of the new terms.',
            },
            {
              id: 'q20',
              question: 'What is your refund policy?',
              answer:
                'We offer a 30-day money-back guarantee for paid courses. Refunds are processed within 5-7 business days to the original payment method. Certain restrictions may apply for heavily discounted courses or bundle deals.',
            },
          ],
        },
        {
          id: 'privacy-data',
          title: 'Privacy & Data Protection',
          questions: [
            {
              id: 'q21',
              question: 'How is my personal data protected?',
              answer:
                'We use industry-standard encryption and security measures to protect your personal data. We comply with GDPR and other applicable privacy regulations. Your data is never sold to third parties, and you have full control over your privacy settings.',
            },
            {
              id: 'q22',
              question: 'Can I delete my account and data?',
              answer:
                'Yes, you can request account deletion through your account settings or by contacting our support team. We will permanently delete your personal data within 30 days, though some information may be retained for legal or billing purposes as required by law.',
            },
          ],
        },
      ],
    },
    {
      id: 'learning-support',
      title: 'Learning Support',
      categories: [
        {
          id: 'academic-support',
          title: 'Academic Support',
          questions: [
            {
              id: 'q23',
              question: 'Do you offer academic support or tutoring?',
              answer:
                'Yes, we provide various forms of academic support including discussion forums, live Q&A sessions, email support from instructors, and in some courses, one-on-one tutoring sessions. Premium students get priority access to these services.',
            },
            {
              id: 'q24',
              question: 'How do I contact my instructor?',
              answer:
                'You can contact instructors through the course messaging system, participate in live Q&A sessions, or join course-specific discussion forums. Response times vary by instructor but typically range from 24-48 hours.',
            },
          ],
        },
        {
          id: 'community-features',
          title: 'Community Features',
          questions: [
            {
              id: 'q25',
              question: 'Is there a community forum for students?',
              answer:
                'Yes, we have active community forums where students can interact, share experiences, ask questions, and collaborate on projects. Forums are moderated to ensure a positive and productive learning environment.',
            },
            {
              id: 'q26',
              question:
                'Can I connect with other students taking the same course?',
              answer:
                'Absolutely! Each course has its own community space where you can connect with fellow students, form study groups, share resources, and collaborate on assignments. You can also join our general student community.',
            },
          ],
        },
      ],
    },
  ];

  // Optimized toggle functions with useCallback
  const toggleSection = useCallback((sectionId: string) => {
    setExpandedState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionId]: !prev.sections[sectionId],
      },
    }));
  }, []);

  const toggleCategory = useCallback((categoryId: string) => {
    setExpandedState((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [categoryId]: !prev.categories[categoryId],
      },
    }));
  }, []);

  const toggleQuestion = useCallback((questionId: string) => {
    setExpandedState((prev) => ({
      ...prev,
      questions: {
        ...prev.questions,
        [questionId]: !prev.questions[questionId],
      },
    }));
  }, []);

  const toggleSubQuestion = useCallback((subQuestionId: string) => {
    setExpandedState((prev) => ({
      ...prev,
      subQuestions: {
        ...prev.subQuestions,
        [subQuestionId]: !prev.subQuestions[subQuestionId],
      },
    }));
  }, []);

  // Create a wrapper for the translation function to match the expected type
  const translate = useCallback(
    (key: string, fallback?: string) => {
      return t(key, { defaultValue: fallback || '' });
    },
    [t]
  );

  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-6 lg:p-8 ${
        isRTL ? 'rtl' : 'ltr'
      }`}
    >
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6'>
          {t('faqTitle', 'Frequently Asked Questions')}
        </h1>

        <div className='space-y-4'>
          {sections.map((section) => (
            <SectionItem
              key={section.id}
              section={section}
              isExpanded={expandedState.sections[section.id] || false}
              expandedCategories={expandedState.categories}
              expandedQuestions={expandedState.questions}
              expandedSubQuestions={expandedState.subQuestions}
              onToggle={toggleSection}
              onCategoryToggle={toggleCategory}
              onQuestionToggle={toggleQuestion}
              onSubQuestionToggle={toggleSubQuestion}
              t={translate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsSection;
