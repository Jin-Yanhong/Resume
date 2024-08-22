import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router/index';
import { i18n } from '@/i18n/index';
import { i18nTm, getStorage, setStorage } from '@/utils/index';

import { useAppStore } from './store/app';

import '@/assets/index.css';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$i18nTm = i18nTm;
app.config.globalProperties.$setStorage = setStorage;
app.config.globalProperties.$getStorage = getStorage;

app.use(router).use(i18n).use(pinia).mount('#app');

window.onload = function () {
	const locale = window.navigator.language;
	useAppStore().setLocale(locale);
};
