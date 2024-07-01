import { ui, defaultLang, type Language, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: UiKey): string {
    return ui[lang][key] || ui[defaultLang][key] || key;
  }
}