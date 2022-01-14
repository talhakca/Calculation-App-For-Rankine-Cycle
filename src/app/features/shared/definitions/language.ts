import { Language } from '../models/language/language';

/* EVERY SUPPORTED LANGUAGE OBJECTS */
export const ENGLISH_LANGUAGE: Language = {
  title: 'English',
  shortTitle: 'EN',
  selector: 'ENGLISH',
  name: 'en',
};

export const FRENCH_LANGUAGE: Language = {
  title: 'French',
  shortTitle: 'FR',
  selector: 'FRENCH',
  name: 'fr',
};

/* DEFAULT LANGUAGE VARIABLE */
export const defaultLanguage = ENGLISH_LANGUAGE;

/* SUPPORTED LANGUAGES ARRAY */
export const supportedLanguages: Language[] = [
  ENGLISH_LANGUAGE,
  FRENCH_LANGUAGE,
];
