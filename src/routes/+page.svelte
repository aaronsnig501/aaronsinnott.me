<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Work from '$lib/components/Work.svelte';
	import Writing from '$lib/components/Writing.svelte';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						window.setTimeout(() => entry.target.classList.add('visible'), index * 80);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.fade-up').forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	});
</script>

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

	:global(.fade-up) {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}

	:global(.fade-up.visible) {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		footer {
			padding: 24px;
		}
	}
</style>
