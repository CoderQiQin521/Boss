<template>
  <div class="home">
    <router-view />
    <van-tabbar route active-color="#36c1ba">
      <van-tabbar-item to="/position" icon="label-o">职位</van-tabbar-item>
      <van-tabbar-item to="/company" icon="home-o">公司</van-tabbar-item>
      <van-tabbar-item to="/message" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item to="/" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      active: 3
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
</style>
