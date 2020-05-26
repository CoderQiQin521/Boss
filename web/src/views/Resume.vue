<template>
  <div>
    <van-nav-bar
      title="我的在线简历"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="$router.back()"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="browsing-history-o" size="18" class="#5d5d5d" />
      </template>
    </van-nav-bar>
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
  methods: {
    onClickRight() {}
  }
};
</script>
<style lang="less">
.van-nav-bar__text {
  color: #5d5d5d;
}
</style>