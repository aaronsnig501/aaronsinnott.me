<script lang="ts">
	import { onMount } from 'svelte';
	import { asset, resolve } from '$app/paths';

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

<section class="hero">
	<p
		class="hero-eyebrow"
		data-en="Senior Software Developer · Loch Garman, Éire"
		data-ga="Forbróir Bogearraí Sinsearach · Loch Garman, Éire"
	>
		Senior Software Developer · Loch Garman, Éire
	</p>
	<h1
		data-en="Building things that <em>persist</em>,<br>for languages that should too."
		data-ga="Ag tógáil rudaí a <em>mhaireann</em>,<br>do theangacha ba chóir a mhaireachtáil freisin."
	>
		Building things that <em>persist</em>,<br />for languages that should too.
	</h1>
	<p
		class="hero-sub"
		data-en="I work on high-stakes distributed systems by day and build infrastructure for language revival by night. Technical depth, honest engineering, and a genuine belief that everyday courage — misneach — is how culture survives."
		data-ga="Oibrím ar chórais dháilte ardghéire de lá agus tógaim bonneagar don athbheochan teanga san oíche. Doimhneacht theicniúil, innealtóireacht ionraic, agus creideamh fírinneach gur slí mhaireachtála cultúir é misneach laethúil."
	>
		I work on high-stakes distributed systems by day and build infrastructure for language revival
		by night. Technical depth, honest engineering, and a genuine belief that everyday courage —
		misneach — is how culture survives.
	</p>
	<div class="hero-tags">
		<span class="tag tag-green">Python · Java · Distributed Systems</span>
		<span class="tag tag-green">Kafka · AWS · NestJS · SvelteKit</span>
		<span
			class="tag tag-amber"
			data-en="Irish · Portuguese · English"
			data-ga="Gaeilge · Portugáilis · Béarla"
		>
			Irish · Portuguese · English
		</span>
		<span
			class="tag tag-neutral"
			data-en="Loch Garman → Anywhere"
			data-ga="Loch Garman → Áit ar bith"
		>
			Loch Garman → Anywhere
		</span>
	</div>
	<div class="hero-cta">
		<a href="#work" class="btn btn-primary" data-en="See my work →" data-ga="Féach ar m'obair →"
			>See my work →</a
		>
		<a href={asset('/aaron_sinnott_cv_ga.html')} class="btn btn-secondary">CV as Gaeilge 🇮🇪</a>
		<a href={asset('/aaron_sinnott_cv.html')} class="btn btn-secondary">CV in English 🌐</a>
	</div>
	<div class="scroll-hint">
		<span class="scroll-line"></span>
		<span data-en="Scroll" data-ga="Scrollaigh">Scroll</span>
	</div>
</section>

