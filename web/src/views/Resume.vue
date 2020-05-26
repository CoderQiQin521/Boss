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
    <van-cell-group>
      <van-cell title="个人优势" input-align="right">
        <template #right-icon>
          <van-icon name="edit" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="求职期望" input-align="right">
        <template #right-icon>
          <van-icon name="add-o" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="项目经历" input-align="right">
        <template #right-icon>
          <van-icon name="add-o" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="社交主页" input-align="right">
        <template #right-icon>
          <van-icon name="add-o" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell value="http://localhost:8080/resume" isLink />
      <!-- <div class="cell">http://localhost:8080/resume</div> -->
    </van-cell-group>
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
.cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0.26667rem 0.42667rem;
  overflow: hidden;
  color: #323233;
  font-size: 0.37333rem;
  line-height: 0.64rem;
  background-color: #fff;
}
</style>