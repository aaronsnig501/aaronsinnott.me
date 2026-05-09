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
		href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Mono:wght@300;400;500&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&display=swap"
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
		<span class="chooser-logo">{t('languageChooser.logo')}</span>
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
		--ink: #1c1c1a;
		--ink-2: #4a4a46;
		--ink-3: #888780;
		--bg: #f5f3ee;
		--bg-2: #eceae3;
		--white: #ffffff;
		--accent: #1d9e75;
		--accent-dark: #0f6e56;
		--accent-bg: #e1f5ee;
		--rule: rgba(0, 0, 0, 0.1);
		--amber: #ba7517;
		--amber-bg: #faeeda;
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
		background: var(--ink);
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
		color: rgba(255, 255, 255, 0.3);
		font-family: 'DM Mono', monospace;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		position: absolute;
		text-transform: uppercase;
		top: 32px;
		left: 48px;
	}

	#lang-chooser h1 {
		color: rgba(255, 255, 255, 0.55);
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
		background: rgba(255, 255, 255, 0.04);
		border: 0.5px solid rgba(255, 255, 255, 0.12);
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
		background: rgba(29, 158, 117, 0.12);
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
		font-family: 'DM Mono', monospace;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.lang-native {
		color: rgba(255, 255, 255, 0.35);
		font-size: 0.7rem;
	}

	.chooser-footnote {
		color: rgba(255, 255, 255, 0.2);
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
