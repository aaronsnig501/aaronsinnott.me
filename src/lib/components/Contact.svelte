<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';
	import SectionLabel from './SectionLabel.svelte';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="contact" class="contact-section">
	<SectionLabel>{t('contact.label')}</SectionLabel>
	<div class="contact-inner fade-up">
		<h2>{t('contact.headingStart')} <em>{t('contact.headingEmphasis')}</em>.</h2>
		<p>{t('contact.copy')}</p>
		<div class="contact-links">
			<a href="mailto:aaron@aaronsinnott.me" class="contact-link">
				<span class="contact-link-left">
					<span class="contact-link-icon">✉</span>
					<span
						><span class="contact-link-label">email</span><span class="contact-link-sub"
							>aaron@aaronsinnott.me</span
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
						><span class="contact-link-label">linkedin</span><span class="contact-link-sub"
							>linkedin.com/in/aaronsinnott</span
						></span
					>
				</span>
				<span class="contact-link-arrow">→</span>
			</a>
			<a href="https://github.com/aaronsnig501" target="_blank" rel="noreferrer" class="contact-link">
				<span class="contact-link-left">
					<span class="contact-link-icon">gh</span>
					<span
						><span class="contact-link-label">github</span><span class="contact-link-sub"
							>github.com/aaronsnig501</span
						></span
					>
				</span>
				<span class="contact-link-arrow">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.contact-section {
		margin: 0 auto;
		max-width: 900px;
		padding: 80px 48px;
	}

	.contact-link-sub {
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
	}

	.contact-inner {
		max-width: 600px;
	}

	.contact-inner h2 {
		font-family: 'Fraunces', serif;
		font-size: 2.6rem;
		font-weight: 300;
		line-height: 1.15;
		margin: 0 0 20px;
	}

	.contact-inner h2 em {
		color: var(--accent-dark);
		font-style: italic;
	}

	.contact-inner > p {
		color: var(--ink-2);
		font-size: 1.05rem;
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
		border-bottom: 0.5px solid var(--rule);
		display: flex;
		font-family: 'Fira Code', monospace;
		font-variant-ligatures: contextual common-ligatures;
		justify-content: space-between;
		padding: 12px 0;
		text-decoration: none;
		transition:
			border-color 0.2s;
	}

	.contact-link:hover {
		border-color: rgba(158, 206, 106, 0.3);
	}

	.contact-link-left {
		align-items: center;
		display: flex;
		gap: 14px;
	}

	.contact-link-icon {
		align-items: center;
		color: var(--accent-green);
		display: flex;
		font-family: 'Fira Code', monospace;
		font-size: 14px;
		height: 24px;
		justify-content: center;
		width: 28px;
	}

	.contact-link-label,
	.contact-link-sub {
		display: block;
	}

	.contact-link-label {
		color: var(--ink);
		font-size: 0.88rem;
		font-weight: 500;
		text-transform: lowercase;
	}

	.contact-link-label::before {
		color: var(--accent-green);
		content: '$ ';
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
		color: var(--accent-green);
		transform: translateX(4px);
	}

	@media (max-width: 768px) {
		.contact-section {
			padding-left: 24px;
			padding-right: 24px;
		}
	}
</style>
