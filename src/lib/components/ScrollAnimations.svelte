<script lang="ts">
	import { onMount } from 'svelte';

	const selector = '.fade-up';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (!entry.isIntersecting) return;

					window.setTimeout(() => {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}, index * 80);
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll(selector).forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	});
</script>

<style>
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

	@media (prefers-reduced-motion: reduce) {
		:global(.fade-up) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
