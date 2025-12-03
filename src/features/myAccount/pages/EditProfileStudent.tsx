import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as icon from "@/assets/icons/icons";
import { defaultUserProfile, type UserProfile } from "@/utils/Data";
import Button from "@/components/atoms/Button";

function EditProfileStudent() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<UserProfile>(defaultUserProfile);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    const savedPhoto = localStorage.getItem("userProfilePhoto");
    
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setFormData(parsed);
      } catch (error) {
        console.error("Error parsing saved profile:", error);
      }
    }
    
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photoDataUrl = reader.result as string;
        setProfilePhoto(photoDataUrl);
        localStorage.setItem("userProfilePhoto", photoDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    localStorage.removeItem("userProfilePhoto");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = () => {
    // Save profile data
    localStorage.setItem("userProfile", JSON.stringify(formData));
    
    // Save password if provided
    if (password.trim()) {
      localStorage.setItem("userPassword", password);
    }
    
    // Show success message (you can use a toast library here)
    alert(t("editProfile.actions.saveChanges") + " - " + t("editProfile.actions.saveChanges"));
  };

  const handleCancel = () => {
    // Reset to saved data
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setFormData(parsed);
      } catch (error) {
        setFormData(defaultUserProfile);
      }
    } else {
      setFormData(defaultUserProfile);
    }
    setPassword("");
  };

  return (
    <div className={`min-h-screen bg-light-secondary dark:bg-dark-primary py-8 px-4 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto max-w-4xl">
        {/* Card Container */}
        <div className="bg-light-primary dark:bg-dark-secondary rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {t("editProfile.title")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
              {t("editProfile.subtitle")}
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <icon.Camera className="w-10 h-10 md:w-12 md:h-12 text-white" />
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                {formData.fullName}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {formData.email}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
                <label
                  htmlFor="photo-upload"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-blue-600 transition-colors text-center"
                >
                  {t("editProfile.profile.uploadNew")}
                </label>
                <button
                  onClick={handleRemovePhoto}
                  className="border-2 border-red-500 text-red-500 bg-white dark:bg-dark-primary dark:text-red-400 dark:border-red-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  {t("editProfile.profile.remove")}
                </button>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("editProfile.form.fullName")}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <icon.User size={18} />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t("editProfile.form.fullName")}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("editProfile.form.emailAddress")}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <icon.Mail size={18} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t("editProfile.form.emailAddress")}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("editProfile.form.password")}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <icon.LockKeyhole size={18} />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="**********"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {showPassword ? (
                        <icon.EyeOff size={18} />
                      ) : (
                        <icon.Eye size={18} />
                      )}
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {t("editProfile.form.passwordHelper")}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("editProfile.form.phoneNumber")}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <icon.Phone size={18} />
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t("editProfile.form.phoneNumber")}
                    />
                  </div>
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t("editProfile.form.country")}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      <icon.Globe size={18} />
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="UAE">UAE</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Button
                type="button"
                variant="outline1"
                onClick={handleCancel}
                className="w-full sm:w-auto"
              >
                {t("editProfile.actions.cancel")}
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={handleSave}
                className="w-full sm:w-auto"
              >
                {t("editProfile.actions.saveChanges")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfileStudent;
