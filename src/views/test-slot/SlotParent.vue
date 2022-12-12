<template>
  <div>
    <!--부모 컴포넌트-->
    <SlotChild>
      <button>버튼</button><br />
      <button slot="left">왼쪽 버튼</button><br />
      <button slot="right">오른쪽 버튼</button><br />
      <hr />
      <hr />
      <hr />
      <hr />
      <div>
        <SlotChild>
          <!--자식에서 사용하던 name="child"로 감싸진 태그의 함수, 변수 모두 가져옵니다.-->
          <template slot="child" slot-scope="slotProps">
            <button @click="slotProps.close">닫기</button>
            <!-- { childData: 'child' } -->
            {{ slotProps }}
          </template>
          <p slot="body">바디입니다.</p>
        </SlotChild>
      </div>
    </SlotChild>
    <hr />
    <hr />
    <hr />
    <hr />
    <div>
      <SlotChild>
        <template v-slot:child="slotProps">
          <button @click="slotProps.close">닫기</button>
          <!-- { hello: 'hello' } -->
          {{ slotProps }}
        </template>
        <template v-slot:body>
          <p>바디입니다.</p>
        </template>
      </SlotChild>
    </div>
  </div>
</template>

<script>
  import SlotChild from './SlotChild.vue'

  export default {
    name: 'slotParent',
    components: {},
    data() {
      SlotChild
      return {
        sampleData: 'sampleData',
      }
    },
    methods: {},
  }
</script>

<style scoped></style>
