<script lang="ts">
	import Router from 'svelte-spa-router';
	import Portofolio from './Portofolio.svelte';
	import Love from './Love.svelte';
</script>
<Router routes={{
	'/': Portofolio,
	'/for-ridha': Love
}}/>
