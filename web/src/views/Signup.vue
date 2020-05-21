<template>
  <div class="page">
    <h3 class="title">注册BOSS直聘</h3>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    let { code, data, msg } = await this.$api.test();
    console.log("code, data, msg: ", code, data, msg);
    this.list = data;
    console.log(data[3]);

    // this.$api
    //   .test()
    //   .then(res => {
    //     let { code, data, msg } = res;
    //     console.log("code, data, msg: ", code, data, msg);
    //   })
    //   .catch(err => {
    //     console.error("err: ", err);
    //   });
  }
};
</script>

<style lang="less" socped>
.title {
  font-weight: 400;
  font-size: 26px;
  line-height: 32px;
  color: #5dd5c8;
  position: relative;
  text-align: center;
}
</style>