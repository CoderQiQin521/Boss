<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="$router.back()" @click-right="onClickRight"></van-nav-bar>
    <van-empty style="margin-top:80px" description="开发中" />
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
<style lang="less">
.van-nav-bar .van-icon {
  color: #5d5d5d !important;
}
</style>