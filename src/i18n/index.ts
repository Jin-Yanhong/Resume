import { createI18n } from 'vue-i18n';
import type { I18n } from 'vue-i18n';
import { WritableComputedRef } from 'vue';
import { dateTimeFormats } from './formats/dateTimeFormats';

import en from './locales/en.json';
import zh from './locales/zh.json';

const i18n: I18n = createI18n({
	legacy: true,
	locale: 'zh',
	fallbackLocale: 'en',
	dateTimeFormats,
	messages: { en, zh },
});

function setI18nLocale(locale: string | WritableComputedRef<string>) {
	if (i18n.mode === 'legacy') {
		i18n.global.locale = locale;
	} else {
		(i18n.global.locale as any).value = locale;
	}
	// axios.defaults.headers.common['Accept-Language'] = locale;
	(document.querySelector('html') as HTMLElement).setAttribute('lang', locale as string);
}

export { i18n, setI18nLocale };
