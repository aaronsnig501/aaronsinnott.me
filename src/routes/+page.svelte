<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import About from '$lib/components/About.svelte';
	import Hero from '$lib/components/Hero.svelte';

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

<section id="work">
	<div class="section-label" data-en="Selected Work" data-ga="Obair Roghnaithe">Selected Work</div>
	<div class="projects-grid">
		<article class="project-card featured fade-up">
			<div
				class="project-eyebrow"
				data-en="Founder & Solo Engineer · 2024–Present"
				data-ga="Bunaitheoir & Innealtóir Aonair · 2024–i láthair"
			>
				Founder & Solo Engineer · 2024–Present
			</div>
			<div class="project-status">
				<span class="status-dot"></span><span
					data-en="Live in production"
					data-ga="Beo i dtáirgeadh">Live in production</span
				>
			</div>
			<h2 class="project-title">Misneach</h2>
			<p
				class="project-desc"
				data-en="An Irish language normalisation platform built to make everyday use of Irish in commercial spaces socially safe and practically supported. Window stickers, staff badges, campaign tooling, behavioural analytics, and a mobile phrase bank — all built and deployed solo on AWS."
				data-ga="Ardán normalúcháin Gaeilge tógtha chun úsáid laethúil na Gaeilge in áiteanna tráchtála a dhéanamh sábháilte go sóisialta agus tacaithe go praiticiúil. Greamáin fuinneoige, suaitheantas foirne, uirlisí feachtais, anailísíocht iompraíochta, agus banc frásaí móibíleach — iomlán tógtha agus imscartha go haonair ar AWS."
			>
				An Irish language normalisation platform built to make everyday use of Irish in commercial
				spaces socially safe and practically supported. Window stickers, staff badges, campaign
				tooling, behavioural analytics, and a mobile phrase bank — all built and deployed solo on
				AWS.
			</p>
			<div class="project-tech">
				<span>NestJS Microservices</span><span>SvelteKit</span><span>Capacitor</span><span
					>AWS EC2</span
				><span>MariaDB</span><span>Plausible</span>
			</div>
		</article>

		<article class="project-card fade-up">
			<div
				class="project-eyebrow"
				data-en="Personal Project · Live"
				data-ga="Tionscadal Pearsanta · Beo"
			>
				Personal Project · Live
			</div>
			<div class="project-status">
				<span class="status-dot"></span><span
					data-en="Live on GitHub Pages"
					data-ga="Beo ar GitHub Pages">Live on GitHub Pages</span
				>
			</div>
			<h3 class="project-title">EMU·HUB</h3>
			<p
				class="project-desc"
				data-en="A browser-based multi-system emulator platform built from first principles — no off-the-shelf emulation libraries. Ships a fully playable CHIP-8 core with a multi-route SvelteKit architecture designed for future systems."
				data-ga="Ardán aithriseora il-chórais bunaithe ar bhrabhsálaí ó phrionsabail bhunúsacha — gan leabharlanna aithriseoireachta réamhdhéanta. Seolann croí CHIP-8 lán-imeartha le hailtireacht SvelteKit il-bhealach deartha do chórais sa todhchaí."
			>
				A browser-based multi-system emulator platform built from first principles — no
				off-the-shelf emulation libraries. Ships a fully playable CHIP-8 core with a multi-route
				SvelteKit architecture designed for future systems.
			</p>
			<div class="project-tech">
				<span>SvelteKit</span><span>TypeScript</span><span>Canvas API</span><span>Docker</span><span
					>GitHub Pages</span
				>
			</div>
		</article>

		<article class="project-card fade-up">
			<div
				class="project-eyebrow"
				data-en="Open Source · In Progress"
				data-ga="Foinse Oscailte · Ar Siúl"
			>
				Open Source · In Progress
			</div>
			<div class="project-status">
				<span class="status-dot"></span><span
					data-en="Spyro the Dragon — 74% complete"
					data-ga="Spyro the Dragon — 74% críochnaithe">Spyro the Dragon — 74% complete</span
				>
			</div>
			<h3 class="project-title">Gaeilge sa Chonsol</h3>
			<p
				class="project-desc"
				data-en="An open source Irish language localisation platform for retro games. A Python CLI extracts fixed-budget string tables, validates byte-length constraints, patches translated text, and generates BPS artifacts."
				data-ga="Ardán logánaithe foinse oscailte Gaeilge do chluichí atróshamhla. Eastóscann CLI Python táblaí teaghrán buiséad-seasta, bailíochtaíonn srianta fad beart, paistíonn téacs aistrithe, agus gineann déantáin BPS."
			>
				An open source Irish language localisation platform for retro games. A Python CLI extracts
				fixed-budget string tables, validates byte-length constraints, patches translated text, and
				generates BPS artifacts.
			</p>
			<div class="project-tech">
				<span>Python</span><span>SvelteKit</span><span>Supabase</span><span>GitHub Actions</span
				><span>BPS Patching</span>
			</div>
		</article>
	</div>
