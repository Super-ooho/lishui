<template>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="/"
          router=true
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/DianJia">
            <el-icon><icon-menu /></el-icon>
            <span>网架信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
  