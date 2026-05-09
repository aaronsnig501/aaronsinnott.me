<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
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

<section id="experience" class="experience-section">
	<div class="section-label" data-en="Experience" data-ga="Taithí">Experience</div>
	<div class="timeline">
		<div class="timeline-item fade-up">
			<div class="timeline-date" data-en="Mar 2021 — Present" data-ga="Márta 2021 — i láthair">
				Mar 2021 — Present
			</div>
			<div class="timeline-content">
				<h3
					data-en="Software Developer <span class=&quot;senior-badge&quot;>Senior from ~2022</span>"
					data-ga="Forbróir Bogearraí <span class=&quot;senior-badge&quot;>Sinsearach ó ~2022</span>"
				>
					Software Developer <span class="senior-badge">Senior from ~2022</span>
				</h3>
				<div class="company">888Spectate · 888Sport (888 William Hill)</div>
				<p
					data-en="Building and maintaining distributed backend systems for a high-traffic real-time betting platform operating across multiple regulated markets. Led architecture on the feed panic system and the current bet placement decomposition."
					data-ga="Córais chúltaca dáilte a thógáil agus a chothabháil d'ardán gealltoireachta fíor-ama ardtráchta ag oibriú trasna margaí rialáilte éagsúla. Ceannasaíocht ar ailtireacht córas scaoill beathaithe agus ar dhianscaoileadh socrúcháin geall reatha."
				>
					Building and maintaining distributed backend systems for a high-traffic real-time betting
					platform operating across multiple regulated markets. Led architecture on the feed panic
					system and the current bet placement decomposition.
				</p>
			</div>
		</div>
		<div class="timeline-item fade-up">
			<div class="timeline-date">Jun 2019 — Mar 2021</div>
			<div class="timeline-content">
				<h3 data-en="GitHub Mentor" data-ga="Meantóir GitHub">GitHub Mentor</h3>
				<div class="company">Code Institute</div>
				<p
					data-en="Mentored students through full project lifecycles — requirements, architecture, code review, and interview preparation."
					data-ga="Meantóireacht ar mhic léinn trí thimthriallta tionscadail iomlána — riachtanais, ailtireacht, athbhreithniú cód, agus ullmhúchán agallamh."
				>
					Mentored students through full project lifecycles — requirements, architecture, code
					review, and interview preparation.
				</p>
			</div>
		</div>
		<div class="timeline-item fade-up">
			<div class="timeline-date">Jan 2016 — May 2019</div>
			<div class="timeline-content">
				<h3 data-en="Product Developer" data-ga="Forbróir Táirgí">Product Developer</h3>
				<div class="company">Code Institute</div>
				<p
					data-en="Delivered course content for a full-stack bootcamp and developed new platform features. Wrote the Python Fundamentals course."
					data-ga="Ábhar cúrsa seachadta do bhootcamp lánchruach agus gnéithe nua ardáin forbartha. Scríobh mé an cúrsa Bunghnéithe Python."
				>
					Delivered course content for a full-stack bootcamp and developed new platform features.
					Wrote the Python Fundamentals course.
				</p>
			</div>
		</div>
	</div>
</section>

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
	.timeline-date,
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

	.experience-section {
		background: var(--white);
		border-bottom: 0.5px solid var(--rule);
		border-top: 0.5px solid var(--rule);
	}

	.contact-inner h2,
	.timeline-content h3 {
		font-family: 'Fraunces', serif;
	}

	.timeline {
		max-width: 720px;
	}

	.timeline-item {
		border-bottom: 0.5px solid var(--rule);
		display: grid;
		gap: 32px;
		grid-template-columns: 160px 1fr;
		padding: 32px 0;
	}

	.timeline-date {
		color: var(--ink-3);
		font-size: 0.72rem;
		letter-spacing: 0.04em;
		padding-top: 4px;
	}

	.timeline-content h3 {
		color: var(--ink);
		font-size: 1rem;
		font-weight: 500;
		margin: 0 0 2px;
	}

	.company {
		color: var(--accent-dark);
		font-size: 0.85rem;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.timeline-content p {
		color: var(--ink-2);
		font-size: 0.85rem;
		line-height: 1.65;
		margin: 0;
	}

	.senior-badge {
		background: var(--accent-bg);
		border-radius: 100px;
		color: var(--accent-dark);
		display: inline-block;
		font-family: 'DM Mono', monospace;
		font-size: 0.62rem;
		letter-spacing: 0.08em;
		margin-left: 8px;
		padding: 2px 8px;
		text-transform: uppercase;
		vertical-align: middle;
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

		.timeline-item {
			gap: 4px;
			grid-template-columns: 1fr;
		}

		footer {
			padding: 24px;
		}
	}
</style>