</section>

<section id="writing" class="writing-section">
	<div class="section-label" data-en="Writing" data-ga="Scríbhneoireacht">Writing</div>
	<div class="writing-inner">
		<p
			class="writing-lede"
			data-en="&quot;Relearning Irish and falling down a rabbit hole of culture, identity, and colonialism along the way. I write the way I talk — honestly, and not always efficiently.&quot;"
			data-ga="&quot;Gaeilge a athfhoghlaim agus ag titim síos poll coinín de chultúr, céannacht, agus coilíneachas ar an mbealach. Scríobhaim mar a labhraím — go hionraic, agus ní i gcónaí go héifeachtach.&quot;"
		>
			"Relearning Irish and falling down a rabbit hole of culture, identity, and colonialism along
			the way. I write the way I talk — honestly, and not always efficiently."
		</p>
		<p
			class="writing-copy"
			data-en="The blog covers Irish language revival, colonial history, identity, and the practical mechanics of keeping a language alive — ROM hacking, subtitle translation, approaching local businesses, building community infrastructure."
			data-ga="Clúdaíonn an blag athbheochan na Gaeilge, stair choilíneach, céannacht, agus meicníocht phraiticiúil coinneáil teanga beo — haiceáil ROM, aistriúchán fotheideal, gnólachtaí áitiúla a chur chuige, bonneagar pobail a thógáil."
		>
			The blog covers Irish language revival, colonial history, identity, and the practical
			mechanics of keeping a language alive — ROM hacking, subtitle translation, approaching local
			businesses, building community infrastructure.
		</p>
		<div class="writing-grid">
			<article class="writing-card">
				<div class="writing-card-label" data-en="Language & Education" data-ga="Teanga & Oideachas">
					Language & Education
				</div>
				<h3
					data-en="Why most Irish people don't speak Irish — and why it's not the teacher's fault"
					data-ga="Cén fáth nach labhraíonn formhór na nÉireannach Gaeilge — agus cén fáth nach locht an mhúinteora é"
				>
					Why most Irish people don't speak Irish — and why it's not the teacher's fault
				</h3>
				<p
					data-en="The exposure problem, the social problem, and why the real barrier was never in the classroom."
					data-ga="An fhadhb nochta, an fhadhb shóisialta, agus cén fáth nach raibh an bac fíor riamh sa seomra ranga."
				>
					The exposure problem, the social problem, and why the real barrier was never in the
					classroom.
				</p>
			</article>
			<article class="writing-card">
				<div
					class="writing-card-label"
					data-en="Revival in Practice"
					data-ga="Athbheochan i nGníomh"
				>
					Revival in Practice
				</div>
				<h3
					data-en="Translating Super Mario Bros. into Irish — what it takes and why it matters"
					data-ga="Super Mario Bros. a aistriú go Gaeilge — cad a theastaíonn agus cén fáth a bhfuil sé tábhachtach"
				>
					Translating Super Mario Bros. into Irish — what it takes and why it matters
				</h3>
				<p
					data-en="A deep dive into ROM hacking, character encoding, and language revival in unexpected places."
					data-ga="Tumadh domhain isteach i haiceáil ROM, ionchódú carachtar, agus athbheochan teanga in áiteanna gan choinne."
				>
					A deep dive into ROM hacking, character encoding, and language revival in unexpected
					places.
				</p>
			</article>
		</div>
		<a
			href={resolve('/')}
			class="btn btn-secondary writing-link"
			data-en="Blog launching soon — follow on Substack →"
			data-ga="Blag ag seoladh go luath — lean ar Substack →"
		>
			Blog launching soon — follow on Substack →
		</a>
	</div>
