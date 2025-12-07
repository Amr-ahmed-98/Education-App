import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, X } from 'lucide-react';
import { levelOptions, categoryOptions, languageOptions , pricingOptions } from '../../../utils/Data';

function AddCourse() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    coverImage: null as File | null,
    courseTitle: '',
    shortSummary: '',
    fullDescription: '',
    category: '',
    level: '',
    language: '',
    subtitles: false,
    courseDuration: '',
    schedule: '',
    pricingType: 'free',
    price: '',
    promoCode: '',
  });

  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, coverImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, coverImage: null });
    setCoverPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-light-secondary dark:bg-dark-primary py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* Basic Information Section */}
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-dark-primary dark:bg-light-primary text-light-primary dark:text-dark-primary flex items-center justify-center text-sm font-bold">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-primary dark:text-light-primary">
                {t('addCourse.basicInfo')}
              </h2>
            </div>

            {/* Cover Image */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.coverImage')}
              </label>
              
              {!coverPreview ? (
                <div className="border-2 border-dashed border-text-grayLight dark:border-text-grayDark rounded-lg p-8 sm:p-12 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label htmlFor="cover-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-lg border-2 border-text-grayLight dark:border-text-grayDark flex items-center justify-center">
                        <Upload className="w-8 h-8 text-text-grayLight dark:text-text-grayDark" />
                      </div>
                      <div className="text-text-grayDark dark:text-text-grayLight">
                        {t('addCourse.dragDrop')}
                      </div>
                      <div className="text-xs text-text-grayLight dark:text-text-grayDark">
                        {t('addCourse.imageRecommendation')}
                      </div>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden border-2 border-primary">
                  <img src={coverPreview} alt="Cover preview" className="w-full h-48 object-cover" />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-secondary hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Course Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.courseTitle')}
              </label>
              <input
                type="text"
                value={formData.courseTitle}
                onChange={(e) => setFormData({ ...formData, courseTitle: e.target.value })}
                placeholder={t('addCourse.courseTitlePlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Short Summary */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.shortSummary')}
              </label>
              <textarea
                value={formData.shortSummary}
                onChange={(e) => setFormData({ ...formData, shortSummary: e.target.value })}
                placeholder={t('addCourse.shortSummaryPlaceholder')}
                rows={3}
                maxLength={140}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <div className="text-xs text-text-grayLight dark:text-text-grayDark mt-1 text-right">
                {formData.shortSummary.length}/140
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.fullDescription')}
              </label>
              <textarea
                value={formData.fullDescription}
                onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                placeholder={t('addCourse.fullDescriptionPlaceholder')}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
            <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
  {t('addCourse.categoryLabel')}
</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                <option value="">{t('addCourse.selectCategory')}</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {t(option.labelKey)}
                  </option>
                ))}
              </select>
            </div>

            {/* Level */}
            <div className="mb-6">
            <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
  {t('addCourse.levelLabel')}
</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {levelOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.level === option.value
                        ? 'border-primary bg-primary/10 dark:bg-primary/20'
                        : 'border-text-grayLight dark:border-text-grayDark hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="level"
                      value={option.value}
                      checked={formData.level === option.value}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="sr-only"
                    />
                    <span className="text-dark-primary dark:text-light-primary font-medium">
                      {t(option.labelKey)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-dark-primary dark:bg-light-primary text-light-primary dark:text-dark-primary flex items-center justify-center text-sm font-bold">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-primary dark:text-light-primary">
                {t('addCourse.content')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
              >
                <Upload className="w-5 h-5" />
                {t('addCourse.uploadVideos')}
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
              >
                <Upload className="w-5 h-5" />
                {t('addCourse.addMaterials')}
              </button>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-dark-primary dark:bg-light-primary text-light-primary dark:text-dark-primary flex items-center justify-center text-sm font-bold">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-primary dark:text-light-primary">
                {t('addCourse.pricing')}
              </h2>
            </div>

            {/* Pricing Type */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {pricingOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center justify-center px-6 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                    formData.pricingType === option.value
                      ? 'border-primary bg-primary/10 dark:bg-primary/20'
                      : 'border-text-grayLight dark:border-text-grayDark hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="pricingType"
                    value={option.value}
                    checked={formData.pricingType === option.value}
                    onChange={(e) => setFormData({ ...formData, pricingType: e.target.value })}
                    className="sr-only"
                  />
                  <span className="text-dark-primary dark:text-light-primary font-medium">
                    {t(option.labelKey)}
                  </span>
                </label>
              ))}
            </div>

            {/* Price Input */}
            {formData.pricingType !== 'free' && (
              <>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                    {t('addCourse.priceLabel')}
                  </label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder={t('addCourse.pricePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                    {t('addCourse.promoCode')}
                  </label>
                  <input
                    type="text"
                    value={formData.promoCode}
                    onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                    placeholder={t('addCourse.promoCodePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </>
            )}
          </div>

          {/* Additional Settings Section */}
          <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-dark-primary dark:bg-light-primary text-light-primary dark:text-dark-primary flex items-center justify-center text-sm font-bold">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-dark-primary dark:text-light-primary">
                {t('addCourse.additionalSettings')}
              </h2>
            </div>

            {/* Language */}
            <div className="mb-6">
            <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
  {t('addCourse.languageLabel')}
</label>
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                <option value="">{t('addCourse.selectLanguage')}</option>
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {t(option.labelKey)}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtitles */}
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.subtitles}
                  onChange={(e) => setFormData({ ...formData, subtitles: e.target.checked })}
                  className="w-5 h-5 rounded border-text-grayLight dark:border-text-grayDark text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                />
                <span className="text-dark-primary dark:text-light-primary font-medium">
                  {t('addCourse.subtitles')}
                </span>
              </label>
            </div>

            {/* Course Duration */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.courseDuration')}
              </label>
              <input
                type="text"
                value={formData.courseDuration}
                onChange={(e) => setFormData({ ...formData, courseDuration: e.target.value })}
                placeholder={t('addCourse.courseDurationPlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Schedule */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-dark-primary dark:text-light-secondary mb-2">
                {t('addCourse.schedule')}
              </label>
              <select
                value={formData.schedule}
                onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-text-grayLight dark:border-text-grayDark bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-light-primary focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
              >
                <option value="">{t('addCourse.selectDate')}</option>
              </select>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-all font-medium text-lg"
            >
              {t('addCourse.saveAsDraft')}
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all font-medium text-lg shadow-lg"
            >
              {t('addCourse.publishCourse')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCourse;