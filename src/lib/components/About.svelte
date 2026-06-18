<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';
	import SectionLabel from './SectionLabel.svelte';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="about" class="about-section">
	<SectionLabel>{t('about.label')}</SectionLabel>
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
		border-top: 0.5px solid var(--rule);
		margin: 0 auto;
		max-width: 900px;
		padding: 80px 48px;
	}

	.fact-label {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
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
		font-size: 1.05rem;
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
		text-transform: lowercase;
	}

	.fact-value {
		color: var(--ink);
		font-size: 0.88rem;
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
		color: var(--ink-2);
		display: flex;
		font-size: 0.82rem;
		gap: 6px;
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
