<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';
	import SectionLabel from './SectionLabel.svelte';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="experience" class="experience-section">
	<SectionLabel>{t('experience.label')}</SectionLabel>
	<div class="timeline">
		<div class="timeline-item fade-up">
			<div class="timeline-date">{t('experience.seniorDate')}</div>
			<div class="timeline-content">
				<h3>
					{t('experience.seniorTitle')}
					<span class="senior-badge">senior</span>
				</h3>
				<div class="company">888Spectate · 888Sport (evoke)</div>
				<p>{t('experience.seniorDescription')}</p>
			</div>
		</div>
		<div class="timeline-item fade-up">
			<div class="timeline-date">{t('experience.softwareDate')}</div>
			<div class="timeline-content">
				<h3>{t('experience.softwareTitle')}</h3>
				<div class="company">888Spectate · 888Sport (evoke)</div>
				<p>{t('experience.softwareDescription')}</p>
			</div>
		</div>
		<div class="timeline-item fade-up">
			<div class="timeline-date">Jun 2019 — Mar 2021</div>
			<div class="timeline-content">
				<h3>{t('experience.mentorTitle')}</h3>
				<div class="company">Code Institute</div>
				<p>{t('experience.mentorDescription')}</p>
			</div>
		</div>
		<div class="timeline-item fade-up">
			<div class="timeline-date">Jan 2016 — May 2019</div>
			<div class="timeline-content">
				<h3>{t('experience.productTitle')}</h3>
				<div class="company">Code Institute</div>
				<p>{t('experience.productDescription')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.experience-section {
		margin: 0 auto;
		max-width: 900px;
		padding: 80px 48px;
	}

	.timeline-date {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
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
		font-family: 'Fraunces', serif;
		font-size: 0.95rem;
		font-weight: 500;
		margin: 0 0 2px;
	}

	.company {
		color: var(--accent-dark);
		font-size: 0.85rem;
		font-weight: 500;
		margin-bottom: 10px;
	}

	.senior-badge {
		background: rgba(187, 154, 247, 0.12);
		border: 0.5px solid rgba(187, 154, 247, 0.3);
		border-radius: 3px;
		color: var(--accent-purple);
		display: inline-block;
		font-family: 'Fira Code', monospace;
		font-size: 0.62rem;
		font-weight: 400;
		letter-spacing: 0.06em;
		margin-left: 8px;
		padding: 1px 6px;
		text-transform: lowercase;
		vertical-align: middle;
	}

	.timeline-content p {
		color: var(--ink-2);
		font-size: 0.95rem;
		line-height: 1.65;
		margin: 0;
	}

	@media (max-width: 768px) {
		.experience-section {
			padding-left: 24px;
			padding-right: 24px;
		}

		.timeline-item {
			gap: 4px;
			grid-template-columns: 1fr;
		}
	}
</style>
