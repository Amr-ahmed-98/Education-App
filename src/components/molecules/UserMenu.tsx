import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { User, ChevronDown, ChevronUp } from "lucide-react";
import ButtonThemeMenu from "../atoms/ButtonThemeMenu";
import ButtonLanguageMenu from "../atoms/ButtonLanguageMenu";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import { useProfile } from "@/features/auth/hooks/useProfile";
import { useLotout } from "@/features/auth/hooks/useLogout";
import Cookies from "js-cookie";
import { ENV } from "@/config/env";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const { toggleTheme } = useTheme();
  const { changeLanguage } = useLanguage();
  const { i18n } = useTranslation();

  const token = Cookies.get(ENV.ACCESS_TOKEN_KEY);
  const { data: profile, isLoading } = useProfile();
  const logout = useLotout();
  const firstLetter = profile?.email
    ? profile.email.charAt(0).toUpperCase()
    : "?";
  return (
    <div className="relative" ref={menuRef}>
      {/* Main Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-white transition hover:opacity-90"
      >
        <User className="h-5 w-5" />
        {open ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-2 w-64 rounded-sm  bg-bg shadow-lg cursor-pointer end-0`}
        >
          <div className="flex flex-col gap-2 ">
            {/* User Info */}
            {token && !isLoading && profile ? (
              <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 dark:border-dark-secondary">
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {firstLetter}
                </div>
                <span className="text-sm truncate">{profile.email}</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2 p-2">
                <Link
                  to="/sign-in"
                  className="rounded-sm bg-primary px-4 py-2 text-center text-white transition hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/sign-up"
                  className="rounded-sm bg-gray-500 px-4 py-2 text-center text-white transition hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  Register
                </Link>

                <hr className="my-2 border-gray-300 " />
              </div>
            )}

            {/* Theme */}
            <div
              onClick={() => {
                toggleTheme();
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-3 px-3 py-2 transition hover:bg-primary hover:text-white"
            >
              <ButtonThemeMenu />
              <span>Theme</span>
            </div>

            {/* Language */}
            <div
              onClick={() => {
                changeLanguage(i18n.language === "en" ? "ar" : "en");
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-3 px-3 py-2 transition hover:bg-primary hover:text-white"
            >
              <ButtonLanguageMenu />
              <span>Language</span>
            </div>
            {/* Logout */}
            {token && !isLoading && profile ? (
              <div
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-3 px-3 py-2 bg-secondary  text-white transition "
              >
                <span>Logout</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
