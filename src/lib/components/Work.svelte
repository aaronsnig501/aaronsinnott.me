<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';
	import SectionLabel from './SectionLabel.svelte';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="work" class="work-section">
	<SectionLabel>{t('work.label')}</SectionLabel>
	<div class="projects-grid">
		<article class="project-card personal fade-up">
			<div class="project-eyebrow">{t('work.emuhubEyebrow')}</div>
			<div class="project-status">
				<span class="status-dot"></span><span>{t('work.liveGithubPages')}</span>
			</div>
			<h2 class="project-title">EMU·HUB</h2>
			<p class="project-desc">{t('work.emuhubDescription')}</p>
			<div class="project-tech">
				<span>sveltekit</span><span>typescript</span><span>canvas api</span><span>docker</span><span
					>github pages</span
				>
			</div>
		</article>

		<article class="project-card featured personal fade-up">
			<div class="project-eyebrow">{t('work.ceangalEyebrow')}</div>
			<div class="project-status">
				<span class="status-dot"></span><span>{t('work.ceangalStatus')}</span>
			</div>
			<h2 class="project-title">Ceangal</h2>
			<p class="project-desc">{t('work.ceangalDescription')}</p>
			<div class="project-tech">
				<span>react 18</span><span>capacitor</span><span>aws s3</span><span>cloudfront</span><span
					>github actions</span
				><span>admob</span><span>revenuecat</span>
			</div>
		</article>

		<div class="labs-group">
			<div class="subsection-label">open source · athbheochan.irish</div>
			<div class="org-panel fade-up">
				<p class="org-description">{t('work.labsDescription')}</p>
			</div>
		</div>

		<article class="project-card labs fade-up">
			<div class="project-eyebrow">{t('work.focloirEyebrow')}</div>
			<div class="project-status">
				<span class="status-dot"></span><span>{t('work.focloirStatus')}</span>
			</div>
			<h2 class="project-title">Foclóir Póca</h2>
			<p class="project-desc">{t('work.focloirDescription')}</p>
			<div class="project-tech">
				<span>sveltekit</span><span>typescript</span><span>capacitor</span><span>aws amplify</span
				><span>route 53</span>
			</div>
		</article>

		<article class="project-card labs fade-up">
			<div class="project-eyebrow">{t('work.liostaEyebrow')}</div>
			<div class="project-status">
				<span class="status-dot"></span><span>{t('work.liostaStatus')}</span>
			</div>
			<h2 class="project-title">Líosta</h2>
			<p class="project-desc">{t('work.liostaDescription')}</p>
			<div class="project-tech">
				<span>sveltekit</span><span>capacitor</span><span>vite-plugin-pwa</span><span
					>aws amplify</span
				>
			</div>
		</article>

		<article class="project-card labs fade-up">
			<div class="project-eyebrow">{t('work.consoleEyebrow')}</div>
			<h2 class="project-title">Gaeilge sa Chonsol</h2>
			<p class="project-desc">{t('work.consoleDescription')}</p>
			<div class="project-tech">
				<span>python</span><span>sveltekit</span><span>supabase</span><span>github actions</span
				><span>bps patching</span>
			</div>
		</article>

		<article class="project-card labs fade-up">
			<div class="project-eyebrow">{t('work.aistriuEyebrow')}</div>
			<div class="project-status">
				<span class="status-dot"></span><span>{t('work.aistriuStatus')}</span>
			</div>
			<h2 class="project-title">Aistriú</h2>
			<p class="project-desc">{t('work.aistriuDescription')}</p>
			<div class="project-tech">
				<span>sveltekit</span><span>fastapi</span><span>weblate api</span><span>pontoon api</span
				><span>valkey</span><span>render.io</span>
			</div>
		</article>
	</div>
</section>

<style>
	.work-section {
		margin: 0 auto;
		max-width: 900px;
		padding: 80px 48px;
	}

	.project-eyebrow,
	.project-status,
	.subsection-label,
	.project-tech span {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
	}

	.projects-grid {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.labs-group {
		margin-top: 24px;
	}

	.subsection-label {
		align-items: center;
		color: var(--text-3);
		display: flex;
		font-size: 0.62rem;
		gap: 12px;
		letter-spacing: 0.16em;
		margin-bottom: 20px;
		text-transform: lowercase;
	}

	.subsection-label::before {
		color: var(--accent-green);
		content: '#';
	}

	.subsection-label::after {
		background: var(--rule);
		content: '';
		flex: 1;
		height: 0.5px;
	}

	.org-description {
		color: var(--text-2);
		font-family: 'Fraunces', Georgia, serif;
		font-size: 0.95rem;
		font-style: italic;
		line-height: 1.75;
		margin: 0;
	}

	.org-panel {
		background: var(--bg-3);
		border: 1px solid var(--accent-border);
		border-radius: 4px;
		margin-bottom: 0;
		padding: 20px 24px;
	}

	.project-card {
		background: var(--bg-2);
		border: 1px solid var(--rule);
		border-radius: 4px;
		overflow: hidden;
		padding: 28px 32px;
		position: relative;
		transition: border-color 0.2s;
	}

	.project-card:hover {
		border-color: var(--accent-border);
	}

	.project-card::before {
		content: '';
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		opacity: 0;
		transition: opacity 0.2s;
		width: 2px;
	}

	.project-card:hover::before {
		opacity: 1;
	}

	.project-card.personal::before {
		background: var(--accent-green);
	}

	.project-card.labs::before {
		background: var(--accent-purple);
	}

	.project-card.featured {
		background: var(--bg-3);
		border-color: var(--accent-border);
	}

	.project-card.featured::before {
		opacity: 1;
	}

	.project-eyebrow,
	.project-status {
		font-size: 0.67rem;
		letter-spacing: 0.12em;
		margin-bottom: 12px;
		text-transform: lowercase;
	}

	.project-card.personal .project-eyebrow {
		color: var(--accent-green);
	}

	.project-card.labs .project-eyebrow {
		color: var(--accent-purple);
	}

	.project-status {
		align-items: center;
		color: var(--accent-green);
		display: inline-flex;
		gap: 6px;
		margin-bottom: 20px;
	}

	.status-dot {
		animation: pulse 2s ease infinite;
		background: var(--accent-green);
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
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1.2;
		margin: 0 0 12px;
	}

	.project-desc {
		color: var(--ink-2);
		font-size: 1rem;
		line-height: 1.7;
		margin: 0 0 20px;
		max-width: 640px;
	}

	.project-tech {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.project-tech span {
		background: var(--bg);
		border: 1px solid var(--rule);
		border-radius: 2px;
		color: var(--text-3);
		font-size: 0.62rem;
		letter-spacing: 0.04em;
		padding: 2px 8px;
		text-transform: lowercase;
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
	}
</style>
