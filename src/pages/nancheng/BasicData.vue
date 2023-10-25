<template>
    <div class="leftRegion">
        <div class="tuopudiv">
            <img src="../../assets/nancheng.png" alt="" class="tuopu">
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
                    <img src="../../assets/keshihuanan1.png" alt="" class="imgsize">
                </el-collapse-item>
                <el-collapse-item title="过渡季数据可视化" name="2">
                    <img src="../../assets/keshihuanan2.png" alt="" class="imgsize">
                </el-collapse-item>
                <el-collapse-item title="冬季数据可视化" name="3">
                    <img src="../../assets/keshihuanan3.png" alt="" class="imgsize">
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
        dianzu: '0.0206744',
        diankang: '0.030444',
        dianliu: '423',
        length: '0.344',
    },
    {
        number: '2',
        start: '2',
        end: '3',
        dianzu: '0.0102771',
        diankang: '0.0151335',
        dianliu: '423',
        length: '0.171',
    },
    {
        number: '3',
        start: '3',
        end: '4',
        dianzu: '0.3836',
        diankang: '0.52745',
        dianliu: '465',
        length: '1.37',
    },
    {
        number: '4',
        start: '2',
        end: '5',
        dianzu: '0.041385',
        diankang: '0.0186',
        dianliu: '195',
        length: '0.155',
    },
    {
        number: '5',
        start: '2',
        end: '6',
        dianzu: '0.009345',
        diankang: '0.0042',
        dianliu: '195',
        length: '0.035',
    },
    {
        number: '6',
        start: '2',
        end: '7',
        dianzu: '0.038181',
        diankang: '0.01716',
        dianliu: '195',
        length: '0.143',
    },
    {
        number: '7',
        start: '3',
        end: '8',
        dianzu: '0.004806',
        diankang: '0.00216',
        dianliu: '195',
        length: '0.018',
    },
    {
        number: '8',
        start: '4',
        end: '9',
        dianzu: '0.017889',
        diankang: '0.00804',
        dianliu: '195',
        length: '0.067',
    },
    {
        number: '9',
        start: '4',
        end: '10',
        dianzu: '0.01104',
        diankang: '0.00744',
        dianliu: '249',
        length: '0.024',
    },

]
</script>

<style scoped>
.imgsize {
    width: 65%;
    height: 275px;
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

   