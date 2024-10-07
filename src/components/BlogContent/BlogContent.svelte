<script context="module">
	// import '../../styles/reset.css';
</script>

<script>
	export let content;
	// import '../../styles/reset.css';
</script>

<svelte:head>
	<script>
	</script>
</svelte:head>

<div class="content pt-1 lg:pt-3 text-techsyBlue min-h-[50vh]">
	{@html content}
</div>

<style lang="scss">
	.content :global(p) {
		margin: 1em 0;
		color: var(--Techsy-navy, #042042);
		font-family: Poppins;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 30px; /* 187.5% */
		
	}
	.content :global(blockquote),
	.content :global(figure) {
		margin: 1em 40px;
	}
	.content :global(q) {
		quotes: '“' '”' '‘' '’';

		&:before {
			content: open-quote;
		}

		&:after {
			content: close-quote;
		}
	}

	.content :global(hr) {
		border: 1px inset;
		box-sizing: border-box;
		margin: 0.5em auto;
	}

	.content :global(h1) {
		font-size: 2em;
		font-weight: bold;
		margin: 0.67em 0;
	}

	.content :global(h2) {
		font-size: 1.5em;
		font-weight: bold;
		margin: 0.83em 0;
	}
	.content :global(h3) {
		font-size: 1.17em;
		font-weight: bold;
		margin: 1em 0;
	}

	.content :global(h4) {
		font-size: 1em;
		font-weight: bold;
		margin: 1.33em 0;
	}

	.content :global(h5) {
		font-size: 0.83em;
		font-weight: bold;
		margin: 1.67em 0;
	}

	.content :global(h6) {
		font-size: 0.67em;
		font-weight: bold;
		margin: 2.33em 0;
	}

	.content :global(table) {
		border-collapse: separate;
		border-spacing: 2px;
		border-color: gray;
	}

	.content :global(thead),
	.content :global(tbody),
	.content :global(tfoot),
	.content :global(tr) {
		border-color: inherit;
		vertical-align: middle;
	}

	.content :global(td),
	.content :global(th) {
		padding: 1px;
		vertical-align: inherit;
	}

	.content :global(th) {
		font-weight: bold;
	}

	.content :global(caption) {
		text-align: center;
	}
	.content :global(li){
		color: var(--Techsy-navy, #042042);
		font-family: Poppins;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 30px;
	}

	.content :global(ul),
	.content :global(menu) {
		list-style-type: disc;
		margin: 1em 0;
		padding: 0 0 0 40px;
	}

	.content :global(ol) {
		list-style-type: decimal;
		margin: 1em 0;
		padding: 0 0 0 40px;
	}
	.content :global(ul ul),
	.content :global(ol ul) {
		list-style-type: circle;
	}
	.content :global(ul ul ul ul),
	.content :global(ol ul ol ul) {
		list-style-type: square;
	}
	.content :global(dd) {
		margin: 0 0 0 40px;
	}

	.content :global(dl) {
		margin: 1em 0;
	}
	.content :global(ul),
	.content :global(ol),
	.content :global(menu),
	.content :global(dl ul),
	.content :global(dl ol),
	.content :global(dl menu),
	.content :global(dl dl) {
		margin: 0;
	}
	.content :global(legend) {
		padding: 0 2px;
	}

	.content :global(fieldset) {
		border-style: groove;
		border-width: 2px;
		border: 2px groove ThreeDFace;
		margin: 0 2px;
		padding: 0 2px 3px;
		-webkit-padding-before: 0.35em;
		-webkit-padding-start: 0.75em;
		-webkit-padding-end: 0.75em;
		-webkit-padding-after: 0.625em;
	}

	.content :global(ins) {
		background-color: transparent;
		font-weight: inherit;
		text-decoration: underline;
	}

	.content :global(b),
	.content :global(strong) {
		font-weight: bold;
	}

	.content :global(i),
	.content :global(cite),
	.content :global(em),
	.content :global(var),
	.content :global(address),
	.content :global(dfn) {
		font-style: italic;
		font-weight: inherit;
	}

	.content :global(abbr[title]),
	.content :global(dfn[title]) {
		border-bottom: 0;
		cursor: default;
		font-weight: inherit;
	}

	.content :global(tt),
	.content :global(code),
	.content :global(kbd),
	.content :global(samp) {
		font-family: monospace;
		font-weight: inherit;
	}

	.content :global(pre) {
		font-family: monospace;
		margin: 1em 0;
		white-space: pre;
	}

	.content :global(mark) {
		background-color: yellow;
		color: black;
		font-style: normal;
		font-weight: inherit;
	}

	.content :global(big) {
		font-size: larger;
		font-weight: inherit;
	}

	.content :global(small) {
		font-size: smaller;
		font-weight: inherit;
	}

	.content :global(sub),
	.content :global(sup) {
		font-weight: inherit;
		line-height: inherit;
		position: static;
	}

	.content :global(sub) {
		font-size: smaller;
		bottom: 0;
		vertical-align: sub;
	}

	.content :global(sup) {
		font-size: smaller;
		top: 0;
		vertical-align: super;
	}
</style>
