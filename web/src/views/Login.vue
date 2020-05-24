<template>
  <div class="page">
    <div>
      <div class="page-title">账号登录</div>
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
      </van-cell-group>
      <van-button type="primary" color="#36c1ba" block @click="login">登录</van-button>
      <div class="mt-sm">
        <router-link to="/register">去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  created() {},
  computed: {
    isValid() {
      let user = this.user;
      return user.username && user.password;
      //  && user.username.length === 11;
    }
  },
  methods: {
    async login() {
      // todo: 表单验证
      if (!this.isValid) {
        Toast("账号或密码错误");
        return;
      }
      let { code, data, msg } = await this.$api.login(this.user);
      if (code === 0) {
        /*
          登陆成功:
          1.localStorage存储token
          2.跳转页面
        */
        localStorage.setItem("token", data);
        this.$router.push("/");
      } else if (code === 1) {
        this.user = {
          username: "",
          password: ""
        };
      }
    }
  }
};
</script>

<style lang="less" socped>
@primary: #36c1ba;
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.info {
  margin: 20px;
}
/deep/.van-button--primary {
  background-color: @primary!important;
  border-color: @primary!important;
}
</style>
