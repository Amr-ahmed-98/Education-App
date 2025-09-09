import { createContext } from "react";

export interface LanguageContextType {
  changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);