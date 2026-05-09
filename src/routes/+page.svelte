<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
	import Work from '$lib/components/Work.svelte';
	import Writing from '$lib/components/Writing.svelte';
</script>

<ScrollAnimations />

<Hero />

<About />

<Work />

<Writing />

<Experience />

<Contact />

<footer>
	<span>aaronsinnott.me</span>
	<span
		data-en="Built with intent · Loch Garman, Éire"
		data-ga="Tógtha le hintinn · Loch Garman, Éire"
	>
		Built with intent · Loch Garman, Éire
	</span>
</footer>

<style>
	footer span {
		font-family: 'DM Mono', monospace;
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
