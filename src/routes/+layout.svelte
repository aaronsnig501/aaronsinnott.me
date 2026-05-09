<script lang="ts">
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	type Language = 'ga' | 'en';

	const storageKey = 'preferred-language';
	const languageNames: Record<Language, string> = {
		ga: 'Gaeilge',
		en: 'English'
	};

	let language = $state<Language | null>(null);
	let isReady = $state(false);

	$effect(() => {
		const storedLanguage = window.localStorage.getItem(storageKey);

		if (storedLanguage === 'ga' || storedLanguage === 'en') {
			language = storedLanguage;
		}

		isReady = true;
	});

	$effect(() => {
		if (!language) return;

		const selectedLanguage = language;

		document.documentElement.lang = selectedLanguage;
		void tick().then(() => applyLanguage(selectedLanguage));
	});

	function chooseLanguage(selectedLanguage: Language) {
		language = selectedLanguage;
		window.localStorage.setItem(storageKey, selectedLanguage);
	}

	function toggleLanguage() {
		chooseLanguage(language === 'ga' ? 'en' : 'ga');
	}

	function applyLanguage(selectedLanguage: Language) {
		document.querySelectorAll<HTMLElement>('[data-en][data-ga]').forEach((element) => {
			const translation = element.dataset[selectedLanguage];

			if (translation) {
				element.innerHTML = translation;
			}
		});
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
		<nav class="site-nav" aria-label="Primary navigation">
			<a href={resolve('/')} class="nav-logo">aaronsinnott.me</a>
			<div class="nav-right">
				<ul class="nav-links">
					<li><a href="#about" data-en="About" data-ga="Fúm">About</a></li>
					<li><a href="#work" data-en="Work" data-ga="Obair">Work</a></li>
					<li><a href="#writing" data-en="Writing" data-ga="Scríbhneoireacht">Writing</a></li>
					<li><a href="#experience" data-en="Experience" data-ga="Taithí">Experience</a></li>
					<li><a href="#contact" data-en="Contact" data-ga="Teagmháil">Contact</a></li>
				</ul>
				<button class="lang-toggle" type="button" onclick={toggleLanguage}>
					<span aria-hidden="true">{language === 'ga' ? '🌐' : '🇮🇪'}</span>
					<span>{language === 'ga' ? languageNames.en : languageNames.ga}</span>
				</button>
			</div>
		</nav>

		<main>
			{@render children()}
		</main>
	</div>
{:else if isReady}
	<div id="lang-chooser" aria-labelledby="language-title" aria-modal="true" role="dialog">
		<span class="chooser-logo">aaronsinnott.me</span>
		<h1 id="language-title">
			Conas ba mhaith leat an suíomh a léamh?<br /><em>How would you like to read the site?</em>
		</h1>
		<div class="lang-options">
			<button class="lang-btn" type="button" onclick={() => chooseLanguage('ga')}>
				<span class="flag" aria-hidden="true">🇮🇪</span>
				<span class="lang-name">Gaeilge</span>
				<span class="lang-native">As Gaeilge</span>
			</button>
			<button class="lang-btn" type="button" onclick={() => chooseLanguage('en')}>
				<span class="flag" aria-hidden="true">🌐</span>
				<span class="lang-name">English</span>
				<span class="lang-native">In English</span>
			</button>
		</div>
		<span class="chooser-footnote">
			Is féidir leat an teanga a athrú am ar bith · You can change language at any time
		</span>
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

	.site-nav {
		align-items: center;
		backdrop-filter: blur(12px);
		background: rgba(245, 243, 238, 0.88);
		border-bottom: 0.5px solid var(--rule);
		display: flex;
		height: 60px;
		justify-content: space-between;
		left: 0;
		padding: 0 48px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 100;
	}

	.nav-logo {
		color: var(--ink);
		font-family: 'DM Mono', monospace;
		font-size: 0.8rem;
		letter-spacing: 0.04em;
		text-decoration: none;
	}

	.nav-right {
		align-items: center;
		display: flex;
		gap: 24px;
	}

	.nav-links {
		display: flex;
		gap: 32px;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links a {
		color: var(--ink-2);
		font-size: 0.85rem;
		letter-spacing: 0.01em;
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-links a:hover,
	.nav-links a:focus-visible {
		color: var(--accent-dark);
	}

	.lang-toggle {
		align-items: center;
		background: var(--bg-2);
		border: 0.5px solid var(--rule);
		border-radius: 100px;
		color: var(--ink-2);
		cursor: pointer;
		display: flex;
		font-family: 'DM Mono', monospace;
		font-size: 0.7rem;
		gap: 6px;
		letter-spacing: 0.05em;
		padding: 5px 12px 5px 8px;
		transition:
			border-color 0.2s,
			color 0.2s;
	}

	.lang-toggle:hover,
	.lang-toggle:focus-visible {
		border-color: var(--accent);
		color: var(--accent-dark);
	}

	@media (max-width: 768px) {
		.site-nav {
			padding: 0 24px;
		}

		.nav-links {
			display: none;
		}

		.chooser-logo {
			left: 24px;
			top: 24px;
		}
	}
</style>
