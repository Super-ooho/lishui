<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header class="head" height="100px">
          <span>适 应 可 再 生 能 源 规 模 化 接 入 的 新 型 电 力 系 统 规 划 分 析 软 件</span>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <asideSlider></asideSlider>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>

  </div>
</template>

<script setup>
import asideSlider from './components/aside.vue'

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
}
</script>

<style>
.common-layout {
  width: 1540px;
  margin: 0 auto;
}

.head {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #4a5582;
  color: aliceblue;
  font-size: 30px;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<!-- 刷新后路由不变 -->