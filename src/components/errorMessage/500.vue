<template>
	<div class="not-container">
		<img src="@/assets/images/500.png" class="not-img" alt="500" />
		<div class="not-detail">
			<h2>500</h2>
			<h4>죄송합니다. 서버 오류가 발생했습니다.~🤦‍♂️🤦‍♀️</h4>
			<q-button type="primary" @click="router.push('/')">돌아가기</q-button>
		</div>
	</div>
</template>

<script setup name="500">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
