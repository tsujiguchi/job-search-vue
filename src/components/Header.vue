<template>
  <el-header class="header">
    <el-row type="flex" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple title">JobSearchVue</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light menu">求人検索</div></el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  // props: {
  //   msg: String
  // },
  // data() {
  //   return {
  //     count: 0
  //   }
  // }
}
</script>

<style scoped lang="scss">
  .header {
    .title { font-size: 24px; }
    .menu { margin-top: 5px; }
  }
</style>
