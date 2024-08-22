/* eslint-disable */
import { i18n } from '@/i18n';

const { te, tm, t } = i18n.global;

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	interface ComponentCustomProperties {
		$te: typeof te;
		$tm: typeof tm;
		$t: typeof t;
	}

	const component: DefineComponent<{}, {}, any>;
	export default component;
}
