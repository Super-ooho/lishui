<template>
    <el-container>
        <el-aside width="100px" class="asideStyle">
            <div>
                <!-- <div class="beishu">
                    <span>负荷倍数1</span>
                    <el-select v-model="fuheValue" class="m-2" placeholder=" ">
                        <el-option v-for="item in fuheOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div> -->
                <div class="beishu">
                    <span>负荷规模(kW)</span>
                    <el-select v-model="shuidianValue" class="m-2" placeholder=" " style="margin-top: 20px;">
                        <el-option v-for="item in shuidianOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <!-- <el-button type="primary" class="chaxunButton">查询</el-button> -->
                <el-button :plain="true" @click="submit" style="margin-top: 20px;">查询</el-button>
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
// const fuheValue = ref('')
const shuidianValue = ref('')
let isHeader = ref(false)
// const fuheOptions = [
//     {
//         value: '1',
//         label: '300',
//     },
// ]
const shuidianOptions = [
    {
        value: '11',
        label: '1650',
    },

    {
        value: '12',
        label: '1800',
    },
    {
        value: '13',
        label: '1950',
    },
    {
        value: '14',
        label: '2100',
    },

    {
        value: '15',
        label: '2250',
    },
    {
        value: '16',
        label: '2400',
    },
]
const qianTableData = [

    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '28.5%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '75.87%',
        score6: '50',
        generalScore: '40.1',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '30.8%',
        score3: '50',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '83.4%',
        score6: '40',
        generalScore: '40',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '31.93%',
        score3: '50',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '97.3%',
        score6: '40',
        generalScore: '40',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '30.8%',
        score3: '50',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '83.4%',
        score6: '40',
        generalScore: '40',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '31.93%',
        score3: '50',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '97.3%',
        score6: '40',
        generalScore: '40',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '32.37%',
        score3: '50',
        guangfu: '无',
        score4: '无',
        fuhe: '6.07%',
        score5: '30',
        zuse: '97.78%',
        score6: '40',
        generalScore: '40',
    },

]
const houTableData = [
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '27.66%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '7.8%',
        score5: '40',
        zuse: '1.55%',
        score6: '100',
        generalScore: '60.4',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '22.6%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '9.46%',
        score5: '40',
        zuse: '1.65%',
        score6: '100',
        generalScore: '60.4',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '22.15%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '12.35%',
        score5: '50',
        zuse: '1.86%',
        score6: '100',
        generalScore: '63.7',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '22.6%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '15.7%',
        score5: '60',
        zuse: '1.65%',
        score6: '100',
        generalScore: '67',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '22.15%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '17.82%',
        score5: '60',
        zuse: '1.86%',
        score6: '100',
        generalScore: '67',
    },
    {
        qiguanglv: '无',
        score1: '无',
        qishuilv: '无',
        score2: '无',
        putong: '23.1%',
        score3: '40',
        guangfu: '无',
        score4: '无',
        fuhe: '19.92%',
        score5: '70',
        zuse: '1.58%',
        score6: '100',
        generalScore: '70.3',
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
let beishuOption = ['11', '12', '13', '14', '15', '16']
function submit() {
    guihuaqianData.pop()
    guihuahouData.pop()
    let beishuStr = guangfuValue.value + shuidianValue.value
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
    background-image: url("../../assets/nancheng.png");
    background-repeat: no-repeat;
    width: 650px;
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
   
   