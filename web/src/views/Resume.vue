<template>
  <div>
    <van-nav-bar
      title="我的在线简历"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
      @click-right="onClickRight"
    />
    <div class="page">23423</div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
</style>