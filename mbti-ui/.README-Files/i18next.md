## i18next Examples


[i18next](https://www.i18next.com/) is the internationalization package used in this repository. It has the benefit of being production ready while also maintaining a simple configuration process to get started with.

In order to add a supported language the first step is to update the **SupportedAppLocale** type.


* ### A different approach for getting the language straight from the url 

```
export const lngDetector = new LanguageDetector();
lngDetector.addDetector({
  name: 'customRegionLanguageDetector',
  lookup() {
    const lng = extractLocaleFromUrl();
    if (lng) {
      return lng;
    }
    return localStorage.getItem('i18nextLng') || undefined;
  },
  cacheUserLanguage(lng: string) {
    localStorage.setItem('i18nextLng', lng);
  },
});
```
```
export const extractLocaleFromUrl = (): AppLocale | undefined => {
  const countryFromUrl = (window.location.pathname || '')
    .split('/')
    .filter(Boolean)[0];
  if (!countryFromUrl) {
    return undefined;
  }

  const languageFromQuery = qs.parse(window.location.search.substring(1));

  return customLocaleByCountryAndLanguage(
    countryFromUrl,
    (languageFromQuery.CCO_ID as string) || DefaultLocale
  );
};
```
```
const customLocaleByCountryAndLanguage = (
  countryCode: string,
  language: string
): AppLocale | undefined => {
  language = language.toLocaleLowerCase();
  countryCode = countryCode.toLocaleLowerCase();

  if (language === 'en-gb' && countryCode === 'gb') {
    return 'en-GB';
  }
  if (language === 'en-us' && countryCode === 'us') {
    return 'en-US';
  }
  };
```

**Please note that for the above implementation, the `queryString` library is needed.**

The `initTranslations` function will then be:
```
export const initTranslations = () =>
    i18next.use(initReactI18next).init(initOpts);

export const initTranslations = () =>
  i18next.use(lngDetector).use(initReactI18next).init(initOpts);
```
