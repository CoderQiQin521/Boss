<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@fc: #5d5d5d;
@primary: #36c1ba;
#app {
  height: 100%;
}
body {
  font-family: "黑体";
  font-size: 16px;
  color: @fc;
}
.page {
  padding: 0 16px;
}
.page-title {
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 26px;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.mt-sm {
  margin-top: 10px;
}
.text-light {
  color: #509799;
}
</style>
