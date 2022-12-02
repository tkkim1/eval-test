<template>
	<div class="not-container">
		<img src="@/assets/images/403.png" class="not-img" alt="403" />
		<div class="not-detail">
			<h2>403</h2>
			<h4>죄송합니다. 이 페이지에 액세스할 수 있는 권한이 없습니다.~🙅‍♂️🙅‍♀️</h4>
			<q-button type="primary" @click="router.push('/')">돌아가기</q-button>
		</div>
	</div>
</template>

<script setup  name="403">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
