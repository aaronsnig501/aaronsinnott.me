<script lang="ts">
	import { writable } from 'svelte/store';
	import Nav from '$lib/components/Nav.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { setI18nContext, translate, type Language, type TranslationKey } from '$lib/i18n';

	let { children } = $props();

	const storageKey = 'preferred-language';
	const languageStore = writable<Language | null>(null);

	let language = $state<Language | null>(null);
	let isReady = $state(false);

	setI18nContext({ language: languageStore });

	$effect(() => {
		const storedLanguage = window.localStorage.getItem(storageKey);

		if (storedLanguage === 'ga' || storedLanguage === 'en') {
			language = storedLanguage;
		}

		isReady = true;
	});

	$effect(() => {
		if (!language) return;

		languageStore.set(language);
		document.documentElement.lang = language;
	});

	function chooseLanguage(selectedLanguage: Language) {
		language = selectedLanguage;
		window.localStorage.setItem(storageKey, selectedLanguage);
	}

	function toggleLanguage() {
		chooseLanguage(language === 'ga' ? 'en' : 'ga');
	}

	function t(key: TranslationKey) {
		return translate(language, key);
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if isReady && language}
	<div class="site-content">
		<Nav {language} onToggleLanguage={toggleLanguage} />

		<main>
			{@render children()}
		</main>
	</div>
{:else if isReady}
	<div id="lang-chooser" aria-labelledby="language-title" aria-modal="true" role="dialog">
		<span class="chooser-logo">~/aaronsinnott.me $ select_language</span>
		<h1 id="language-title">
			{t('languageChooser.promptGa')}<br /><em>{t('languageChooser.promptEn')}</em>
		</h1>
		<div class="lang-options">
			<button class="lang-btn" type="button" onclick={() => chooseLanguage('ga')}>
				<span class="flag" aria-hidden="true">🇮🇪</span>
				<span class="lang-name">{t('languageChooser.gaeilge')}</span>
				<span class="lang-native">{t('languageChooser.asGaeilge')}</span>
			</button>
			<button class="lang-btn" type="button" onclick={() => chooseLanguage('en')}>
				<span class="flag" aria-hidden="true">🌐</span>
				<span class="lang-name">{t('languageChooser.english')}</span>
				<span class="lang-native">{t('languageChooser.inEnglish')}</span>
			</button>
		</div>
		<span class="chooser-footnote">{t('languageChooser.footnote')}</span>
	</div>
{/if}

<style>
	:global(:root) {
		--bg: #24283b;
		--bg-2: #292e42;
		--bg-3: #1f2335;
		--text: #c0caf5;
		--text-2: #9aa0c0;
		--text-3: #8891b8;
		--accent: #7dcfff;
		--accent-dim: rgba(125, 207, 255, 0.1);
		--accent-border: rgba(125, 207, 255, 0.25);
		--accent-green: #9ece6a;
		--accent-purple: #bb9af7;
		--accent-yellow: #e0af68;
		--rule: rgba(192, 202, 245, 0.08);
		--ink: var(--text);
		--ink-2: var(--text-2);
		--ink-3: var(--text-3);
		--white: var(--text);
		--accent-dark: var(--accent);
		--accent-bg: rgba(125, 207, 255, 0.12);
		--amber: var(--accent-yellow);
		--amber-bg: rgba(224, 175, 104, 0.12);
	}

	:global(*),
	:global(*::before),
	:global(*::after) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background: var(--bg);
		color: var(--ink);
		font-family: 'Instrument Sans', sans-serif;
		font-size: 16px;
		line-height: 1.6;
		margin: 0;
		overflow-x: hidden;
	}

	:global(button) {
		font: inherit;
	}

	:global(a) {
		color: inherit;
	}

	#lang-chooser {
		align-items: center;
		background: var(--bg-3);
		display: flex;
		flex-direction: column;
		gap: 48px;
		inset: 0;
		justify-content: center;
		min-height: 100vh;
		padding: 40px;
		position: fixed;
		z-index: 1000;
	}

	.chooser-logo {
		color: var(--accent-green);
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
		font-size: 0.8rem;
		letter-spacing: 0.02em;
		position: absolute;
		top: 32px;
		left: 48px;
	}

	#lang-chooser h1 {
		color: var(--text-2);
		font-family: 'Fraunces', serif;
		font-size: clamp(1.3rem, 3vw, 1.9rem);
		font-weight: 300;
		line-height: 1.5;
		margin: 0;
		max-width: 500px;
		text-align: center;
	}

	#lang-chooser h1 em {
		color: var(--accent);
		font-style: italic;
	}

	.lang-options {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}

	.lang-btn {
		align-items: center;
		background: var(--bg-2);
		border: 0.5px solid var(--rule);
		border-radius: 8px;
		color: inherit;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-width: 180px;
		padding: 32px 48px;
		transition:
			background 0.25s,
			border-color 0.25s,
			transform 0.25s;
	}

	.lang-btn:hover,
	.lang-btn:focus-visible {
		background: var(--accent-bg);
		border-color: var(--accent);
		transform: translateY(-2px);
	}

	.flag {
		font-size: 2.4rem;
		line-height: 1;
	}

	.lang-name {
		color: var(--white);
		font-family: 'Fraunces', serif;
		font-size: 1.4rem;
		font-weight: 300;
	}

	.lang-native,
	.chooser-footnote {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
		letter-spacing: 0.08em;
		text-transform: lowercase;
	}

	.lang-native {
		color: var(--text-3);
		font-size: 0.7rem;
	}

	.chooser-footnote {
		color: var(--text-3);
		font-size: 0.68rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.chooser-logo {
			left: 24px;
			top: 24px;
		}
	}
</style>
