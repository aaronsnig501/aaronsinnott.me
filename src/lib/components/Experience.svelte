<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="experience" class="experience-section">
	<div class="section-label">{t('experience.label')}</div>
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
		background: var(--bg-2);
		border-bottom: 0.5px solid var(--rule);
		border-top: 0.5px solid var(--rule);
		padding: 100px 48px;
	}

	.section-label,
	.timeline-date {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
	}

	.section-label {
		align-items: center;
		color: var(--accent-green);
		display: flex;
		font-size: 0.68rem;
		gap: 14px;
		letter-spacing: 0.18em;
		margin-bottom: 48px;
		text-transform: lowercase;
	}

	.section-label::before {
		content: '#';
	}

	.section-label::after {
		background: var(--rule);
		content: '';
		flex: 1;
		height: 0.5px;
		max-width: 80px;
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
		font-size: 0.85rem;
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
