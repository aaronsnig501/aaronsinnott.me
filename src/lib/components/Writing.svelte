<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section id="writing" class="writing-section">
	<div class="section-label" data-en="Writing" data-ga="Scríbhneoireacht">Writing</div>
	<div class="writing-inner">
		<p
			class="writing-lede"
			data-en="&quot;Relearning Irish and falling down a rabbit hole of culture, identity, and colonialism along the way. I write the way I talk — honestly, and not always efficiently.&quot;"
			data-ga="&quot;Gaeilge a athfhoghlaim agus ag titim síos poll coinín de chultúr, céannacht, agus coilíneachas ar an mbealach. Scríobhaim mar a labhraím — go hionraic, agus ní i gcónaí go héifeachtach.&quot;"
		>
			"Relearning Irish and falling down a rabbit hole of culture, identity, and colonialism along
			the way. I write the way I talk — honestly, and not always efficiently."
		</p>
		<p
			class="writing-copy"
			data-en="The blog covers Irish language revival, colonial history, identity, and the practical mechanics of keeping a language alive — ROM hacking, subtitle translation, approaching local businesses, building community infrastructure."
			data-ga="Clúdaíonn an blag athbheochan na Gaeilge, stair choilíneach, céannacht, agus meicníocht phraiticiúil coinneáil teanga beo — haiceáil ROM, aistriúchán fotheideal, gnólachtaí áitiúla a chur chuige, bonneagar pobail a thógáil."
		>
			The blog covers Irish language revival, colonial history, identity, and the practical
			mechanics of keeping a language alive — ROM hacking, subtitle translation, approaching local
			businesses, building community infrastructure.
		</p>
		<div class="writing-grid">
			<article class="writing-card">
				<div class="writing-card-label" data-en="Language & Education" data-ga="Teanga & Oideachas">
					Language & Education
				</div>
				<h3
					data-en="Why most Irish people don't speak Irish — and why it's not the teacher's fault"
					data-ga="Cén fáth nach labhraíonn formhór na nÉireannach Gaeilge — agus cén fáth nach locht an mhúinteora é"
				>
					Why most Irish people don't speak Irish — and why it's not the teacher's fault
				</h3>
				<p
					data-en="The exposure problem, the social problem, and why the real barrier was never in the classroom."
					data-ga="An fhadhb nochta, an fhadhb shóisialta, agus cén fáth nach raibh an bac fíor riamh sa seomra ranga."
				>
					The exposure problem, the social problem, and why the real barrier was never in the
					classroom.
				</p>
			</article>
			<article class="writing-card">
				<div
					class="writing-card-label"
					data-en="Revival in Practice"
					data-ga="Athbheochan i nGníomh"
				>
					Revival in Practice
				</div>
				<h3
					data-en="Translating Super Mario Bros. into Irish — what it takes and why it matters"
					data-ga="Super Mario Bros. a aistriú go Gaeilge — cad a theastaíonn agus cén fáth a bhfuil sé tábhachtach"
				>
					Translating Super Mario Bros. into Irish — what it takes and why it matters
				</h3>
				<p
					data-en="A deep dive into ROM hacking, character encoding, and language revival in unexpected places."
					data-ga="Tumadh domhain isteach i haiceáil ROM, ionchódú carachtar, agus athbheochan teanga in áiteanna gan choinne."
				>
					A deep dive into ROM hacking, character encoding, and language revival in unexpected
					places.
				</p>
			</article>
		</div>
		<a
			href={resolve('/')}
			class="btn btn-secondary writing-link"
			data-en="Blog launching soon — follow on Substack →"
			data-ga="Blag ag seoladh go luath — lean ar Substack →"
		>
			Blog launching soon — follow on Substack →
		</a>
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
