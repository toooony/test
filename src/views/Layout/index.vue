<template>
<el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <Menu/>
  </el-aside>
  <el-container>
      <el-header style="text-align: right; font-size: 12px">
      <Head/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Menu from '@/components/Menu/index'
import Head from '@/components/Head/index'
export default {
    name:'Layout',
    components:{ Menu , Head }
}
</script>
