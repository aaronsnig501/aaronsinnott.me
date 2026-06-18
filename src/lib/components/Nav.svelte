<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { translate, type Language, type TranslationKey } from '$lib/i18n';

	let {
		language,
		onToggleLanguage
	}: {
		language: Language;
		onToggleLanguage: () => void;
	} = $props();

	let hasScrolled = $state(false);
	let isMenuOpen = $state(false);

	onMount(() => {
		function updateScrollState() {
			hasScrolled = window.scrollY > 8;
		}

		updateScrollState();
		window.addEventListener('scroll', updateScrollState, { passive: true });

		return () => window.removeEventListener('scroll', updateScrollState);
	});

	function closeMenu() {
		isMenuOpen = false;
	}

	function t(key: TranslationKey) {
		return translate(language, key);
	}
</script>

<nav class:scrolled={hasScrolled} class="site-nav" aria-label="Primary navigation">
	<a href={resolve('/')} class="nav-logo">aaronsinnott.me</a>
	<div class="nav-right">
		<ul class:open={isMenuOpen} class="nav-links" id="primary-nav-links">
			<li><a href="#about" onclick={closeMenu}>{t('nav.about')}</a></li>
			<li><a href="#work" onclick={closeMenu}>{t('nav.work')}</a></li>
			<li>
				<a href="#experience" onclick={closeMenu}>{t('nav.experience')}</a>
			</li>
			<li>
				<a href="#contact" onclick={closeMenu}>{t('nav.contact')}</a>
			</li>
		</ul>
		<a class="nav-email" href="mailto:aaron@aaronsinnott.me">aaron@aaronsinnott.me</a>
		<button class="lang-toggle" type="button" onclick={onToggleLanguage}>
			<span aria-hidden="true">{language === 'ga' ? '🌐' : '🇮🇪'}</span>
			<span>{language === 'ga' ? t('language.en') : t('language.ga')}</span>
		</button>
		<button
			class="menu-toggle"
			type="button"
			aria-controls="primary-nav-links"
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			onclick={() => (isMenuOpen = !isMenuOpen)}
		>
			<span></span>
			<span></span>
		</button>
	</div>
</nav>

<style>
	.site-nav {
		align-items: center;
		background: rgba(36, 40, 59, 0);
		border-bottom: 0.5px solid rgba(192, 202, 245, 0);
		display: flex;
		height: 60px;
		justify-content: space-between;
		left: 0;
		padding: 0 48px;
		position: fixed;
		right: 0;
		top: 0;
		transition:
			background 0.2s,
			border-color 0.2s,
			box-shadow 0.2s;
		z-index: 100;
	}

	.site-nav.scrolled {
		backdrop-filter: blur(12px);
		background: rgba(36, 40, 59, 0.88);
		border-bottom-color: var(--rule);
		box-shadow: 0 10px 32px rgba(0, 0, 0, 0.22);
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

	.nav-email {
		color: var(--ink-3);
		font-family: 'DM Mono', monospace;
		font-size: 0.7rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		transition: color 0.2s;
	}

	.nav-email:hover,
	.nav-email:focus-visible {
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

	.menu-toggle {
		align-items: center;
		background: var(--bg-3);
		border: 0;
		border-radius: 100px;
		cursor: pointer;
		display: none;
		flex-direction: column;
		gap: 4px;
		height: 32px;
		justify-content: center;
		padding: 0;
		width: 42px;
	}

	.menu-toggle span {
		background: var(--bg);
		border-radius: 100px;
		display: block;
		height: 1px;
		transition:
			transform 0.2s,
			width 0.2s;
		width: 16px;
	}

	.menu-toggle[aria-expanded='true'] span:first-child {
		transform: translateY(2.5px) rotate(22deg);
	}

	.menu-toggle[aria-expanded='true'] span:last-child {
		transform: translateY(-2.5px) rotate(-22deg);
	}

	@media (max-width: 1080px) {
		.nav-email {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.site-nav {
			padding: 0 24px;
		}

		.nav-links {
			background: rgba(36, 40, 59, 0.96);
			border: 0.5px solid var(--rule);
			border-radius: 8px;
			box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
			display: grid;
			gap: 0;
			opacity: 0;
			padding: 8px;
			pointer-events: none;
			position: absolute;
			right: 24px;
			top: 68px;
			transform: translateY(-6px);
			transition:
				opacity 0.18s,
				transform 0.18s;
			width: min(220px, calc(100vw - 48px));
		}

		.nav-links.open {
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.nav-links a {
			display: block;
			padding: 10px 12px;
		}

		.nav-right {
			gap: 10px;
		}

		.menu-toggle {
			display: flex;
		}
	}
</style>
