<template>
	<q-form ref="loginFormRef" class="q-gutter-md">
		<div>
			<h5>회원가입</h5>
		</div>
		<q-input filled v-model="name" label="아이디*" hint="" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
			<!-- <template v-slot:prepend>
				<q-icon name="person" />
			</template> -->
		</q-input>
		<q-input filled v-model="pwd" label="비밀번호 *" hint="" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
			<!-- <template v-slot:prepend>
				<q-icon name="lock" />
			</template> -->
		</q-input>
		<q-input filled v-model="pwd" label="비밀번호 확인*" hint="" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
			<!-- <template v-slot:prepend>
				<q-icon name="lock" />
			</template> -->
		</q-input>
		<q-input filled v-model="name" label="이름*" hint="" lazy-rules
			:rules="[val => val && val.length > 0 || 'Please type something']">
		</q-input>
		<div class="row">
			<q-select filled v-model="schoolType" label="구분" :options="['중학생', '고등학생']" style="width: 250px">
			</q-select>&nbsp;
			<q-select filled v-model="schoolGrade" use-input label="학년" :options="['1학년', '2학년', '3학년']"
				style="width: 250px">
			</q-select>
		</div>
	</q-form>
	<div class="login-btn">
		<q-btn color="primary" @click="onSubmit" type="submit" label="회원가입" />
		<q-btn flat color="primary" @click="onCancel" label="취소" />
	</div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
// import { loginApi } from "@/api/modules/login"
// import { GlobalStore } from "@/stores";
// import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
// const globalStore = GlobalStore();

const $q = useQuasar()

const router = useRouter();
const id = ref(null)
const pwd = ref(null)
const name = ref(null)
const schoolType = ref(null)
const schoolGrade = ref(null)
const loginFormRef = ref(null)

const onSubmit = () => {
	//@ts-ignore
	// loginFormRef.value.validate().then(success => {
	// 	if (success) {
	// 		// @ts-ignore
	// 		const saveCallback = async (data) => {
	// 			if (data) {
	// 				//@ts-ignore
	// 				console.log(data);
	// 				globalStore.setToken(data.accesstoken);
	// 				//@ts-ignore
	// 				globalStore.setReToken(data.refreshtoken);
	// 				$q.notify({
	// 					color: 'green-4',
	// 					textColor: 'white',
	// 					icon: 'cloud_done',
	// 					message: '로그인되었습니다.'
	// 				})
	// 				await initDynamicRouter();
	// 				router.push("/home");
	// 			}
	// 		}
	// 		loginApi({ id: name.value, pwd: pwd.value }, saveCallback);
	// 	}
	// 	else {

	// 		$q.notify({
	// 			color: 'red-4',
	// 			textColor: 'white',
	// 			icon: 'cloud_done',
	// 			message: 'Submitted'
	// 		})
	// 		// oh no, user has filled in
	// 		// at least one invalid value
	// 	}
	// })

}
const onCancel = () => {
	router.go(-1)
}

</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
