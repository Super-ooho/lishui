<template>
    <el-tabs tab-position="right" style="height: 540px" class="demo-tabs">
        <el-tab-pane label="基础信息">
            <div>
                <div class="tuopudiv">
                    <img src="../assets/jingning.png" alt="" class="tuopu">
                </div>
                <div>
                    <el-table :data="tableData" style="width: 100%" height="230">
                        <el-table-column fixed prop="number" label="线路编号" width="180" />
                        <el-table-column prop="start" label="起始节点" width="180" />
                        <el-table-column prop="end" label="末节点" />
                        <el-table-column prop="dianzu" label="电阻" width="180" />
                        <el-table-column prop="diankang" label="电抗" width="180" />
                        <el-table-column prop="dianliu" label="额定电流(A)" />
                        <el-table-column prop="length" label="长度(km)" />
                    </el-table>
                </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="潮流分析模块">
            <ChaoliuData></ChaoliuData>
        </el-tab-pane>
        <el-tab-pane label="承载力评估模块">
            <ChengZai></ChengZai>
        </el-tab-pane>
        <el-tab-pane label="系统规划模块">
            <GuiHua></GuiHua>
        </el-tab-pane>
        <el-tab-pane label="设备利用率分析模块">
            <LiYongLu></LiYongLu>
        </el-tab-pane>
    </el-tabs>
    
</template>

<script lang="ts" setup>
import ChaoliuData from './ChaoliuData.vue';
import ChengZai from './ChengZai.vue'
import GuiHua from './GuiHua.vue';
import LiYongLu from './LiYongLu.vue';

    const tableData = [
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '1',
        start: '1',
        end: '2',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    
    ]
</script>

<style scoped>
.leftdiv{
    width: 90%;
    float: left;
}
.rightdiv{
    width: 10%;
    float: left;
}
.tuopu{
    width: 50%;
    height: 50%;
}

.winter{
    width: 50%;
    height: 50%;
}
/* .tuopudiv{
    width: 100%;
    height: 400px;
    float: left;
    background-image: url("https://pixabay.com/zh/images/search/%E7%8B%97/");
} */

.seasondiv{
    float: left;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>

   