<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="景宁电网分析" name="first">
        <jingning-basic-data></jingning-basic-data>
      </el-tab-pane>
      <el-tab-pane label="待分析电网" name="second">待分析电网</el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import JingningBasicData from '../pages/JingNingBasicData.vue'

  const activeName = ref('first')

  const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
  }
</script>




<style>
.demo-tabs > .el-tabs__content {
color: #6b778c;
font-size: 32px;
font-weight: 600;
}
</style>
