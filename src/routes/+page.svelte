<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';
	import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
	import Work from '$lib/components/Work.svelte';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<ScrollAnimations />

<Hero />

<About />

<Work />

<Experience />

<Contact />

<footer>
	<span>~/aaronsinnott.me</span>
	<span>{t('footer.location')}</span>
</footer>

<style>
	footer span {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
	}

	footer {
		align-items: center;
		border-top: 0.5px solid var(--rule);
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: space-between;
		padding: 28px 48px;
	}

	footer span {
		color: var(--ink-3);
		font-size: 0.68rem;
		letter-spacing: 0.04em;
	}

	@media (max-width: 768px) {
		footer {
			padding: 24px;
		}
	}
</style>
