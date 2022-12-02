<template>
	<div style="width: 100%;position: relative;">
		<div style="width: 100%;">
			<video  ref="video" poster="" class="" id="video_player" controls="controls" style="width: 100%;">
				<source
					src="https://media5jvqbd.fmkorea.com/files/attach/new2/20210301/2063168106/62449231/3424305738/b1b4e7075cece7bf3b0174253e99b524.mp4#t=1, 10" />
			</video>
		</div>
		<div :hidden="!isStop" style="position: absolute;top: 0px;width:100%;height:100%;background-color: #0000006b;">
			<div style="position: absolute;top: 45%;left: 50%; margin-left: -48px; margin-top: -48px;">
				<q-btn round color="#6f7376" :icon="!isEnd ? 'play_arrow' : 'replay'" style="background-color: #6f7376;"
					size="32px" @click="
					onplay" />
			</div>
			<div style="position: absolute;top: 80%;right: 10px;  ">
				<q-btn rounded dense color="primary"
					:style="'padding: 0 20px;' + (!isEnd ? 'background-color: #6f7376!important;' : '')" size="12px">{{
		isEnd ?
			'개념이해완료'
			:
			'선생님의 영상강의를 통해 개념을 확인해 보세요.'
					}}</q-btn>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

const isStop = ref(null);
const isEnd = ref(null);
let video;
const onplay = () => {
	if (isStop.value) {
		video.play();
	} else {
		video.pause();
	}
	isStop.value = !isStop.value;
}
onMounted(() => {
	var supposedCurrentTime = 0;
	// const video = ref(null)
	video = document.getElementById('video_player');
	isStop.value = true;
	isEnd.value = false;
	console.log(video);
	// video.currentTime = 6;

	video.addEventListener('timeupdate', function () {
		if (!video.seeking) {
			supposedCurrentTime = supposedCurrentTime > video.currentTime ? supposedCurrentTime : video.currentTime;
		}
	});
	video.addEventListener('seeking', function () {
		// var delta = video.currentTime - supposedCurrentTime;
		// if (Math.abs(delta) > 0.01) {
		// 	console.log("Seeking is disabled");
		// 	video.currentTime = supposedCurrentTime;
		// }

		if (video.currentTime > supposedCurrentTime) {
			video.currentTime = supposedCurrentTime;
		}
	});
	// delete the following event handler if rewind is not required
	video.addEventListener('ended', function () {
		// 동영상 시청종료시 프로세스
		isEnd.value = true
		isStop.value = true;
	});
})

</script>

<style lang="scss">

</style>
