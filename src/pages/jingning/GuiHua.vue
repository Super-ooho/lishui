<template>
    <el-container>
        <el-aside width="80px" class="asideStyle">
            <div>
                <div>
                    <span>11号节点光伏扩建容量(kW)</span>
                    <el-select v-model="guangfuValue11" class="m-2" placeholder=" ">
                        <el-option v-for="item in guangfuOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div>
                    <span>15号节点光伏扩建容量(kW)</span>
                    <el-select v-model="guangfuValue15" class="m-2" placeholder=" ">
                        <el-option v-for="item in guangfuOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>16号节点光伏扩建容量(kW)</span>
                    <el-select v-model="guangfuValue16" class="m-2" placeholder=" ">
                        <el-option v-for="item in guangfuOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>水电扩建容量(kW)</span>
                    <el-select v-model="shuidianValue" class="m-2" placeholder=" ">
                        <el-option v-for="item in shuidianOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <!-- <el-button type="primary" class="chaxunButton">查询</el-button> -->
                <el-button :plain="true" @click="submit">查询</el-button>
            </div>
        </el-aside>
        <el-main style="position: relative;height: 550px;margin: 0;padding: 0;">
            <div class="mainMap">
                <div class="xiantiao1" v-show="visiable[1]"></div>
                <span class="xiantiao1" v-show="visiable[1]">{{ spanValue[0] }}</span>
                <div class="xiantiao2" v-show="visiable[2]"></div>
                <span class="xiantiao2" v-show="visiable[2]">{{ spanValue[1] }}</span>
                <div class="xiantiao3" v-show="visiable[3]"></div>
                <span class="xiantiao3" v-show="visiable[3]">{{ spanValue[2] }}</span>
                <div class="xiantiao4" v-show="visiable[4]"></div>
                <span class="xiantiao4" v-show="visiable[4]">{{ spanValue[3] }}</span>
                <div class="xiantiao5" v-show="visiable[5]"></div>
                <span class="xiantiao5" v-show="visiable[5]">{{ spanValue[4] }}</span>
                <div class="xiantiao6" v-show="visiable[6]"></div>
                <span class="xiantiao6" v-show="visiable[6]">{{ spanValue[5] }}</span>
                <div class="xiantiao7" v-show="visiable[7]"></div>
                <span class="xiantiao7" v-show="visiable[7]">{{ spanValue[6] }}</span>
                <div class="xiantiao8" v-show="visiable[8]"></div>
                <span class="xiantiao8" v-show="visiable[8]">{{ spanValue[7] }}</span>
                <div class="xiantiao9" v-show="visiable[9]"></div>
                <span class="xiantiao9" v-show="visiable[9]">{{ spanValue[8] }}</span>
                <div class="xiantiao10" v-show="visiable[10]"></div>
                <span class="xiantiao10" v-show="visiable[10]">{{ spanValue[9] }}</span>
                <div class="xiantiao11" v-show="visiable[11]"></div>
                <span class="xiantiao11" v-show="visiable[11]">{{ spanValue[10] }}</span>
                <div class="xiantiao12" v-show="visiable[12]"></div>
                <span class="xiantiao12" v-show="visiable[12]">{{ spanValue[11] }}</span>
                <div class="xiantiao13" v-show="visiable[13]"></div>
                <span class="xiantiao13" v-show="visiable[13]">{{ spanValue[12] }}</span>
                <div class="xiantiao14" v-show="visiable[14]"></div>
                <span class="xiantiao14" v-show="visiable[14]">{{ spanValue[13] }}</span>
                <div class="xiantiao15" v-show="visiable[15]"></div>
                <span class="xiantiao15" v-show="visiable[15]">{{ spanValue[14] }}</span>
                <div class="xiantiao16" v-show="visiable[16]"></div>
                <span class="xiantiao16" v-show="visiable[16]">{{ spanValue[15] }}</span>
                <div class="xiantiao17" v-show="visiable[17]"></div>
                <span class="xiantiao17" v-show="visiable[17]">{{ spanValue[16] }}</span>
                <div class="xiantiao18" v-show="visiable[18]"></div>
                <span class="xiantiao18" v-show="visiable[18]">{{ spanValue[17] }}</span>
                <div class="xiantiao19" v-show="visiable[19]"></div>
                <span class="xiantiao19" v-show="visiable[19]">{{ spanValue[18] }}</span>
                <div class="xiantiao20" v-show="visiable[20]"></div>
                <span class="xiantiao20" v-show="visiable[20]">{{ spanValue[19] }}</span>
                <div class="xiantiao21" v-show="visiable[21]"></div>
                <span class="xiantiao21" v-show="visiable[21]">{{ spanValue[20] }}</span>

                <span class="showData" v-show="isTableShow">
                    <el-table style="width: 100%;font-size: 12px;" :data="tableShow" fit="false">
                        <el-table-column prop="xianlu" label="线路" width="65px" />
                        <el-table-column prop="kuochong" label="扩建容量（kW）" width="75px" />
                    </el-table>
                </span>
                <span class="tableName1" style="font-size: 12px;" v-show="isTableShow">减碳排率(kg/kWh)</span>
                <span class="showPaitan1" style="font-size: 12px;" v-show="isTableShow">
                    <el-table style="width: 100%;font-size:12px;" :data="paitanArr">
                        <el-table-column prop="guihuaqian1" label="规划前" width="70px" />
                        <el-table-column prop="guihuahou1" label="规划后" width="70px" />
                    </el-table>
                </span>
                <span class="tableName2" style="font-size: 12px;" v-show="isTableShow">减碳排放强度(kg/h)</span>
                <span class="showPaitan2" v-show="isTableShow">
                    <div class="tablefs">
                        <el-table style="width: 100%;font-size:12px;" :data="paitanArr">
                            <el-table-column prop="guihuaqian2" label="规划前" width="70px" />
                            <el-table-column prop="guihuahou2" label="规划后" width="70px" />
                        </el-table>
                    </div>

                </span>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

