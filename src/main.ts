import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router/index';
import { i18n } from '@/i18n/index';
import { getStorage, setStorage } from './utils/index';

import { useAppStore } from './store/app';

import '@/assets/index.css';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$setStorage = setStorage;
app.config.globalProperties.$getStorage = getStorage;

app.use(router);
app.use(i18n);
app.use(pinia);

window.onload = function () {
	const locale = window.navigator.language;
	useAppStore().setLocale(locale);

	console.log(process.env);
};

app.mount('#app');
