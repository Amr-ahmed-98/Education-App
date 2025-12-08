import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import * as icon from "@/assets/icons/icons";
import { defaultUserProfile, type UserProfile } from "@/utils/Data";

export default function ProfilePhotoUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const { t } = useTranslation();
  const [formData] = useState<UserProfile>(defaultUserProfile);

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
  return (
    <div>
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
    </div>
  );
}
