<script lang="ts">
	import { resolve } from '$app/paths';
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="writing" class="writing-section">
	<div class="section-label">{t('writing.label')}</div>
	<div class="writing-inner">
		<p class="writing-lede">{t('writing.lede')}</p>
		<p class="writing-copy">{t('writing.copy')}</p>
		<div class="writing-grid">
			<article class="writing-card">
				<div class="writing-card-label">{t('writing.card1Label')}</div>
				<h3>{t('writing.card1Title')}</h3>
				<p>{t('writing.card1Copy')}</p>
			</article>
			<article class="writing-card">
				<div class="writing-card-label">{t('writing.card2Label')}</div>
				<h3>{t('writing.card2Title')}</h3>
				<p>{t('writing.card2Copy')}</p>
			</article>
		</div>
		<a href={resolve('/')} class="btn btn-secondary writing-link">{t('writing.cta')}</a>
	</div>
</section>

<style>
	.writing-section {
		background: var(--ink);
		color: var(--white);
		padding: 100px 48px;
	}

	.section-label,
	.writing-card-label {
		color: rgba(29, 158, 117, 0.9);
		font-family: 'DM Mono', monospace;
	}

	.section-label {
		align-items: center;
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

	.writing-inner {
		max-width: 760px;
	}

	.writing-lede {
		color: var(--white);
		font-family: 'Fraunces', serif;
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

	.btn-secondary {
		background: transparent;
		border: 0.5px solid rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 0.8);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.06);
	}

	@media (max-width: 768px) {
		.writing-section {
			padding-left: 24px;
			padding-right: 24px;
		}
	}
</style>