</section>

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
	.project-eyebrow,
	.project-status,
	.timeline-date,
	.writing-card-label,
	.contact-link-sub,
	footer span {
		font-family: 'DM Mono', monospace;
	}

	.contact-inner h2 em {
		color: var(--accent-dark);
		font-style: italic;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
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
	.writing-lede,
	.project-title {
		font-family: 'Fraunces', serif;
	}

	.projects-grid {
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		max-width: 1100px;
	}

	.project-card {
		background: var(--white);
		border: 0.5px solid var(--rule);
		border-radius: 8px;
		overflow: hidden;
		padding: 32px;
		position: relative;
		transition: transform 0.2s;
	}

	.project-card:hover {
		transform: translateY(-3px);
	}

	.project-card::before {
		background: var(--accent);
		content: '';
		height: 2px;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
	}

	.project-card:hover::before {
		transform: scaleX(1);
	}

	.project-card.featured {
		background: var(--ink);
		border-color: transparent;
		grid-column: span 2;
	}

	.project-card.featured .project-title {
		color: var(--white);
	}

	.project-card.featured .project-desc {
		color: rgba(255, 255, 255, 0.65);
	}

	.project-card.featured .project-tech span {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.7);
	}

	.project-eyebrow,
	.project-status {
		color: var(--accent-dark);
		font-size: 0.67rem;
		letter-spacing: 0.12em;
		margin-bottom: 12px;
		text-transform: uppercase;
	}

	.project-card.featured .project-eyebrow,
	.writing-section .section-label,
	.writing-card-label {
		color: rgba(29, 158, 117, 0.9);
	}

	.project-status {
		align-items: center;
		color: var(--accent);
		display: inline-flex;
		gap: 6px;
		margin-bottom: 20px;
	}

	.status-dot {
		animation: pulse 2s ease infinite;
		background: var(--accent);
		border-radius: 50%;
		height: 6px;
		width: 6px;
	}

	@keyframes pulse {
		50% {
			opacity: 0.4;
		}
	}

	.project-title {
		color: var(--ink);
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 1.2;
		margin: 0 0 12px;
	}

	.project-desc {
		color: var(--ink-2);
		font-size: 0.88rem;
		line-height: 1.7;
		margin: 0 0 20px;
	}

	.project-tech {
		gap: 6px;
	}

	.project-tech span {
		background: var(--bg);
		border: 0.5px solid var(--rule);
		border-radius: 100px;
		color: var(--ink-2);
		font-family: 'DM Mono', monospace;
		font-size: 0.65rem;
		letter-spacing: 0.05em;
		padding: 3px 10px;
	}

	.writing-section {
		background: var(--ink);
		color: var(--white);
	}

	.writing-inner {
		max-width: 760px;
	}

	.writing-lede {
		color: var(--white);
		font-size: 1.6rem;
		font-weight: 300;
		line-height: 1.3;
		margin: 0 0 24px;
	}

	.writing-copy {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.92rem;
		line-height: 1.75;
		margin: 0 0 40px;
		max-width: 580px;
	}

	.writing-grid {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		margin-bottom: 40px;
	}

	.writing-card {
		background: rgba(255, 255, 255, 0.05);
		border: 0.5px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 24px;
	}

	.writing-card-label {
		font-size: 0.65rem;
		letter-spacing: 0.1em;
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	.writing-card h3 {
		color: var(--white);
		font-size: 0.9rem;
		font-weight: 500;
		line-height: 1.4;
		margin: 0 0 8px;
	}

	.writing-card p {
		color: rgba(255, 255, 255, 0.45);
		font-size: 0.8rem;
		line-height: 1.6;
		margin: 0;
	}

	.writing-link {
		border-color: rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 0.8);
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

		.project-card.featured {
			grid-column: span 1;
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
