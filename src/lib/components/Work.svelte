<section id="work" class="work-section">
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

<style>
	.work-section {
		padding: 100px 48px;
	}

	.section-label,
	.project-eyebrow,
	.project-status,
	.project-tech span {
		font-family: 'DM Mono', monospace;
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

	.project-card.featured .project-eyebrow {
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
		font-family: 'Fraunces', serif;
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
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.project-tech span {
		background: var(--bg);
		border: 0.5px solid var(--rule);
		border-radius: 100px;
		color: var(--ink-2);
		font-size: 0.65rem;
		letter-spacing: 0.05em;
		padding: 3px 10px;
	}

	@media (prefers-reduced-motion: reduce) {
		.status-dot {
			animation: none;
		}
	}

	@media (max-width: 768px) {
		.work-section {
			padding-left: 24px;
			padding-right: 24px;
		}

		.project-card.featured {
			grid-column: span 1;
		}
	}
</style>
