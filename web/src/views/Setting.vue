<template>
  <div>
    <van-nav-bar title="设置" left-arrow @click-left="$router.back()"></van-nav-bar>
    <div class="page">
      <!-- modal -->
      <div class="mt-lg">
        <van-button type="default" block @click="logout">退出登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    logout() {
      Dialog.confirm({
        title: "温馨提示",
        message: "确定要退出登录?"
      })
        .then(() => {
          // on confirm
          // 退出vuex
          localStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="less" scoped>
</style>