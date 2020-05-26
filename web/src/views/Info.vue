<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="$router.back()"></van-nav-bar>
    <van-cell-group>
      <van-field
        v-model="userInfo.realname"
        label="真实姓名"
        input-align="right"
        placeholder="请输入您的姓名"
      />
      <!-- <van-field
        v-model="user.gender"
        label="性别"
        placeholder="请选择您的性别"
        readonly
        click-input="openGender"
      />-->
      <van-cell title="性别" is-link :value="userInfo.gender" @click="openGender" />
    </van-cell-group>
    <van-popup v-model="selectGender" position="bottom" :style="{}">
      <van-picker
        title="性别"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
    <div class="page">
      <van-button class="mt-md" type="primary" color="#36c1ba" block @click="save">保存</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      selectGender: false,
      columns: ["男", "女", "保密"],
      userInfo: {
        realname: "",
        gender: ""
      }
    };
  },
  created() {
    this.fetch();
  },
  mounted() {},
  methods: {
    async fetch() {
      let { code, data, msg } = await this.$api.userInfo();
      this.userInfo = data;
    },
    async save() {
      let { code, data, msg } = await this.$api.saveInfo(this.userInfo);
      if (code === 0) {
        this.$utils.toast({ msg }).then(() => {
          this.$router.back();
        });
      }
    },
    openGender() {
      this.selectGender = true;
    },
    onConfirm(res) {
      this.selectGender = false;
      this.$set(this.userInfo, "gender", res);
    },
    onCancel() {
      this.selectGender = false;
    },
    onChange(res) {}
  }
};
</script>
<style lang="less">
.van-nav-bar .van-icon {
  color: #5d5d5d !important;
}
.mt-md {
  margin-top: 15px;
}
</style>