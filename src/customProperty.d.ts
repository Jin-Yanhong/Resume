import { i18n } from '@/i18n';
import type { DefineComponent } from 'vue';
import { i18nTm, getStorage, setStorage } from './utils/index';

const { te, tm, t } = i18n.global;

declare module 'vue' {
	interface ComponentCustomProperties {
		$getStorage: typeof getStorage;
		$setStorage: typeof setStorage;
		$i18nTm: typeof i18nTm;
		$te: typeof te;
		$tm: typeof tm;
		$t: typeof t;
	}
}
