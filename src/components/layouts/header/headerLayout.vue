<template>
    <header class="header">
        <h1 class="header__logo">LOGO</h1>
    </header>
</template>

<script>
export default {
    name: 'HeaderLayout',
};
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    z-index: 5;
    width: 100%;
    height: size(100);
    padding: 0 size(100);
    @include center-element;
    &__logo {
        font: {
            family: $noto;
            size: size(28);
        }
    }
    &__nav {
        display: flex;
        justify-content: flex-end;
        flex: 1;

        > a {
            padding: size(20);
            font: {
                family: $noto;
                size: size(24);
            }
            text-align: center;
        }
    }
    @include device(desktop) {
        background: gray;
    }
    @include device(tablet) {
        background: green;
    }
    @include device(mobile) {
        background: yellow;
    }
}
</style>
