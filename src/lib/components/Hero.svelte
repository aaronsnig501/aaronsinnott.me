<script lang="ts">
	import { asset } from '$app/paths';
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="hero-content">
		<p class="hero-eyebrow hero-reveal">{t('hero.eyebrow')}</p>
		<h1 id="hero-title" class="hero-reveal">
			{t('hero.titleStart')} <em>{t('hero.titleEmphasis')}</em>,<br />{t('hero.titleEnd')}
		</h1>
		<p class="hero-sub hero-reveal">{t('hero.subheading')}</p>
		<div class="hero-tags hero-reveal">
			<span class="tag tag-cyan">Python · Java · Distributed Systems</span>
			<span class="tag tag-cyan">Kafka · AWS · NestJS · SvelteKit</span>
			<span class="tag tag-yellow">{t('hero.languageTag')}</span>
			<span class="tag tag-neutral">{t('hero.locationTag')}</span>
		</div>
		<div class="hero-cta hero-reveal">
			<a href="#work" class="btn btn-primary">{t('hero.workCta')}</a>
			<a href={asset('/aaron_sinnott_cv_ga.html')} class="btn btn-secondary">CV as Gaeilge 🇮🇪</a>
			<a href={asset('/aaron_sinnott_cv.html')} class="btn btn-secondary">CV in English 🌐</a>
		</div>
	</div>
	<div class="scroll-hint hero-reveal">
		<span class="scroll-line"></span>
		<span>{t('hero.scroll')}</span>
	</div>
</section>

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
		background: radial-gradient(circle, rgba(125, 207, 255, 0.12) 0%, transparent 70%);
		content: '';
		height: 600px;
		pointer-events: none;
		position: absolute;
		right: -120px;
		top: -100px;
		width: 600px;
	}

	.hero-content {
		position: relative;
		z-index: 1;
	}

	.hero-reveal {
		animation: hero-fade-in 0.7s ease both;
	}

	.hero-reveal:nth-child(2) {
		animation-delay: 0.08s;
	}

	.hero-reveal:nth-child(3) {
		animation-delay: 0.16s;
	}

	.hero-reveal:nth-child(4) {
		animation-delay: 0.24s;
	}

	.hero-reveal:nth-child(5) {
		animation-delay: 0.32s;
	}

	.scroll-hint.hero-reveal {
		animation-delay: 0.48s;
	}

	@keyframes hero-fade-in {
		from {
			opacity: 0;
			transform: translateY(16px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-eyebrow {
		align-items: center;
		color: var(--accent-dark);
		display: flex;
		font-family: 'DM Mono', monospace;
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

	.hero h1 em {
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
	.hero-cta {
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

	.tag-cyan {
		background: var(--accent-bg);
		border-color: rgba(125, 207, 255, 0.24);
		color: var(--accent-dark);
	}

	.tag-yellow {
		background: var(--amber-bg);
		border-color: rgba(224, 175, 104, 0.24);
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
		background: var(--bg-3);
		color: var(--text);
	}

	.btn-primary:hover {
		background: var(--accent);
		color: var(--bg-3);
	}

	.btn-secondary {
		background: transparent;
		border: 0.5px solid var(--rule);
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

	@media (prefers-reduced-motion: reduce) {
		.hero-reveal,
		.scroll-line::after {
			animation: none;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding: 100px 24px 80px;
		}
	}
</style>
