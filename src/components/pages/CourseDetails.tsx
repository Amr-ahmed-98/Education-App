import { useTranslation } from 'react-i18next';
import SectionTitle from '../molecules/SectionTitle';
import CourseDetailsContent from '../molecules/CourseDetailsContent';
import CourseDetailsSidebar from '../molecules/CourseDetailsSidebar';
import { themes } from '@/contexts/Theme';
import { ThemeContext } from '@/contexts/ThemeContextDefinition';
import { useContext } from 'react';
import { useState } from 'react';
import {
  Clock,
  BookOpen,
  Users,
  Globe,
  Award,
  User,
} from '@/assets/icons/icons';

function CourseDetails() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext)!;
  const isArabic = i18n.language === 'ar';
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div
      className={`${
        theme === themes.dark ? 'bg-dark-900' : 'bg-gray-50'
      } min-h-screen`}
    >
      <SectionTitle
        breadcrumbs1={t('SectionTitle.CourseDetails.breadcrumbs1')}
        breadcrumbs2={t('SectionTitle.CourseDetails.breadcrumbs2')}
        breadcrumbs3={t('SectionTitle.CourseDetails.breadcrumbs3')}
        breadcrumbs1Path="/"
        breadcrumbs2Path="/course"
        breadcrumbs3Path="/course-details"
        detailsHeader={t('SectionTitle.CourseDetails.title1')}
        detailsDescription={t('SectionTitle.CourseDetails.description')}
        button={t('SectionTitle.CourseDetails.button')}
        rating={4.5}
        ratingCount={350123}
        studentCount={1051273}
        ratingsText={t('SectionTitle.CourseDetails.rating')}
        studentsText={t('SectionTitle.CourseDetails.students')}
        className={`text-center ${isArabic ? 'md:text-right' : 'md:text-left'}`}
      />

      <div
        className={`${
          theme === themes.dark ? 'bg-dark-900' : 'bg-gray-50'
        } py-10`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
            <CourseDetailsContent
              activeTab={activeTab}
              onTabChange={setActiveTab}
              tabs={[
                t('SectionTitle.CourseDetailsContent.tabs.overview'),
                t('SectionTitle.CourseDetailsContent.tabs.curriculum'),
                t('SectionTitle.CourseDetailsContent.tabs.instructor'),
                t('SectionTitle.CourseDetailsContent.tabs.reviews'),
              ]}
              descriptionTitle={t(
                'SectionTitle.CourseDetailsContent.description.title'
              )}
              descriptionParagraphs={[
                t('SectionTitle.CourseDetailsContent.description.p1'),
                t('SectionTitle.CourseDetailsContent.description.p2'),
              ]}
              learningTitle={t(
                'SectionTitle.CourseDetailsContent.learning.title'
              )}
              learningPoints={[
                t('SectionTitle.CourseDetailsContent.learning.p1'),
                t('SectionTitle.CourseDetailsContent.learning.p2'),
                t('SectionTitle.CourseDetailsContent.learning.p3'),
              ]}
              curriculum={{
                title: t('SectionTitle.CourseDetailsContent.curriculum.title'),
                description: t(
                  'SectionTitle.CourseDetailsContent.curriculum.description'
                ),
                timeOneToFour: t(
                  'SectionTitle.CourseDetailsContent.curriculum.timeOneToFour'
                ),
                timeFiveToSeven: t(
                  'SectionTitle.CourseDetailsContent.curriculum.timeFiveToSeven'
                ),

                weekOneToFourDescription: t(
                  'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourDescription'
                ),
                weekFiveToSevenDescription: t(
                  'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenDescription'
                ),
                weekOneToFourLearning: [
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.0'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.1'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.2'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.3'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.4'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekOneToFourLearning.5'
                  ),
                ],
                weekFiveToSevenLearning: [
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.0'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.1'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.2'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.3'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.4'
                  ),
                  t(
                    'SectionTitle.CourseDetailsContent.curriculum.weekFiveToSevenLearning.5'
                  ),
                ],
              }}
              instructor={{
                name: t('SectionTitle.CourseDetailsContent.instructor.name'),
                position: t(
                  'SectionTitle.CourseDetailsContent.instructor.position'
                ),
                bio: t('SectionTitle.CourseDetailsContent.instructor.bio'),
              }}
              reviews={{
                title: t('SectionTitle.CourseDetailsContent.reviews.title'),
                description: t(
                  'SectionTitle.CourseDetailsContent.reviews.description'
                ),
                rate: t('SectionTitle.CourseDetailsContent.reviews.rate'),
                numOfReviews: t(
                  'SectionTitle.CourseDetailsContent.reviews.numOfReviews'
                ),
              }}
              studentReview={{
                title: t(
                  'SectionTitle.CourseDetailsContent.studentReview.title'
                ),
                comments: t(
                  'SectionTitle.CourseDetailsContent.studentReview.comments',
                  { returnObjects: true }
                ) as { rate: number; date: string; comment: string }[],
              }}
              studentsComments={{
                title: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.title'
                ),
                leaveRate: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.leaveRate'
                ),
                ReviewTitle: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.ReviewTitle'
                ),
                writeName: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.writeName'
                ),
                ReviwerEmail: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.ReviwerEmail'
                ),
                ReviwerSummary: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.ReviwerSummary'
                ),
                submitReview: t(
                  'SectionTitle.CourseDetailsContent.studentsComments.submitReview'
                ),
              }}
            />

            <CourseDetailsSidebar
              courseDetails={t(
                'SectionTitle.CourseDetailsContent.sidebar.courseDetails'
              )}
              priceLabel={t(
                'SectionTitle.CourseDetailsContent.sidebar.price.label'
              )}
              priceValue={t(
                'SectionTitle.CourseDetailsContent.sidebar.price.value'
              )}
              details={[
                {
                  icon: User,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.details.instructor.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.details.instructor.value'
                  ),
                },
                {
                  icon: Clock,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.duration.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.duration.value'
                  ),
                },
                {
                  icon: BookOpen,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.lessons.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.lessons.value'
                  ),
                },
                {
                  icon: Users,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.enrolled.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.enrolled.value'
                  ),
                },
                {
                  icon: Globe,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.language.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.language.value'
                  ),
                },
                {
                  icon: Award,
                  label: t(
                    'SectionTitle.CourseDetailsContent.sidebar.certificate.label'
                  ),
                  value: t(
                    'SectionTitle.CourseDetailsContent.sidebar.certificate.value'
                  ),
                },
              ]}
              addToCartText={t(
                'SectionTitle.CourseDetailsContent.sidebar.actions.addToCart'
              )}
              buyNowText={t(
                'SectionTitle.CourseDetailsContent.sidebar.actions.buyNow'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