<section id="about" class="about-section">
	<div class="section-label" data-en="About" data-ga="Fúm">About</div>
	<div class="about-grid">
		<div class="about-text fade-up">
			<h2
				data-en="Developer, advocate, and builder of things that last."
				data-ga="Forbróir, abhcóide, agus tógálaí rudaí a mhaireann."
			>
				Developer, advocate, and builder of things that last.
			</h2>
			<p
				data-en="I've spent a decade building software that operates at scale — real-time pricing systems, regulatory infrastructure across multiple jurisdictions, and distributed architectures that have to be right."
				data-ga="Chaith mé deich mbliana ag tógáil bogearraí ag scála — córais praghsála fíor-ama, bonneagar rialúcháin trasna dlínsí éagsúla, agus ailtireachtaí dáilte nach mór a bheith ceart."
			>
				I've spent a decade building software that operates at scale — real-time pricing systems,
				regulatory infrastructure across multiple jurisdictions, and distributed architectures that
				have to be right.
			</p>
			<p
				data-en="Outside of work, I'm building infrastructure for language revival. Not language learning — revival. The distinction matters. Misneach is a platform to make everyday Irish use in commercial spaces socially safe. The ROM hacks show that revival can happen anywhere, even in a 1985 Nintendo cartridge."
				data-ga="Lasmuigh den obair, tógaim bonneagar d'athbheochan teanga. Ní foghlaim teanga é — athbheochan. Tá an difríocht tábhachtach. Is ardán é Misneach chun úsáid laethúil na Gaeilge in áiteanna tráchtála a dhéanamh sábháilte go sóisialta."
			>
				Outside of work, I'm building infrastructure for language revival. Not language learning —
				revival. The distinction matters. Misneach is a platform to make everyday Irish use in
				commercial spaces socially safe. The ROM hacks show that revival can happen anywhere, even
				in a 1985 Nintendo cartridge.
			</p>
			<p
				data-en="I believe good engineering culture requires someone willing to name the problems others are thinking but not saying. In practice that means retrospectives, implementation reviews, and knowing which battles are worth having and which forum to have them in."
				data-ga="Creidim go n-éilíonn cultúr maith innealtóireachta duine atá sásta ainm a thabhairt ar na fadhbanna atá á gceapadh ag daoine eile ach nach bhfuil á rá. I ngníomh, ciallaíonn sin athbhreithnithe agus fios a bheith agat cén fóram atá ceart."
			>
				I believe good engineering culture requires someone willing to name the problems others are
				thinking but not saying. In practice that means retrospectives, implementation reviews, and
				knowing which battles are worth having and which forum to have them in.
			</p>
			<p
				data-en="I'm looking for roles where I can drive technical direction as well as deliver, ideally somewhere that values both depth and purpose."
				data-ga="Táim ag lorg ról inar féidir liom treo teicniúil a thiomáint chomh maith le seachadadh, go hidéalach in áit a luann doimhneacht agus cuspóir araon."
			>
				I'm looking for roles where I can drive technical direction as well as deliver, ideally
				somewhere that values both depth and purpose.
			</p>
		</div>
		<div class="about-facts fade-up">
			<div class="fact">
				<div class="fact-label" data-en="Currently" data-ga="Faoi láthair">Currently</div>
				<div
					class="fact-value"
					data-en="Senior Software Developer at 888Spectate (888 William Hill)"
					data-ga="Forbróir Bogearraí Sinsearach ag 888Spectate (888 William Hill)"
				>
					Senior Software Developer at 888Spectate (888 William Hill)
				</div>
			</div>
			<div class="fact">
				<div class="fact-label" data-en="Also building" data-ga="Ag tógáil freisin">
					Also building
				</div>
				<div
					class="fact-value"
					data-en="Misneach — Irish Language Normalisation Platform"
					data-ga="Misneach — Ardán Normalúcháin na Gaeilge"
				>
					Misneach — Irish Language Normalisation Platform
				</div>
			</div>
			<div class="fact">
				<div class="fact-label" data-en="Building toward" data-ga="Ag tógáil i dtreo">
					Building toward
				</div>
				<div
					class="fact-value"
					data-en="An open methodology for language revival — ROM hacks, subtitle translation, community tooling, Gaeltacht infrastructure. Replicable by any language community."
					data-ga="Modheolaíocht oscailte d'athbheochan teanga — haiceanna ROM, aistriúchán fotheideal, uirlisí pobail, bonneagar Gaeltachta. Inatáirgthe ag aon phobal teanga."
				>
					An open methodology for language revival — ROM hacks, subtitle translation, community
					tooling, Gaeltacht infrastructure. Replicable by any language community.
				</div>
			</div>
			<div class="fact">
				<div class="fact-label" data-en="Languages" data-ga="Teangacha">Languages</div>
				<div class="fact-value">
					<div class="lang-row">
						<span class="lang-pill"
							>🇮🇪 <span data-en="Irish (Intermediate)" data-ga="Gaeilge (Meánleibhéal)"
								>Irish (Intermediate)</span
							></span
						>
						<span class="lang-pill"
							>🇧🇷 <span data-en="Portuguese (Intermediate)" data-ga="Portugáilis (Meánleibhéal)"
								>Portuguese (Intermediate)</span
							></span
						>
						<span class="lang-pill"
							>🇬🇧 <span data-en="English (Native)" data-ga="Béarla (Dúchasach)"
								>English (Native)</span
							></span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

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
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		overflow: hidden;
		padding: 120px 48px 80px;
		position: relative;
	}

	.hero::before {
		background: radial-gradient(circle, rgba(29, 158, 117, 0.08) 0%, transparent 70%);
		content: '';
		height: 600px;
		pointer-events: none;
		position: absolute;
		right: -120px;
		top: -100px;
		width: 600px;
	}

	.hero-eyebrow,
	.section-label,
	.project-eyebrow,
	.project-status,
	.fact-label,
	.timeline-date,
	.writing-card-label,
	.contact-link-sub,
	footer span {
		font-family: 'DM Mono', monospace;
	}

	.hero-eyebrow {
		align-items: center;
		color: var(--accent-dark);
		display: flex;
		font-size: 0.75rem;
		gap: 10px;
		letter-spacing: 0.16em;
		margin: 0 0 20px;
		text-transform: uppercase;
	}

	.hero-eyebrow::before {
		background: var(--accent);
		content: '';
		display: inline-block;
		height: 1px;
		width: 24px;
	}

	.hero h1 {
		color: var(--ink);
		font-family: 'Fraunces', serif;
		font-size: clamp(3rem, 7vw, 6rem);
		font-weight: 300;
		line-height: 1.05;
		margin: 0 0 32px;
		max-width: 820px;
	}

	.hero h1 em,
	.contact-inner h2 em {
		color: var(--accent-dark);
		font-style: italic;
	}

	.hero-sub {
		color: var(--ink-2);
		font-size: 1.1rem;
		line-height: 1.7;
		margin: 0 0 48px;
		max-width: 540px;
	}

	.hero-tags,
	.hero-cta,
	.project-tech,
	.lang-row {
		display: flex;
		flex-wrap: wrap;
	}

	.hero-tags {
		gap: 10px;
		margin-bottom: 52px;
	}

	.tag {
		border: 0.5px solid;
		border-radius: 100px;
		font-family: 'DM Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 0.06em;
		padding: 6px 14px;
	}

	.tag-green {
		background: var(--accent-bg);
		border-color: rgba(15, 110, 86, 0.2);
		color: var(--accent-dark);
	}

	.tag-amber {
		background: var(--amber-bg);
		border-color: rgba(186, 117, 23, 0.2);
		color: var(--amber);
	}

	.tag-neutral {
		background: var(--bg-2);
		border-color: var(--rule);
		color: var(--ink-2);
	}

	.hero-cta {
		gap: 16px;
	}

	.btn {
		align-items: center;
		border: 0;
		border-radius: 4px;
		cursor: pointer;
		display: inline-flex;
		font-size: 0.88rem;
		font-weight: 500;
		gap: 8px;
		letter-spacing: 0.01em;
		padding: 13px 28px;
		text-decoration: none;
		transition:
			background 0.2s,
			border-color 0.2s,
			color 0.2s;
	}

	.btn-primary {
		background: var(--ink);
		color: var(--white);
	}

	.btn-primary:hover {
		background: var(--ink-2);
	}

	.btn-secondary {
		background: transparent;
		border: 0.5px solid rgba(0, 0, 0, 0.25);
		color: var(--ink);
	}

	.btn-secondary:hover {
		background: var(--bg-2);
	}

	.scroll-hint {
		align-items: center;
		bottom: 40px;
		color: var(--ink-3);
		display: flex;
		font-family: 'DM Mono', monospace;
		font-size: 0.68rem;
		gap: 10px;
		letter-spacing: 0.1em;
		position: absolute;
		text-transform: uppercase;
	}

	.scroll-line {
		background: var(--ink-3);
		height: 0.5px;
		overflow: hidden;
		position: relative;
		width: 40px;
	}

	.scroll-line::after {
		animation: slide 2s ease infinite;
		background: var(--accent);
		content: '';
		height: 100%;
		left: -100%;
		position: absolute;
		top: 0;
		width: 100%;
	}

	@keyframes slide {
		to {
			left: 100%;
		}
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

	.about-section,
	.experience-section {
		background: var(--white);
		border-bottom: 0.5px solid var(--rule);
		border-top: 0.5px solid var(--rule);
	}

	.about-grid {
		display: grid;
		gap: 80px;
		grid-template-columns: 1fr 1fr;
		max-width: 1000px;
	}

	.about-text h2,
	.contact-inner h2,
	.writing-lede,
	.project-title {
		font-family: 'Fraunces', serif;
	}

	.about-text h2 {
		font-size: 2.2rem;
		font-weight: 300;
		line-height: 1.2;
		margin: 0 0 24px;
	}

	.about-text p {
		color: var(--ink-2);
		font-size: 0.95rem;
		line-height: 1.75;
		margin: 0 0 16px;
	}

	.about-facts {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-top: 8px;
	}

	.fact {
		border-left: 2px solid var(--accent-bg);
		padding-left: 20px;
	}

	.fact-label {
		color: var(--ink-3);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		margin-bottom: 4px;
		text-transform: uppercase;
	}

	.fact-value {
		color: var(--ink);
		font-size: 0.92rem;
		line-height: 1.5;
	}

	.lang-row {
		gap: 10px;
		margin-top: 8px;
	}

	.lang-pill {
		align-items: center;
		background: var(--bg);
		border: 0.5px solid var(--rule);
		border-radius: 100px;
		color: var(--ink-2);
		display: flex;
		font-size: 0.82rem;
		gap: 6px;
		padding: 6px 14px;
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
		.hero,
		section {
			padding-left: 24px;
			padding-right: 24px;
		}

		.hero {
			padding-top: 100px;
		}

		.about-grid {
			gap: 40px;
			grid-template-columns: 1fr;
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
