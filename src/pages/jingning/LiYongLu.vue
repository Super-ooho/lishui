<template>
    <el-container>
        <el-aside width="100px" class="asideStyle">
            <div>
                <div>
                    <span>光伏总装机容量(kW)</span>
                    <el-select v-model="guangfuValue" class="m-2" placeholder=" ">
                        <el-option v-for="item in guangfuOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>负荷功率(kW)</span>
                    <el-select v-model="fuheValue" class="m-2" placeholder=" ">
                        <el-option v-for="item in fuheOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>水电总装机容量(kW)</span>
                    <el-select v-model="shuidianValue" class="m-2" placeholder=" ">
                        <el-option v-for="item in shuidianOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <!-- <el-button type="primary" class="chaxunButton">查询</el-button> -->
                <el-button :plain="true" @click="submit">查询</el-button>
            </div>
        </el-aside>
        <el-main style="position: relative;height: 570px;margin: 0;padding: 0;">
            <div class="mainMap">

            </div>
            <div class="tabletitle">
                <div class="titleqian">规划前</div>
                <div class="titlehou">规划后</div>
            </div>
            <div class="tableRegion">
                <el-table :data="guihuaqianData" style="width: 100%" size="small">
                    <el-table-column prop="qiguanglv" label="弃光率" width="60" />
                    <el-table-column prop="score1" label="得分" width="50" />
                    <el-table-column prop="qishuilv" label="弃水率" width="80" />
                    <el-table-column prop="score2" label="得分" width="50" />
                    <el-table-column prop="putong" label="普通线路平均负载率" width="80" />
                    <el-table-column prop="score3" label="得分" width="70" />
                    <el-table-column prop="guangfu" label="光伏线路极限负载率" width="80" />
                    <el-table-column prop="score4" label="得分" width="50" />
                    <el-table-column prop="fuhe" label="负荷线路极限负载率" width="80" />
                    <el-table-column prop="score5" label="得分" width="50" />
                    <el-table-column prop="zuse" label="线路阻塞率" width="80" />
                    <el-table-column prop="score6" label="得分" width="50" />
                    <el-table-column prop="generalScore" label="总得分" />
                </el-table>
                <el-table :data="guihuahouData" style="width: 100%" size="small" :show-header="isHeader">
                    <el-table-column prop="qiguanglv" label="弃光率" width="60" />
                    <el-table-column prop="score1" label="得分" width="50" />
                    <el-table-column prop="qishuilv" label="弃水率" width="80" />
                    <el-table-column prop="score2" label="得分" width="50" />
                    <el-table-column prop="putong" label="普通线路平均负载率" width="80" />
                    <el-table-column prop="score3" label="得分" width="70" />
                    <el-table-column prop="guangfu" label="光伏线路极限负载率" width="80" />
                    <el-table-column prop="score4" label="得分" width="50" />
                    <el-table-column prop="fuhe" label="负荷线路极限负载率" width="80" />
                    <el-table-column prop="score5" label="得分" width="50" />
                    <el-table-column prop="zuse" label="线路阻塞率" width="80" />
                    <el-table-column prop="score6" label="得分" width="50" />
                    <el-table-column prop="generalScore" label="总得分" />
                </el-table>
            </div>

        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const guangfuValue = ref('')
