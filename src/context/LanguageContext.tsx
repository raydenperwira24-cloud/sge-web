"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import id from "@/dictionaries/id";
import en from "@/dictionaries/en";

type Language = "id" | "en";

const dictionaries = {
  id,
  en,
};

type LanguageContextType = {
  lang: Language;
  setLang: React.Dispatch<
    React.SetStateAction<Language>
  >;
  t: typeof id;
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] =
    useState<Language>("id");

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}