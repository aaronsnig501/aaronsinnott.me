<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="about" class="about-section">
	<div class="section-label">{t('about.label')}</div>
	<div class="about-grid">
		<div class="about-text fade-up">
			<h2>{t('about.heading')}</h2>
			<p>{t('about.bio1')}</p>
			<p>{t('about.bio2')}</p>
			<p>{t('about.bio3')}</p>
			<p>{t('about.bio4')}</p>
		</div>
		<div class="about-facts fade-up">
			<div class="fact">
				<div class="fact-label">{t('about.currentlyLabel')}</div>
				<div class="fact-value">{t('about.currentlyValue')}</div>
			</div>
			<div class="fact">
				<div class="fact-label">{t('about.alsoBuildingLabel')}</div>
				<div class="fact-value">{t('about.alsoBuildingValue')}</div>
			</div>
			<div class="fact">
				<div class="fact-label">{t('about.buildingTowardLabel')}</div>
				<div class="fact-value">{t('about.buildingTowardValue')}</div>
			</div>
			<div class="fact">
				<div class="fact-label">{t('about.studyingLabel')}</div>
				<div class="fact-value">{t('about.studyingValue')}</div>
			</div>
			<div class="fact">
				<div class="fact-label">{t('about.languagesLabel')}</div>
				<div class="fact-value">
					<div class="lang-row">
						<span class="lang-pill">🇮🇪 <span>{t('about.irish')}</span></span>
						<span class="lang-pill">🇧🇷 <span>{t('about.portuguese')}</span></span>
						<span class="lang-pill">🇬🇧 <span>{t('about.english')}</span></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		background: var(--bg-2);
		border-bottom: 0.5px solid var(--rule);
		border-top: 0.5px solid var(--rule);
		padding: 100px 48px;
	}

	.section-label,
	.fact-label {
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

	.about-grid {
		display: grid;
		gap: 80px;
		grid-template-columns: 1fr 1fr;
		max-width: 1000px;
	}

	.about-text h2 {
		font-family: 'Fraunces', serif;
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
		display: flex;
		flex-wrap: wrap;
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

	@media (max-width: 768px) {
		.about-section {
			padding-left: 24px;
			padding-right: 24px;
		}

		.about-grid {
			gap: 40px;
			grid-template-columns: 1fr;
		}
	}
</style>
