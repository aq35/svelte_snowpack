<section>
	{#if $$slots.title}
		<slot name="title" />
	{/if}
	{#if $$slots.body}
		<slot name="body" />
	{/if}
</section>

<style>
	section {
		width: 1000px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 16px;
		box-shadow: 2px 2px 4px #dedede;
		border: 1px solid #888;
		margin-bottom: 16px;
	}
</style>