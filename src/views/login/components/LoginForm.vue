<template>
	<q-form ref="loginFormRef" class="q-gutter-md">
		<q-input filled v-model="name" label="Your ID *" hint="id" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
			<template v-slot:prepend>
				<q-icon name="person" />
			</template>
		</q-input>
		<q-input filled v-model="pwd" label="Your password *" hint="password" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
			<template v-slot:prepend>
				<q-icon name="lock" />
			</template>
		</q-input>
	</q-form>
	<div class="login-btn">
		<q-btn color="primary" @click="onSubmit" type="submit" label="로그인" />
		<router-link to="/signup">
			<q-btn flat color="primary" label="회원가입" />
		</router-link>
	</div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { loginApi } from "@/api/modules/login"
import { GlobalStore } from "@/store";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";

const globalStore = GlobalStore();

const $q = useQuasar()

const router = useRouter();
const name = ref(null)
const pwd = ref(null)
const loginFormRef = ref(null)

const onSubmit = () => {
	loginFormRef.value.validate().then(success => {
		if (success) {
			// @ts-ignore
			const saveCallback = async (data) => {
				if (data) {
					// await globalStore.setToken(data.accesstoken);
					// await globalStore.setReToken(data.refreshtoken);
					// await initDynamicRouter();
					console.log('!#!#!#!#!#!#!AAAAAAAAAAAAAAAAAAAAAAAAAAA')
					router.push("/learninghome");
					$q.notify({
						color: 'green-4',
						textColor: 'white',
						icon: 'cloud_done',
						message: '로그인되었습니다.'
					})
				}
			}
			loginApi({ id: name.value, pw: pwd.value }, saveCallback);
		}
		else {

			$q.notify({
				color: 'red-4',
				textColor: 'white',
				icon: 'cloud_done',
				message: 'Submitted'
			})
			// oh no, user has filled in
			// at least one invalid value
		}
	})

}
const onReset = () => {
	name.value = null
	pwd.value = null
}

</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
