<template>
    <q-layout view="hHh lpR fFf">
        <q-ajax-bar ref=" bar" size="5px" :delay="delay" />
        <router-view />
        <alertDialog v-if="alertOption.open" />
        <confirmDialog v-if="confirmOption.open" />
    </q-layout>
</template>

<script>
import { computed } from 'vue';
// import { useStore } from 'vuex';
import { DialogStore } from "@/store/modules/dialog";
import alertDialog from '@/components/layouts/dialog/alertDialog';
import confirmDialog from '@/components/layouts/dialog/confirmDialog';


export default {
    name: 'app',
    components: {
        alertDialog,
        confirmDialog,
    },
    setup() {

        const delay = 0;
        const store = DialogStore();
        const alertOption = computed(() => store.alertOption);
        const confirmOption = computed(
            () => store.confirmOption,
        );
        const onStartAjaxBar = () => {
            this.$refs.bar.start()
        }
        const onStopAjaxBar = () => {
            this.$refs.bar.stop()
        }


        return {
            alertOption,
            delay,
            confirmOption,
            onStartAjaxBar,
            onStopAjaxBar
        };
    },
};
</script>
