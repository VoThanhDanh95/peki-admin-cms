import polyglotI18nProvider from 'ra-i18n-polyglot';
import { messages as vietnameseMessages } from './messages/vietnamese'

export const i18nProvider = polyglotI18nProvider(locale =>
    vietnameseMessages,
    'vi' // Default locale
);