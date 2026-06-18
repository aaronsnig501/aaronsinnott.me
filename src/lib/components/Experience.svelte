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
			<div class="timeline-date">{t('experience.currentDate')}</div>
			<div class="timeline-content">
				<h3>
					{t('experience.currentTitle')}
					<span class="senior-badge">{t('experience.currentBadge')}</span>
				</h3>
				<div class="company">888Spectate · 888Sport (evoke)</div>
				<p>{t('experience.currentDescription')}</p>
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
		background: var(--white);
		border-bottom: 0.5px solid var(--rule);
		border-top: 0.5px solid var(--rule);
		padding: 100px 48px;
	}

	.section-label,
	.timeline-date {
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
