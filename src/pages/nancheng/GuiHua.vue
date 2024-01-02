<template>
    <el-container>
        <el-aside width="110px" class="asideStyle">
            <div>
                <div class="beishu">
                    <span style="font-size: 18px;">负荷规模(kW)</span>
                    <el-select v-model="shuidianValue" class="m-2" placeholder=" " style="margin-top: 20px;font-size: 13px;"
                        size="small">
                        <el-option v-for="item in shuidianOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                    <span style="font-size: 18px;">投建目标</span>
                    <el-select v-model="economicValue" class="m-2" placeholder=" " style="margin-top: 10px;" size="small">
                        <el-option v-for="item in economicOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <!-- <el-button type="primary" class="chaxunButton">查询</el-button> -->
                <el-button :plain="true" @click="submit" style="margin-top: 20px;">查询</el-button>
            </div>
        </el-aside>
        <el-main style="position: relative;height: 550px;margin: 0;padding: 0; font-size: 12px;">
            <div class="mainMap">
                <div class="xiantiao1" v-show="visiable[1]"></div>
                <span class="xiantiao1" v-show="visiable[1]">{{ spanValue[0] }}</span>
                <div class="xiantiao2" v-show="visiable[2]"></div>
                <span class="xiantiao2" v-show="visiable[2]">{{ spanValue[1] }}</span>
                <div class="xiantiao3" v-show="visiable[3]"></div>
                <span class="xiantiao3" v-show="visiable[3]">{{ spanValue[2] }}</span>
                <div class="xiantiao4" v-show="visiable[7]"></div>
                <div class="xiantiao5" v-show="visiable[7]"></div>
                <span class="xiantiao5" v-show="visiable[7]">{{ spanValue[6] }}</span>
                <div class="xiantiao6" v-show="visiable[7]"></div>


                <span class="showData" v-show="isTableShow">
                    <el-table style="width: 100%;font-size: 12px" :data="tableShow" fit="false">
                        <el-table-column prop="xianlu" label="线路" width="65px" />
                        <el-table-column prop="kuochong" label="扩建容量（kW）" width="75px" />
                    </el-table>
                </span>
                <span class="tableName1" style="font-size: 12px;" v-show="isTableShow">碳排率(kg/kWh)</span>
                <span class="showPaitan1" style="font-size: 12px;" v-show="isTableShow">
                    <el-table style="width: 100%" :data="paitanArr">
                        <el-table-column prop="guihuaqian1" label="规划前" width="70px" />
                        <el-table-column prop="guihuahou1" label="规划后" width="70px" />
                    </el-table>
                </span>
                <span class="tableName2" style="font-size: 12px;" v-show="isTableShow">碳排放强度(kg/h)</span>
                <span class="showPaitan2" v-show="isTableShow">
                    <el-table style="width: 100%" :data="paitanArr">
                        <el-table-column prop="guihuaqian2" label="规划前" width="70px" />
                        <el-table-column prop="guihuahou2" label="规划后" width="70px" />
                    </el-table>
                </span>
                <span class="tableName3" style="font-size: 12px;" v-show="isTableShow">投建成本</span>
                <span class="showPaitan3" v-show="isTableShow">
                    <el-table style="width: 100%" :data="paitanArr">
                        <el-table-column prop="guihuaqian3" label="" width="70px" />
                    </el-table>
                </span>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

let isTableShow = ref(false)

const guangfuValue16 = ref('')
const shuidianValue = ref('')
const economicValue = ref('')
const visiable = reactive({
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
    '9': false,
    '10': false,
})


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
const economicOptions = [
    {
        value: '1',
        label: "经济性投建"
    },
    {
        value: "2",
        label: "经济低碳投建"
    }
]
// const shuidianOptions = [
//     {
//         value: '1',
//         label: '800',
//     },

//     {
//         value: '2',
//         label: '1600',
//     },
//     {
//         value: '3',
//         label: '2400',
//     },
//     {
//         value: '4',
//         label: '3200',
//     },

