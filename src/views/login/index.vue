<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left.svg" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo-box">

					<img class="login-logo" src="@/assets/images/logo.png" alt="" />
				</div>
				<!-- <h2 class="logo-text">독해트레이닝</h2> -->
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup name="login">
import LoginForm from "./components/LoginForm.vue";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
