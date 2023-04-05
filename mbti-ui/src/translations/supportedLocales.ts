import enUsLocale from 'date-fns/locale/en-US';
import ro from 'date-fns/locale/ro';

export const DefaultLocale = 'en-US';
export const SupportedAppLocale = ['en-US', 'ro', DefaultLocale] as const;

export type AppLocale = typeof SupportedAppLocale[number];

export const dateFnsLocales: Record<AppLocale, Locale> = {
    'en-US': enUsLocale,
    'ro': ro
};