//     {
//         value: '5',
//         label: '4000',
//     },
//     {
//         value: '6',
//         label: '4800',
//     },
// ]
const guihuaData = {
    '111': [0, 0, 0, 0, 0, 0, 150, 0, 0],
    '121': [150, 0, 0, 0, 0, 0, 150, 0, 0],
    '131': [150, 0, 0, 0, 0, 0, 240, 0, 0],
    '141': [150, 150, 0, 0, 0, 0, 295, 0, 0],
    '151': [150, 150, 0, 0, 0, 0, 295, 0, 0],
    '161': [295, 150, 0, 0, 0, 0, 335, 0, 0],
    '112': [0, 0, 0, 0, 0, 0, 150, 0, 0],
    '122': [150, 0, 0, 0, 0, 0, 150, 0, 0],
    '132': [150, 0, 0, 0, 0, 0, 240, 0, 0],
    '142': [150, 150, 0, 0, 0, 0, 295, 0, 0],
    '152': [150, 150, 0, 0, 0, 0, 295, 0, 0],
    '162': [295, 150, 0, 0, 0, 0, 335, 0, 0],
}
const paitanData = {
    '111': [2.02, 2.02, 2535, 2535, 585],
    '121': [2.01, 2.02, 2688, 2791, 1178],
    '131': [2.01, 2.02, 3038, 3045, 1483],
    '141': [2.01, 2.02, 3266, 3299, 1749],
    '151': [2.01, 2.02, 3503, 3553, 1749],
    '161': [2.01, 2.02, 3752, 3808, 1936],
    '112': [2.02, 2.02, 2535, 2535, 585],
    '122': [2.01, 2.02, 2688, 2791, 1178],
    '132': [2.01, 2.02, 3038, 3045, 1483],
    '142': [2.01, 2.02, 3266, 3299, 1749],
    '152': [2.01, 2.02, 3503, 3553, 1749],
    '162': [2.01, 2.02, 3752, 3808, 1936],
}
let paitanObj: LooseObject = {}
// let arrNotZero:any[]
let spanValue = reactive([0, 0, 0, 0, 0, 0, 0, 0, 0])
let paitanValue = reactive([0, 0, 0, 0, 0])
let paitanArr: any = reactive([])
interface LooseObject {
    [key: string]: any
}
// let tableShow:Array<any>=[]
let tableShow: Array<any> = reactive([])
function submit() {
    isTableShow.value = true
    tableShow = []
    paitanArr = []
    let arrNotZero: Array<any> = []
    let beishuStr = shuidianValue.value + economicValue.value
    console.log(beishuStr);

    if (beishuStr in guihuaData) {
        let i: any
        for (i in guihuaData[beishuStr]) {
            if (guihuaData[beishuStr][i] != 0) {
                // 获取到不为0的元素的位置坐标
                arrNotZero.push(parseInt(i) + 1)
                spanValue[i] = guihuaData[beishuStr][i]
            }
        }
        console.log(spanValue)
        for (let i = 0; i <= 28; i++) {
            visiable[i] = false
        }
        for (i in arrNotZero) {
            let xianluShow: LooseObject = {}
            visiable[arrNotZero[i]] = true
            let strXianlu = '线路' + arrNotZero[i]
            console.log(i)
            console.log(arrNotZero[i])

            xianluShow.xianlu = strXianlu
            xianluShow.kuochong = spanValue[arrNotZero[i] - 1]

            tableShow.push(xianluShow)


        }
        console.log(tableShow)

    }
    else {
        // console.log("nihao")
        ElMessageBox.alert('暂无此扩充容量信息，请重新预设参数', '提示', {
            confirmButtonText: 'OK',
        })
    }
    if (beishuStr in paitanData) {
        paitanValue = paitanData[beishuStr]
        paitanObj.guihuaqian1 = paitanValue[0]
        paitanObj.guihuahou1 = paitanValue[1]
        paitanObj.guihuaqian2 = paitanValue[2]
        paitanObj.guihuahou2 = paitanValue[3]
        paitanObj.guihuaqian3 = paitanValue[4]
        paitanArr.push(paitanObj)
        // console.log(paitanData[beishuStr])
    }
}

</script>

<style scoped>
.diaImg {
    width: 100%;
}

.asideStyle {
    font-size: 12px;
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
    width: 700px;
    /*疑问？：div的尺寸如何自适应背景图的尺寸*/
    height: 400px;
    background-size: 100%;
    position: relative;
    left: 10px;
}

.mainMap>div {
    /* opacity: 1; */
    background-color: rebeccapurple;
}

.mainMap>span {
    /* opacity: 1; */
    color: red;
    font-size: 12px;
}

.showData {
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 710px;

}

.showPaitan1 {
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 850px;
    top: 50px;
}

.showPaitan2 {
    width: 140px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 850px;
    top: 200px;
}

.showPaitan3 {
    width: 70px;
    height: 105px;
    background-color: none;
    position: absolute;
    left: 890px;
    top: 330px;
}

.tableName1 {
    width: 150px;
    height: 50px;
    /* background-color: red; */
    position: absolute;
    left: 850px;
    z-index: 1;
    text-align: center;
    padding-top: 20px;
    /* color: black; */
}

.tableName2 {
    width: 150px;
    height: 50px;
    /* background-color: red; */
    position: absolute;
    left: 850px;
    top: 150px;
    z-index: 1;
    text-align: center;
    padding-top: 20px;
    /* color: black; */
}

.tableName3 {
    width: 150px;
    height: 50px;
    /* background-color: red; */
    position: absolute;
    left: 850px;
    top: 285px;
    z-index: 1;
    text-align: center;
    padding-top: 20px;
    /* color: black; */
}

.xiantiao1 {
    width: 107px;
    height: 7px;
    position: absolute;
    top: 202px;
    left: 234px;
}

.xiantiao2 {
    width: 128px;
    height: 7px;
    position: absolute;
    top: 202px;
    left: 343px;
}

.xiantiao3 {
    width: 95px;
    height: 7px;
    position: absolute;
    top: 218px;
    left: 472px;
}

.xiantiao4 {
    width: 7px;
    height: 56px;
    position: absolute;
    top: 180px;
    left: 468px;
}

.xiantiao5 {
    width: 65px;
    height: 7px;
    position: absolute;
    top: 180px;
    left: 474px;
}

.xiantiao6 {
    width: 7px;
    height: 99px;
    position: absolute;
    top: 81px;
    left: 532px;
}
</style>
   
   