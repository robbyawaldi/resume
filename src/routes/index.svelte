<script lang="ts">
	import illustration from '$lib/assets/illustration.svg';
</script>

<main>
	<img src={illustration} alt="" width="500" />

	<div class="content1">
		<h1 class="text-3xl font-thin md:text-left text-center leading-3">
			About <span class="font-semibold text-lg text-blue-400">Me</span>
		</h1>
		<p>
			<span class="block mt-3 font-semibold text-lg">Hi 👋, I'am Robby Awaldi</span>
			A passionate Full Stack Software Developer having an experience of building Web with Javascript,
			React js, Svelte, Node JS, Docker, Laravel, Django and some other cool libraries and frameworks.
		</p>
	</div>

	<div class="content2">
		<h1 class="font-semibold text-lg">Experience</h1>
		<div class="border-l-2 ml-2">
			<ul class="ml-3">
				<li>
					<h2>PT Mitra Erat Technology</h2>
					<p>
						Building the CMS application, designing the flow and planning of the Indihome Study
						learning platform provide services that support business needs, build REST APIs, etc.
					</p>
				</li>
			</ul>
		</div>
	</div>

	<div class="content3">
		<h1 class="font-semibold text-lg">Education</h1>
		<p>Universitas Indraprasta PGRI / Bachelor of Informatics Engineering</p>
	</div>

	<div class="content4">
		<h1 class="font-semibold text-lg">What Skill I have</h1>
		<div class="flex gap-2 flex-wrap">
			<span class="chip">Javascript</span>
			<span class="chip">CSS</span>
			<span class="chip">Github</span>
			<span class="chip">MySQL</span>
			<span class="chip">PostgreSQL</span>
			<span class="chip">Regex</span>
			<span class="chip">Docker</span>
			<span class="chip">Laravel</span>
			<span class="chip">Django</span>
			<span class="chip">Node JS</span>
			<span class="chip">React JS</span>
			<span class="chip">Svelte JS</span>
			<span class="chip">Tailwindcss</span>
		</div>
	</div>
</main>

<style global lang="postcss">
	@import 'tailwindcss/base';

	@import 'tailwindcss/components';

	@import 'tailwindcss/utilities';

	body {
		@apply bg-gray-50
				flex
				h-full
				w-full
				justify-center
				items-center;
	}

	.chip {
		@apply bg-gray-200 rounded-3xl p-2;
	}

	main {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		margin: 1rem;
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(5, auto);
		grid-template-areas:
			'image'
			'content1'
			'content2'
			'content3'
			'content4';
	}

	img {
		grid-area: image;
	}

	.content1 {
		grid-area: content1;
	}

	.content2 {
		grid-area: content2;
	}

	.content3 {
		grid-area: content3;
	}

	@media screen and (min-width: 640px) {
		body {
			height: 100vh;
		}

		main {
			gap: 1rem;
			padding: 0;
			max-width: 56rem;
			max-height: 28rem;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr 10rem 1fr;
			grid-template-areas:
				'content1 content1 image'
				'content2 content4 image'
				'content3 content4 image';
		}
	}
</style>
