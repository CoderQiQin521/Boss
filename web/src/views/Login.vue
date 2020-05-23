<template>
  <div>
    <div class="title">账号登录</div>
    <form @submit.prevent="login">
      <div>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <input type="password" v-model="user.password" placeholder="请输入密码" />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    async login() {
      let { code, data, msg } = await this.$api.login(this.user);
      console.log("code, data, msg: ", code, data, msg);
      if (code === 0) {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>