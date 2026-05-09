<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
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

<section id="contact">
	<div class="section-label" data-en="Contact" data-ga="Teagmháil">Contact</div>
	<div class="contact-inner fade-up">
		<h2
			data-en="Let's build something <em>worth building</em>."
			data-ga="Tógaimis rud éigin <em>atá fiú a thógáil</em>."
		>
			Let's build something <em>worth building</em>.
		</h2>
		<p
			data-en="I'm open to senior and staff-level engineering roles, particularly in distributed systems, platform engineering, or anywhere that values technical depth. Based in Loch Garman — happy to discuss remote or hybrid."
			data-ga="Táim oscailte do róil innealtóireachta sinsearacha agus ar leibhéal foirne, go háirithe i gcórais dháilte, innealtóireacht ardáin, nó áit ar bith a luann doimhneacht theicniúil. Bunaithe i Loch Garman — sásta cianobair nó hibrideach a phlé."
		>
			I'm open to senior and staff-level engineering roles, particularly in distributed systems,
			platform engineering, or anywhere that values technical depth. Based in Loch Garman — happy to
			discuss remote or hybrid.
		</p>
		<div class="contact-links">
			<a href="mailto:aaronsnig@gmail.com" class="contact-link">
				<span class="contact-link-left">
					<span class="contact-link-icon">✉</span>
					<span
						><span class="contact-link-label">Email</span><span class="contact-link-sub"
							>aaronsnig@gmail.com</span
						></span
					>
				</span>
				<span class="contact-link-arrow">→</span>
			</a>
			<a
				href="https://linkedin.com/in/aaronsinnott"
				target="_blank"
				rel="noreferrer"
				class="contact-link"
			>
				<span class="contact-link-left">
					<span class="contact-link-icon">in</span>
					<span
						><span class="contact-link-label">LinkedIn</span><span class="contact-link-sub"
							>linkedin.com/in/aaronsinnott</span
						></span
					>
				</span>
				<span class="contact-link-arrow">→</span>
			</a>
			<a href="https://github.com/aaronsnig" target="_blank" rel="noreferrer" class="contact-link">
				<span class="contact-link-left">
					<span class="contact-link-icon">gh</span>
					<span
						><span class="contact-link-label">GitHub</span><span class="contact-link-sub"
							>github.com/aaronsnig</span
						></span
					>
				</span>
				<span class="contact-link-arrow">→</span>
			</a>
		</div>
	</div>
</section>

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
	.section-label,
	.contact-link-sub,
	footer span {
		font-family: 'DM Mono', monospace;
	}

	.contact-inner h2 em {
		color: var(--accent-dark);
		font-style: italic;
	}

	section {
		padding: 100px 48px;
	}

	.section-label {
		align-items: center;
		color: var(--accent-dark);
		display: flex;
		font-size: 0.68rem;
		gap: 14px;
		letter-spacing: 0.18em;
		margin-bottom: 48px;
		text-transform: uppercase;
	}

	.section-label::after {
		background: var(--rule);
		content: '';
		flex: 1;
		height: 0.5px;
		max-width: 80px;
	}

	.contact-inner h2 {
		font-family: 'Fraunces', serif;
	}

	.contact-inner {
		max-width: 600px;
	}

	.contact-inner h2 {
		font-size: 2.6rem;
		font-weight: 300;
		line-height: 1.15;
		margin: 0 0 20px;
	}

	.contact-inner > p {
		color: var(--ink-2);
		font-size: 0.95rem;
		line-height: 1.7;
		margin: 0 0 40px;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.contact-link {
		align-items: center;
		background: var(--white);
		border: 0.5px solid var(--rule);
		border-radius: 6px;
		display: flex;
		justify-content: space-between;
		padding: 18px 24px;
		text-decoration: none;
		transition:
			background 0.2s,
			border-color 0.2s;
	}

	.contact-link:hover {
		background: var(--accent-bg);
		border-color: var(--accent);
	}

	.contact-link-left {
		align-items: center;
		display: flex;
		gap: 14px;
	}

	.contact-link-icon {
		align-items: center;
		background: var(--bg);
		border-radius: 6px;
		display: flex;
		font-size: 14px;
		height: 36px;
		justify-content: center;
		width: 36px;
	}

	.contact-link-label,
	.contact-link-sub {
		display: block;
	}

	.contact-link-label {
		color: var(--ink);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.contact-link-sub {
		color: var(--ink-3);
		font-size: 0.72rem;
		margin-top: 1px;
	}

	.contact-link-arrow {
		color: var(--ink-3);
		transition:
			color 0.2s,
			transform 0.2s;
	}

	.contact-link:hover .contact-link-arrow {
		color: var(--accent-dark);
		transform: translateX(4px);
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

	.fade-up {
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
		section {
			padding-left: 24px;
			padding-right: 24px;
		}

		footer {
			padding: 24px;
		}
	}
</style>
