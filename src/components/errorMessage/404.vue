<template>
	<div class="not-container">
		<img src="@/assets/images/404.png" class="not-img" alt="404" />
		<div class="not-detail">
			<h2>404</h2>
			<h4>죄송합니다. 해당 페이지가 존재하지 않습니다.🤷‍♂️🤷‍♀️</h4>
			<q-button type="primary" @click="router.push('/')">BACK</q-button>
		</div>
	</div>
</template>

<script setup  name="404">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
