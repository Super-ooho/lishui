<template>
    <div class="leftRegion">
        <div class="tuopudiv">
            <img src="../../assets/jingning.png" alt="" class="tuopu">
        </div>
        <div>
            <el-table :data="tableData" style="width: 100%" height="230" size="small">
                <el-table-column fixed prop="number" label="线路编号" width="60" />
                <el-table-column prop="start" label="起始节点" width="60" />
                <el-table-column prop="end" label="末节点" width="60" />
                <el-table-column prop="dianzu" label="电阻" width="80" />
                <el-table-column prop="diankang" label="电抗" width="80" />
                <el-table-column prop="dianliu" label="额定电流(A)" width="80" />
                <el-table-column prop="length" label="长度(km)" />
            </el-table>
        </div>
    </div>
    <div class="rightRegion">
        <div class="demo-collapse">
            <el-collapse accordion>
                <el-collapse-item title="夏季数据可视化" name="1">
                    <img src="../../assets/keshihua11.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua12.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua13.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua14.png" alt="" class="imgsize">
                </el-collapse-item>
                <el-collapse-item title="过渡季数据可视化" name="2">
                    <img src="../../assets/keshihua21.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua22.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua23.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua24.png" alt="" class="imgsize">
                </el-collapse-item>
                <el-collapse-item title="冬季数据可视化" name="3">
                    <img src="../../assets/keshihua31.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua32.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua33.png" alt="" class="imgsize">
                    <img src="../../assets/keshihua34.png" alt="" class="imgsize">
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script lang="ts" setup>

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
.imgsize {
    width: 50%;
    height: 200px;
    float: left;
}

.leftRegion {
    width: 45%;
    float: left;
}

.rightRegion {
    width: 54%;
    margin-left: 10px;
    float: left;
}

.tuopu {
    width: 100%;
    height: 50%;
    /* margin-left: 200px; */
}
</style>

   