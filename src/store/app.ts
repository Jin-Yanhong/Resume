import { defineStore } from 'pinia';
import { setI18nLocale } from '@/i18n';

export const useAppStore = defineStore({
	id: 'app',
	state: () => ({
		locale: 'zh',
	}),
	getters: {
		getLocale(): string {
			return this.locale;
		},
	},
	actions: {
		setLocale(locale: string): void {
			setI18nLocale(locale);
		},
	},
});
