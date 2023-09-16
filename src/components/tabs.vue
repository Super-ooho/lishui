<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="景宁电网分析" name="first">
      <jingning></jingning>
    </el-tab-pane>
    <el-tab-pane label="南城电网分析" name="second">
      <NanCheng></NanCheng>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Jingning from '../pages/jingning/JingNing.vue'
import NanCheng from "../pages/nancheng/NanCheng.vue";

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>




<style>
.demo-tabs>.el-tabs__content {
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