const fuheValue = ref('')
const shuidianValue = ref('')
let isHeader = ref(false)
const guangfuOptions = [
    {
        value: '1',
        label: '300',
    },

    {
        value: '2',
        label: '600',
    },
    {
        value: '3',
        label: '900',
    },
    {
        value: '4',
        label: '1200',
    },
    {
        value: '5',
        label: '1500',
    },
    {
        value: '6',
        label: '1800',
    },
    {
        value: '7',
        label: '2100',
    },
    {
        value: '8',
        label: '2400',
    },
]
const fuheOptions = [
    {
        value: '1',
        label: '600',
    }
]
const shuidianOptions = [
    {
        value: '1',
        label: '800',
    },

    {
        value: '2',
        label: '1600',
    },
    {
        value: '3',
        label: '2400',
    },
]
const qianTableData = [

    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '9.86%',
        score3: '30',
        guangfu: '11.64%',
        score4: '30',
        fuhe: '6.04%',
        score5: '30',
        zuse: '2.83%',
        score6: '100',
        generalScore: '74.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.41%',
        score3: '40',
        guangfu: '11.67%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.36%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '5.35%',
        score2: '90',
        putong: '27.99%',
        score3: '40',
        guangfu: '11.68%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '74.05%',
        score6: '50',
        generalScore: '63.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.30%',
        score3: '30',
        guangfu: '23.25%',
        score4: '40',
        fuhe: '6.05%',
        score5: '30',
        zuse: '3.31%',
        score6: '100',
        generalScore: '76.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.85%',
        score3: '40',
        guangfu: '23.31%',
        score4: '40',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.49%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '8.73%',
        score2: '80',
        putong: '28.50%',
        score3: '40',
        guangfu: '23.33%',
        score4: '40',
        fuhe: '6.07%',
        score5: '30',
        zuse: '75.87%',
        score6: '50',
        generalScore: '63.1',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.79%',
        score3: '30',
        guangfu: '34.86%',
        score4: '50',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.59%',
        score6: '100',
        generalScore: '78.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.38%',
        score3: '40',
        guangfu: '34.92%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '4.69%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '10.00%',
        score2: '80',
        putong: '28.97%',
        score3: '40',
        guangfu: '34.96%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '83.40%',
        score6: '40',
        generalScore: '63',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '11.32%',
        score3: '30',
        guangfu: '46.48%',
        score4: '60',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.80%',
        score6: '100',
        generalScore: '80.2',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.92%',
        score3: '40',
        guangfu: '46.51%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '5.22%',
        score6: '90',
        generalScore: '79.3',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '10.08%',
        score2: '70',
        putong: '29.56%',
        score3: '40',
        guangfu: '46.55%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '97.30%',
        score6: '40',
        generalScore: '62.3',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '9.86%',
        score3: '30',
        guangfu: '11.64%',
        score4: '30',
        fuhe: '6.04%',
        score5: '30',
        zuse: '2.83%',
        score6: '100',
        generalScore: '74.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.41%',
        score3: '40',
        guangfu: '11.67%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.36%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '5.35%',
        score2: '90',
        putong: '27.99%',
        score3: '40',
        guangfu: '11.68%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '74.05%',
        score6: '50',
        generalScore: '63.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.30%',
        score3: '30',
        guangfu: '23.25%',
        score4: '40',
        fuhe: '6.05%',
        score5: '30',
        zuse: '3.31%',
        score6: '100',
        generalScore: '76.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.85%',
        score3: '40',
        guangfu: '23.31%',
        score4: '40',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.49%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '8.73%',
        score2: '80',
        putong: '28.50%',
        score3: '40',
        guangfu: '23.33%',
        score4: '40',
        fuhe: '6.07%',
        score5: '30',
        zuse: '75.87%',
        score6: '50',
        generalScore: '63.1',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.79%',
        score3: '30',
        guangfu: '34.86%',
        score4: '50',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.59%',
        score6: '100',
        generalScore: '78.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.38%',
        score3: '40',
        guangfu: '34.92%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '4.69%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '10.00%',
        score2: '80',
        putong: '28.97%',
        score3: '40',
        guangfu: '34.96%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '83.40%',
        score6: '40',
        generalScore: '63',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '11.32%',
        score3: '30',
        guangfu: '46.48%',
        score4: '60',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.80%',
        score6: '100',
        generalScore: '80.2',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.92%',
        score3: '40',
        guangfu: '46.51%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '5.22%',
        score6: '90',
        generalScore: '79.3',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '10.08%',
        score2: '70',
        putong: '29.56%',
        score3: '40',
        guangfu: '46.55%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '97.30%',
        score6: '40',
        generalScore: '62.3',
    },

]
const houTableData = [

    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '9.86%',
        score3: '30',
        guangfu: '11.64%',
        score4: '30',
        fuhe: '6.04%',
        score5: '30',
        zuse: '2.83%',
        score6: '100',
        generalScore: '74.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.41%',
        score3: '40',
        guangfu: '11.67%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.36%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '29.20%',
        score3: '40',
        guangfu: '11.68%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '1.72%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.30%',
        score3: '30',
        guangfu: '23.25%',
        score4: '40',
        fuhe: '6.05%',
        score5: '30',
        zuse: '3.31%',
        score6: '100',
        generalScore: '76.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.85%',
        score3: '40',
        guangfu: '23.31%',
        score4: '40',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.49%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.50%',
        score3: '40',
        guangfu: '23.37%',
        score4: '40',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.55%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.79%',
        score3: '30',
        guangfu: '34.86%',
        score4: '50',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.59%',
        score6: '100',
        generalScore: '78.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.38%',
        score3: '40',
        guangfu: '34.92%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '4.69%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.2%',
        score3: '40',
        guangfu: '35.01%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.65%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '11.32%',
        score3: '30',
        guangfu: '46.48%',
        score4: '60',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.80%',
        score6: '100',
        generalScore: '80.2',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.92%',
        score3: '40',
        guangfu: '46.51%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '5.22%',
        score6: '90',
        generalScore: '79.3',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.76%',
        score3: '40',
        guangfu: '46.55%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.86%',
        score6: '100',
        generalScore: '81.2',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '9.86%',
        score3: '30',
        guangfu: '11.64%',
        score4: '30',
        fuhe: '6.04%',
        score5: '30',
        zuse: '2.83%',
        score6: '100',
        generalScore: '74.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.41%',
        score3: '40',
        guangfu: '11.67%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.36%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '29.20%',
        score3: '40',
        guangfu: '11.68%',
        score4: '30',
        fuhe: '6.06%',
        score5: '30',
        zuse: '1.72%',
        score6: '100',
        generalScore: '75.8',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.30%',
        score3: '30',
        guangfu: '23.25%',
        score4: '40',
        fuhe: '6.05%',
        score5: '30',
        zuse: '3.31%',
        score6: '100',
        generalScore: '76.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '20.85%',
        score3: '40',
        guangfu: '23.31%',
        score4: '40',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.49%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.50%',
        score3: '27.66%',
        guangfu: '23.37%',
        score4: '40',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.55%',
        score6: '100',
        generalScore: '77.6',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '10.79%',
        score3: '30',
        guangfu: '34.86%',
        score4: '50',
        fuhe: '6.06%',
        score5: '30',
        zuse: '3.59%',
        score6: '100',
        generalScore: '78.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.38%',
        score3: '40',
        guangfu: '34.92%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '4.69%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.2%',
        score3: '40',
        guangfu: '35.01%',
        score4: '50',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.65%',
        score6: '100',
        generalScore: '79.4',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '11.32%',
        score3: '30',
        guangfu: '46.48%',
        score4: '60',
        fuhe: '6.06%',
        score5: '30',
        zuse: '4.80%',
        score6: '100',
        generalScore: '80.2',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '21.92%',
        score3: '40',
        guangfu: '46.51%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '5.22%',
        score6: '90',
        generalScore: '79.3',
    },
    {
        qiguanglv: '0',
        score1: '100',
        qishuilv: '0',
        score2: '100',
        putong: '28.76%',
        score3: '40',
        guangfu: '46.55%',
        score4: '60',
        fuhe: '6.07%',
        score5: '30',
        zuse: '1.86%',
        score6: '100',
        generalScore: '81.2',
    },

]
let guihuaqianData: any = reactive([{
    qiguanglv: '无',
    score1: '无',
    qishuilv: '无',
    score2: '无',
    putong: '无',
    score3: '无',
    guangfu: '无',
    score4: '无',
    fuhe: '无',
    score5: '无',
    zuse: '无',
    score6: '无',
    generalScore: '无',
}])
let guihuahouData: any = reactive([{
    qiguanglv: '无',
    score1: '无',
    qishuilv: '无',
    score2: '无',
    putong: '无',
    score3: '无',
    guangfu: '无',
    score4: '无',
    fuhe: '无',
    score5: '无',
    zuse: '无',
    score6: '无',
    generalScore: '无',
}])
let beishuOption = ['111', '112', '113', '211', '212', '213', '311', '312', '313', '411', '412', '413', '511', '512', '513', '611', '612', '613', '711', '712', '713', '811', '812', '813']
function submit() {
    guihuaqianData.pop()
    guihuahouData.pop()
    let beishuStr = guangfuValue.value + fuheValue.value + shuidianValue.value
    // console.log(beishuStr)
    if (beishuOption.includes(beishuStr)) {
        // console.log("nihao")
        for (let i in beishuOption) {
            if (beishuStr == beishuOption[i]) {
                // console.log(qianTableData[i])
                guihuaqianData.push(qianTableData[i])
                guihuahouData.push(houTableData[i])
                break
            }
        }
    }
    else {
        ElMessageBox.alert('暂无此预设的相关信息，请重新预设参数', '提示', {
            confirmButtonText: 'OK',
        })
    }
}



</script>

<style scoped>
.diaImg {
    width: 100%;
}

.asideStyle {
    font-size: 15px;
}

.chaxunButton {
    margin-top: 30px;
    margin-left: 30%;
}

.beishu {
    margin-top: 30px;
}

.mainMap {
    background-image: url("../../assets/jingning.png");
    background-repeat: no-repeat;
    width: 750px;
    /*疑问？：div的尺寸如何自适应背景图的尺寸*/
    height: 370px;
    background-size: 100%;
    position: relative;
    left: 60px;
}

.tableRegion {
    /* margin-left: 30px; */
    position: absolute;
    top: 380px;
    left: 70px;
}

.tabletitle {
    position: absolute;
    top: 442px;
    left: 0;
    font-size: 15px;
}

.titlehou {
    position: absolute;
    top: 30px;
    left: 0;
}
</style>
   
   