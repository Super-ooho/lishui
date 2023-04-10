<template>
    <el-tabs tab-position="right" style="height: 540px" class="demo-tabs">
        <el-tab-pane label="基础信息">
            <BasicData></BasicData>
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
import BasicData from './BasicData.vue';
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
        number: '2',
        start: '2',
        end: '3',
        dianzu: '0.00386',
        diankang: '0.0068',
        dianliu: '390',
        length: '0.02',
    },
    {
        number: '3',
        start: '3',
        end: '4',
        dianzu: '0.015633',
        diankang: '0.02754',
        dianliu: '390',
        length: '0.081',
    },
    						

    {
        number: '4',
        start: '4',
        end: '5',
        dianzu: '0.169454',
        diankang: '0.29852',
        dianliu: '390',
        length: '0.878',
    },
    						

    {
        number: '5',
        start: '4',
        end: '7',
        dianzu: '0.051062',
        diankang: '0.044044',
        dianliu: '240',
        length: '0.121',
    },
    						

    {
        number: '6',
        start: '5',
        end: '6',
        dianzu: '0.13',
        diankang: '0.28721',
        dianliu: '150',
        length: '0.746',
    },
    						

    {
        number: '7',
        start: '5',
        end: '10',
        dianzu: '0.145908',
        diankang: '0.25704',
        dianliu: '390',
        length: '0.756',
    },
    						

    {
        number: '8',
        start: '7',
        end: '8',
        dianzu: '0.057392',
        diankang: '0.049504',
        dianliu: '240',
        length: '0.136',
    },
    						

    {
        number: '9',
        start: '8',
        end: '9',
        dianzu: '0.057392',
        diankang: '0.049504',
        dianliu: '240',
        length: '0.136',
    },
    						

    {
        number: '10',
        start: '10',
        end: '11',
        dianzu: '0.119274',
        diankang: '0.21012',
        dianliu: '390',
        length: '0.618',
    },
    {
        number: '11',
        start: '11',
        end: '12',
        dianzu: '0.23086',
        diankang: '0.145112',
        dianliu: '190',
        length: '0.388',
    },
    						

    {
        number: '12',
        start: '11',
        end: '13',
        dianzu: '0.03281',
        diankang: '0.0578',
        dianliu: '390',
        length: '0.17',
    },
    {
        number: '13',
        start: '13',
        end: '14',
        dianzu: '0.218',
        diankang: '0.52234',
        dianliu: '240',
        length: '1.435',
    },   						
    {
        number: '14',
        start: '13',
        end: '16',
        dianzu: '0.079323',
        diankang: '0.13974',
        dianliu: '390',
        length: '0.411',
    },    						
    {
        number: '15',
        start: '14',
        end: '15',
        dianzu: '0.213',
        diankang: '0.52234',
        dianliu: '240',
        length: '1.435',
    },    						
    {
        number: '16',
        start: '16',
        end: '17',
        dianzu: '0.232758',
        diankang: '0.41004',
        dianliu: '390',
        length: '1.206',
    },
    {
        number: '17',
        start: '16',
        end: '18',
        dianzu: '0.198',
        diankang: '0.518336',
        dianliu: '240',
        length: '1.424',
    },
    {
        number: '18',
        start: '18',
        end: '19',
        dianzu: '0.023632',
        diankang: '0.020384',
        dianliu: '240',
        length: '0.056',
    },
    {
        number: '19',
        start: '18',
        end: '20',
        dianzu: '0.00238',
        diankang: '0.001496',
        dianliu: '190',
        length: '0.04',
    },
    {
        number: '20',
        start: '20',
        end: '21',
        dianzu: '0.0715',
        diankang: '0.099242',
        dianliu: '335',
        length: '0.286',
    },
    {
        number: '21',
        start: '20',
        end: '22',
        dianzu: '0.064566',
        diankang: '0.055692',
        dianliu: '240',
        length: '0.153',
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

   