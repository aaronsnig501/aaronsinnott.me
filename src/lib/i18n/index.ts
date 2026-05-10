import { getContext, setContext } from 'svelte';
import type { Readable } from 'svelte/store';
import { en } from './en';
import { ga } from './ga';

export type Language = 'ga' | 'en';
export type TranslationKey = keyof typeof en;

const i18nContextKey = Symbol('i18n');

export const translations: Record<Language, Record<TranslationKey, string>> = {
	en,
	ga
};

export type I18nContext = {
	language: Readable<Language | null>;
};

export function setI18nContext(context: I18nContext) {
	setContext(i18nContextKey, context);
}

export function getI18nContext() {
	return getContext<I18nContext>(i18nContextKey);
}

export function translate(language: Language | null, key: TranslationKey) {
	return translations[language ?? 'en'][key];
}
