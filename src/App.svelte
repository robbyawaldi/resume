<main class="md:w-10/12 h-screen mx-auto mt-10 flex md:flex-row flex-col container justify-between">
	<div class="md:w-4/6 md:m-0 m-3 w-full md:order-1 order-2">
		<h1 class="text-3xl font-thin md:text-left text-center">
			About <span class="font-bold text-blue-400">Me</span>
		</h1>
		<div class="mt-3 font-bold">Hi 👋, I'am Robby Awaldi</div>
		<p>
			A passionate Full Stack Software Developer having an experience of
			building Web with Javascript, React js, Svelte, Node JS, Docker,
			Laravel, Django and some other cool libraries and frameworks.
		</p>
		<div class="flex md:flex-row flex-col mt-5">
			<div class="md:w-3/6 w-full">
				<h1 class="font-bold">Experience</h1>
				<div class="border-l-2 mt-2">
					<ul class="list-disc list-outside ml-3">
						<li>
							<h2>PT Mitra Erat Technology</h2>
							<p>
								Building the CMS application, designing the flow
								and planning of the Indihome Study learning
								platform provide services that support business
								needs, build REST APIs, etc.
							</p>
						</li>
					</ul>
				</div>
				<h1 class="font-bold mt-3">Education</h1>
				<div>
					<h2>
						Universitas Indraprasta PGRI / Bachelor of Informatics
						Engineering
					</h2>
				</div>
			</div>
			<div class="md:w-3/6 w-full mt-2">
				<h1 class="font-bold mb-3">What Skill I have</h1>
				<div class="flex gap-2 flex-wrap">
					<span class="chip">Javascript</span>
					<span class="chip">Python</span>
					<span class="chip">PHP</span>
					<span class="chip">CSS</span>
					<span class="chip">Github</span>
					<span class="chip">MySQL</span>
					<span class="chip">PostgreSQL</span>
					<span class="chip">Regex</span>
					<span class="chip">Nginx</span>
					<span class="chip">Laravel</span>
					<span class="chip">Django</span>
					<span class="chip">React JS</span>
					<span class="chip">Svelte JS</span>
					<span class="chip">Bootstrap</span>
					<span class="chip">Tailwindcss</span>
				</div>
			</div>
		</div>
	</div>
	<div class="md:w-2/6 flex order-1 w-full justify-end">
		<img src="/assets/nrrbbbbby.svg" alt="" width="500" />
	</div>
</main>

<style global lang="postcss">
	@import "tailwindcss/base";

	@import "tailwindcss/components";

	@import "tailwindcss/utilities";

	body {
		@apply bg-gray-50;
	}

	.chip {
		@apply bg-gray-200 rounded-3xl p-2;
	}
</style>
