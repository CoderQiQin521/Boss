<template>
  <div>
    <div class="user-panel">
      <div class="text-right">
        <router-link to="/login">
          <van-icon name="scan" size="24" />
        </router-link>
        <router-link to="/setting">
          <van-icon name="setting-o" class="setting-icon" size="24" />
        </router-link>
      </div>
      <div class="user">
        <div class="username">{{userInfo.realname || '游客'}}</div>
        <div class="my-resume">
          <van-icon name="edit" class="edit-icon" />
          <router-link to="/resume">我的在线简历</router-link>
        </div>
        <van-image
          class="avatar"
          round
          width="70px"
          height="70px"
          @click="$router.push('/info')"
          :src="userInfo.avatar"
        />
      </div>
      <div class="info">
        <div class="info-item" v-for="(item,index) in infos" :key="index">
          <div class="info-count">{{item.count>99 ? '99+' : item.count}}</div>
          <div class="info-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="foot-info text-center">
      客服电话: 400-065-5799
      <span>工作时间9:30-18:30</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      infos: [
        {
          count: 25,
          title: "沟通过"
        },
        {
          count: 0,
          title: "面试"
        },
        {
          count: 0,
          title: "已投简历"
        },
        {
          count: 7,
          title: "收藏"
        }
      ],
      userInfo: {}
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
    }
  }
};
</script>
<style lang="less" scoped>
@primary: #36c1ba;
.user-panel {
  position: relative;
  padding: 20px;
  height: 240px;
  background-color: @primary;
  color: #fff;
}
.avatar {
  position: absolute;
  top: 60px;
  right: 20px;
}
.user {
  margin-top: 20px;
  margin-bottom: 40px;
}
.username {
  font-size: 26px;
  // font-weight: bold;
}
.edit-icon {
  margin-right: 5px;
}
.my-resume {
  margin-top: 10px;
}
.setting-icon {
  margin-left: 10px;
}
.info {
  display: flex;
  justify-content: space-between;
  &-item {
    flex: 1;
    text-align: center;
    .info-count {
      font-size: 20px;
    }
    .info-title {
      margin-top: 6px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
}
.foot-info {
  margin-top: 50px;
  font-size: 12px;
  color: #999;
  span {
    margin-left: 10px;
  }
}
</style>