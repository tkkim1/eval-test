<template>
    <div class="row" style="text-align: center; width: 100vw; height: 100vh; background-color:#c8dbec;">
        <div class="col self-center">
            <img src="@/assets/images/symbols/splash.png" alt="splash" />
            <div class="text-h5"><b>{{ props.title }} 준비중...</b></div>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    'title'
])
</script>

<style scoped lang="scss">

</style>
