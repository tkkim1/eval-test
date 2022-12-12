<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>aaaa</h2>
    <br />sdfsd<br />

    <label>
      <input
        type="checkbox"
        v-model="checked"
        true-value="yes"
        false-value="no"
      />{{ checked }}aaaa
    </label>
  </div>
</template>

<script>
export default {
  name: "tttest",
  components: {},
  data() {
    return {
      sampleData: "sampleData",
      checked: "ggggg",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  befoerUnmount() {},
  unmounted() {},
  methods: {},
};
</script>

<style>
@media (max-width: 1024px) {
  .about {
    min-height: 100vh;
    background-color: beige;
  }
}
</style>
