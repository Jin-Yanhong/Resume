<template>
	<div class="pages home font-sans">
		<header>
			<h3 class="text-2xl text-center text-gray-700">
				{{ $tm('resume.info.name') }}
			</h3>
			<div class="text-center text-gray-700"> {{ $tm('resume.info.position') }} | {{ $tm('resume.info.phone') }} | {{ $tm('resume.info.email') }} </div>
		</header>
		<div class="border-b-2 border-b-black mt-2 mb-2"> </div>
		<main>
			<div class="flex flex-row">
				<div class="basis-1/4">
					<div class="font-bold font-sans"> Education </div>
				</div>
				<div class="basis-3/4">
					<div class="font-bold"> Experience </div>
				</div>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomeView',
});
</script>

<style lang="less" scoped>
.home {
	padding: 10px;
}
</style>
