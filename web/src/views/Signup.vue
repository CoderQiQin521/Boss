<template>
  <div class="page">
    <div>
      <div class="page-title">手机号注册</div>
      <van-cell-group>
        <van-field
          v-model="user.username"
          type="tel"
          label="+86"
          clearable
          autofocus
          maxlength="11"
        />
        <van-field v-model="user.password" type="password" label="密码" maxlength="20" />
        <van-field v-model="user.password2" type="password" label="确认密码" maxlength="20" />
      </van-cell-group>
      <div class="mt-lg">
        <van-button type="primary" color="#36c1ba" block @click="register">立即注册</van-button>
      </div>
      <div class="mt-sm">
        <router-link to="/login">账号密码登录</router-link>
      </div>
    </div>

    <div class="info text-center">
      阅读
      <span class="text-light">《用户协议及隐私政策》</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        password2: ""
      }
    };
  },
  created() {},
  computed: {
    isValid() {
      let user = this.user;
      return user.username && user.password && user.username.length === 11;
    }
  },
  methods: {
    async register() {
      if (!this.isValid) {
        Toast("请填写完整信息");
        return;
      }
      if (this.user.password !== this.user.password2) {
        Toast("两次密码不一致");
        return;
      }
      let { code, data, msg } = await this.$api.register(this.user);
      if (code === 0) {
        this.$utils.toast({ msg }).then(() => {
          this.$router.push("/login");
        });
      }
    }
  }
};
</script>

<style lang="less" socped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.info {
  margin: 20px;
}
</style>