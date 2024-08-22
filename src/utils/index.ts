import { i18n } from '@/i18n';

export function getStorage(key: string): string | Array<any> | object | any {
	const str: string = window.localStorage[key] ?? undefined;
	try {
		if (str) {
			const storageString: string = window.localStorage.getItem(key) ?? '';
			return JSON.parse(storageString)[key];
		} else {
			return undefined;
		}
	} catch (error: any) {
		return undefined;
	}
}

export function setStorage(key: string, value: any): void {
	const str = JSON.stringify({ [key]: value });
	window.localStorage.setItem(key, str);
}

export function clearStorage(): void {
	window.localStorage.clear();
}

export function i18nTm(mst: string): string {
	const { te, tm } = i18n.global;
	let msg = te(mst) ? tm(mst) : '';
	return msg;
}