let isTableShow = ref(false)
const guangfuValue11 = ref('')
const guangfuValue15 = ref('')
const guangfuValue16 = ref('')
const fuheValue = ref('')
const shuidianValue = ref('')
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
    '11': false,
    '12': false,
    '13': false,
    '14': false,
    '15': false,
    '16': false,
    '17': false,
    '18': false,
    '19': false,
    '20': false,
    '21': false,
    '22': false,
    '23': false,
    '24': false,
    '25': false,
    '26': false,
    '27': false,
    '28': false,
})
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
]
const shuidianOptions = [
    {
        value: '2',
        label: '1600',
    },
    {
        value: '3',
        label: '2400',
    },
]
const guihuaData = {
    // '113':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,150,0,0],
    // '213':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,150,0,0],
    // '313':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,150,0,0],
    // '413':[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,150,0,0],
    // '513':[150,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,150,0,150,0,0],
    // '613':[150,240,240,335,0,0,295,0,0,150,0,335,0,0,0,0,150,0,150,0,0],
    // '713':[150,335,295,335,0,0,295,0,0,295,0,335,0,0,0,150,0,150,0,0],
    // '812':[0,0,0,0,0,0,0,0,0,0,0,0,335,0,150,0,0,0,0,0,0],
    // '813':[295,295,295,335,0,0,335,0,0,150,0,150,445,0,150,0,150,0,150,0,0]

    '1111': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1121': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1131': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1211': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1221': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1231': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1311': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1321': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '1331': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2111': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2121': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2131': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2211': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2221': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2231': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2311': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2321': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '2331': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3111': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3121': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3131': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3211': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3221': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3231': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3311': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3321': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    '3331': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],



    '1112': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1122': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1132': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1212': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1222': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1232': [0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1312': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1322': [0, 0, 0, 0, 0, 0, 663, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '1332': [0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2112': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2122': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2132': [0, 0, 0, 0, 0, 0, 663, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2212': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2222': [0, 0, 0, 0, 0, 0, 663, 0, 0, 335, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2232': [0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2312': [0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2322': [0, 0, 0, 335, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '2332': [0, 0, 0, 0, 0, 0, 335, 0, 0, 0, 663, 445, 0, 0, 0, 0, 0, 663, 150, 663, 663],
    '3112': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3122': [0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3132': [0, 0, 0, 335, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3212': [0, 0, 0, 0, 0, 0, 663, 0, 0, 335, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3222': [0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3232': [150, 150, 150, 335, 0, 0, 535, 0, 0, 535, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3312': [0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3322': [0, 0, 0, 0, 0, 0, 390, 0, 0, 150, 663, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],
    '3332': [390, 390, 335, 535, 0, 0, 663, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],


    '1113': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '1123': [150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 240, 0],
    '1133': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 335, 0],
    '1213': [150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 335, 150, 0],
    '1223': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 150, 0],
    '1233': [150, 663, 663, 535, 0, 0, 335, 0, 0, 335, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '1313': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0],
    '1323': [150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 390, 0, 0, 0, 0, 335, 0, 240, 240, 0],
    '1333': [535, 535, 535, 335, 0, 0, 335, 0, 0, 295, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '2113': [150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 0, 0, 0, 0, 0, 335, 0, 335, 150, 0],
    '2123': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 150, 0],
    '2133': [150, 390, 390, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '2213': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 295, 150, 0],
    '2223': [150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 150, 0],
    '2233': [535, 535, 535, 335, 0, 0, 335, 0, 0, 335, 0, 663, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '2313': [335, 295, 295, 535, 0, 0, 335, 0, 0, 295, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0],
    '2323': [335, 295, 295, 335, 0, 0, 335, 0, 0, 335, 0, 390, 0, 0, 0, 0, 335, 0, 240, 150, 0],
    '2333': [390, 390, 390, 335, 0, 0, 335, 0, 0, 240, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '3113': [150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 0, 0, 0, 0, 0, 335, 0, 335, 150, 0],
    '3123': [150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 150, 0],
    '3133': [535, 535, 663, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '3213': [150, 390, 445, 295, 0, 0, 335, 0, 0, 335, 0, 0, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '3223': [335, 335, 295, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 295, 0, 240, 335, 0],
    '3233': [390, 390, 390, 295, 0, 0, 335, 0, 0, 240, 0, 663, 0, 0, 0, 0, 335, 0, 240, 335, 0],
    '3313': [295, 295, 295, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0],
    '3323': [295, 335, 295, 150, 0, 0, 295, 0, 0, 240, 0, 150, 0, 0, 0, 0, 150, 0, 295, 335, 0],
    '3333': [390, 390, 390, 335, 0, 0, 240, 0, 0, 240, 0, 445, 0, 0, 0, 0, 335, 0, 295, 335, 0]

}
const paitanData = {
    '1111': [0.35, 0.35, 173.49, 173.49],
    '1121': [0.36, 0.36, 191.91, 191.91],
    '1131': [0.37, 0.37, 209.87, 209.87],
    '1211': [0.36, 0.36, 191.91, 191.91],
    '1221': [0.37, 0.37, 209.87, 209.87],
    '1231': [0.38, 0.38, 227.48, 227.48],
    '1311': [0.37, 0.37, 209.87, 209.87],
    '1321': [0.38, 0.38, 227.48, 227.48],
    '1331': [0.39, 0.39, 244.77, 244.77],
    '2111': [0.36, 0.36, 191.91, 191.91],
    '2121': [0.37, 0.37, 209.87, 209.87],
    '2131': [0.38, 0.38, 227.48, 227.48],
    '2211': [0.37, 0.37, 209.87, 209.87],
    '2221': [0.38, 0.38, 227.48, 227.48],
    '2231': [0.38, 0.38, 244.77, 244.77],
    '2311': [0.38, 0.38, 227.48, 227.48],
    '2321': [0.38, 0.38, 244.77, 244.77],
    '2331': [0.39, 0.39, 261.83, 261.83],
    '3111': [0.37, 0.37, 209.87, 209.87],
    '3121': [0.38, 0.38, 227.48, 227.48],
    '3131': [0.38, 0.38, 244.77, 244.77],
    '3211': [0.38, 0.38, 227.48, 227.48],
    '3221': [0.38, 0.38, 244.77, 244.77],
    '3231': [0.39, 0.39, 261.83, 261.83],
    '3311': [0.38, 0.38, 244.77, 244.77],
    '3321': [0.39, 0.39, 261.83, 261.83],
    '3331': [0.39, 0.39, 278.80, 278.80],

    '1112': [0.4539, 0.4606, 431.23, 450.33],
    '1122': [0.4575, 0.4698, 437.12, 468.31],
    '1132': [0.4577, 0.4727, 440.68, 485.90],
    '1212': [0.4575, 0.4698, 437.12, 468.31],
    '1222': [0.4577, 0.4727, 440.68, 485.90],
    '1232': [0.4606, 0.4779, 445.81, 503.26],
    '1312': [0.4577, 0.4727, 440.68, 485.90],
    '1322': [0.4606, 0.4779, 445.81, 503.26],
    '1332': [0.4624, 0.4811, 449.83, 520.30],
    '2112': [0.4575, 0.4698, 437.12, 468.31],
    '2122': [0.4577, 0.4727, 440.68, 485.90],
    '2132': [0.4606, 0.4779, 445.81, 503.26],
    '2212': [0.4577, 0.4727, 440.68, 485.90],
    '2222': [0.4606, 0.4779, 445.81, 503.26],
    '2232': [0.4624, 0.4811, 449.83, 520.30],
    '2312': [0.4606, 0.4779, 445.81, 503.26],
    '2322': [0.4624, 0.4811, 449.83, 520.30],
    '2332': [0.4631, 0.4794, 457.00, 537.25],
    '3112': [0.4577, 0.4727, 440.68, 485.90],
    '3122': [0.4606, 0.4779, 445.81, 503.26],
    '3132': [0.4624, 0.4811, 449.83, 520.30],
    '3212': [0.4606, 0.4779, 445.81, 503.22],
    '3222': [0.4624, 0.4811, 449.83, 520.30],
    '3232': [0.4631, 0.4794, 457.00, 537.25],
    '3312': [0.4624, 0.4811, 449.83, 520.30],
    '3322': [0.4631, 0.4794, 457.00, 537.25],
    '3332': [0.4713, 0.4831, 467.48, 554.12],

    '1113': [0.5541, 0.5558, 643.61, 725.15],
    '1123': [0.5575, 0.5591, 661.29, 742.70],
    '1133': [0.5592, 0.5618, 678.79, 760.09],
    '1213': [0.5575, 0.5591, 661.29, 742.70],
    '1223': [0.5592, 0.5618, 678.79, 760.09],
    '1233': [0.5606, 0.5632, 695.89, 777.09],
    '1313': [0.5592, 0.5618, 678.79, 760.09],
    '1323': [0.5606, 0.5632, 695.89, 777.09],
    '1333': [0.5624, 0.5649, 712.91, 794.00],
    '2113': [0.5575, 0.5594, 661.29, 742.70],
    '2123': [0.5592, 0.5618, 678.79, 760.09],
    '2133': [0.5606, 0.5632, 695.89, 777.09],
    '2213': [0.5592, 0.5618, 678.79, 760.09],
    '2223': [0.5606, 0.5632, 695.89, 777.09],
    '2233': [0.5624, 0.5649, 712.95, 794.00],
    '2313': [0.5606, 0.5632, 695.89, 777.09],
    '2323': [0.5624, 0.5649, 712.92, 794.00],
    '2333': [0.5644, 0.5668, 729.81, 810.83],
    '3113': [0.5592, 0.5618, 678.79, 760.09],
    '3123': [0.5606, 0.5632, 695.89, 777.09],
    '3133': [0.5624, 0.5649, 712.94, 794.00],
    '3213': [0.5606, 0.5632, 695.89, 777.09],
    '3223': [0.5624, 0.5649, 712.91, 794.00],
    '3233': [0.5644, 0.5668, 729.81, 810.83],
    '3313': [0.5624, 0.5649, 712.91, 794.00],
    '3323': [0.5644, 0.5668, 729.81, 810.83],
    '3333': [0.5668, 0.5691, 745.37, 827.57],

}
let paitanObj: LooseObject = {}
// let arrNotZero:any[]
let spanValue = reactive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
let paitanValue = reactive([0, 0, 0, 0])
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
    let beishuStr = guangfuValue11.value + guangfuValue15.value + guangfuValue16.value + shuidianValue.value
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

.tablefs {
    /* font-size: 1px; */
}

.beishu {
    margin-top: 30px;
}

.mainMap {
    background-image: url("../../assets/jingning.png");
    background-repeat: no-repeat;
    width: 700px;
    /*疑问？：div的尺寸如何自适应背景图的尺寸*/
    height: 345px;
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
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 850px;
    top: 200px;
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

.xiantiao1 {
    width: 40px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 138px;
}

.xiantiao2 {
    width: 37px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 179px;
}

.xiantiao3 {
    width: 53px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 217px;
}

.xiantiao4 {
    width: 28px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 270px;
}

.xiantiao5 {
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 317px;
}

.xiantiao6 {
    width: 7px;
    height: 47px;
    position: absolute;
    top: 147px;
    left: 281px;
}

.xiantiao7 {
    width: 7px;
    height: 46px;
    position: absolute;
    top: 99px;
    left: 281px;
}

.xiantiao8 {
    width: 7px;
    height: 47px;
    position: absolute;
    top: 52px;
    left: 281px;
}

.xiantiao9 {
    width: 41px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 298px;
}

.xiantiao10 {
    width: 33px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 340px;
}

.xiantiao11 {
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 392px;
}

.xiantiao12 {
    width: 45px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 373px;
}

.xiantiao13 {
    width: 7px;
    height: 39px;
    position: absolute;
    top: 156px;
    left: 429px;
}

.xiantiao14 {
    width: 7px;
    height: 44px;
    position: absolute;
    top: 111px;
    left: 429px;
}

.xiantiao15 {
    width: 41px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 418px;
}

.xiantiao16 {
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 477px;
}

.xiantiao17 {
    width: 44px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 460px;
}

.xiantiao18 {
    width: 7px;
    height: 33px;
    position: absolute;
    top: 247px;
    left: 522px;
}

.xiantiao19 {
    width: 45px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 505px;
}

.xiantiao20 {
    width: 7px;
    height: 36px;
    position: absolute;
    top: 184px;
    left: 569px;
}

.xiantiao21 {
    width: 46px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 552px;
}
</style>
   
   