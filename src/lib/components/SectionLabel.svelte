<script lang="ts">
	let { children } = $props();
</script>

<div class="section-label">
	{@render children()}
</div>

<style>
	.section-label {
		align-items: center;
		color: var(--accent-green);
		display: flex;
		font-family: 'Fira Code', monospace;
		font-size: 0.68rem;
		font-variant-ligatures: contextual common-ligatures;
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
	}
</style>
