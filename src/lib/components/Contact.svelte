<script lang="ts">
	import { getI18nContext, translate, type TranslationKey } from '$lib/i18n';

	const { language } = getI18nContext();

	function t(key: TranslationKey) {
		return translate($language, key);
	}
</script>

<section id="contact" class="contact-section">
	<div class="section-label">{t('contact.label')}</div>
	<div class="contact-inner fade-up">
		<h2>{t('contact.headingStart')} <em>{t('contact.headingEmphasis')}</em>.</h2>
		<p>{t('contact.copy')}</p>
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

<style>
	.contact-section {
		padding: 100px 48px;
	}

	.section-label,
	.contact-link-sub {
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

	@media (max-width: 768px) {
		.contact-section {
			padding-left: 24px;
			padding-right: 24px;
		}
	}
</style>
