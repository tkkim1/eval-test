<template>
  <div>
    <h1>slotChild</h1>
    <!--부모에서 정의한 '왼쪽 버튼'이 위치합니다 -->
    <slot name="left"></slot>
    <!--부모에서 정의한 '오른쪽 버튼'이 위치합니다 -->
    <slot name="right"></slot>
    <div>
      <header>
        <slot name="child" :childData="childData" :close="close">
          <button>버튼</button>
        </slot>
      </header>
      <div>
        <slot name="body">
          <p>기본 바디</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'slotChild',
    components: {},
    data() {
      return {
        childData: 'child',
        active: false,
      }
    },
    methods: {
      close() {
        this.active = false
      },
    },
  }
</script>

<style scoped></style>
