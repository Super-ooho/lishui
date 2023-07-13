<template>
    <el-container>
      <el-aside width="80px" class="asideStyle">
        <div>
            <div>
                <span>11号节点光伏扩建容量</span>
                <el-select v-model="guangfuValue11" class="m-2" placeholder=" ">
                    <el-option
                    v-for="item in guangfuOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div>
                <span>15号节点光伏扩建容量</span>
                <el-select v-model="guangfuValue15" class="m-2" placeholder=" ">
                    <el-option
                    v-for="item in guangfuOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div class="beishu">
                <span>16号节点光伏扩建容量</span>
                <el-select v-model="guangfuValue16" class="m-2" placeholder=" ">
                    <el-option
                    v-for="item in guangfuOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div class="beishu">
                <span>水电扩建容量</span>
                <el-select v-model="shuidianValue" class="m-2" placeholder=" ">
                    <el-option
                    v-for="item in shuidianOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
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
                <el-table  style="width: 100%;font-size: 2px;" :data="tableShow" fit="false">
                    <el-table-column prop="xianlu" label="线路" width="70px" />
                    <el-table-column prop="kuochong" label="扩容" width="70px" />
                </el-table>
            </span>
            <span class="tableName1" v-show="isTableShow">碳排率(kg/kWh)</span>
            <span class="showPaitan1" style="font-size: 1px;" v-show="isTableShow">
                <el-table  style="width: 100%" :data="paitanArr">
                    <el-table-column prop="guihuaqian1" label="规划前" width="70px" />
                    <el-table-column prop="guihuahou1" label="规划后" width="70px" />
                </el-table>
            </span>
            <span class="tableName2" style="font-size: 1px;" v-show="isTableShow">碳排放强度(kg/h)</span>
            <span class="showPaitan2" v-show="isTableShow">
                <el-table  style="width: 100%" :data="paitanArr">
                    <el-table-column prop="guihuaqian2" label="规划前" width="70px" />
                    <el-table-column prop="guihuahou2" label="规划后" width="70px" />
                </el-table>
            </span>
        </div>
      </el-main>
    </el-container>
</template>

<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import { ElMessageBox} from 'element-plus'

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





        '1112': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1122': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1132':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1212':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1222':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1232':[0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1312':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1322':[0, 0, 0, 0, 0, 0, 663, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '1332':[0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2112':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2122':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2132':[0, 0, 0, 0, 0, 0, 663, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2212':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2222':[0, 0, 0, 0, 0, 0, 663, 0, 0, 335, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2232':[0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2312':[0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2322':[0, 0, 0, 335, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '2332':[0, 0, 0, 0, 0, 0, 335, 0, 0, 0, 663, 445, 0, 0, 0, 0, 0, 663, 150, 663, 663], 
        '3112':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3122':[0, 0, 0, 0, 0, 0, 335, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3132':[0, 0, 0, 335, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3212':[0, 0, 0, 0, 0, 0, 663, 0, 0, 335, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3222':[0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3232':[150, 150, 150, 335, 0, 0, 535, 0, 0, 535, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3312':[0, 0, 0, 0, 0, 0, 0, 0, 0, 663, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3322':[0, 0, 0, 0, 0, 0, 390, 0, 0, 150, 663, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0], 
        '3332':[390, 390, 335, 535, 0, 0, 663, 0, 0, 240, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0],


        '1113':[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '1123':[150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 240, 0], 
        '1133':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 335, 0], 
        '1213':[150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 335, 150, 0], 
        '1223':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 150, 0], 
        '1233':[150, 663, 663, 535, 0, 0, 335, 0, 0, 335, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '1313':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0], 
        '1323':[150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 390, 0, 0, 0, 0, 335, 0, 240, 240, 0], 
        '1333':[535, 535, 535, 335, 0, 0, 335, 0, 0, 295, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '2113':[150, 150, 150, 663, 0, 0, 150, 0, 0, 150, 0, 0, 0, 0, 0, 0, 335, 0, 335, 150, 0], 
        '2123':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 335, 0, 335, 150, 0], 
        '2133':[150, 390, 390, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '2213':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 150, 0, 0, 0, 0, 150, 0, 295, 150, 0], 
        '2223':[150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 150, 0], 
        '2233':[535, 535, 535, 335, 0, 0, 335, 0, 0, 335, 0, 663, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '2313':[335, 295, 295, 535, 0, 0, 335, 0, 0, 295, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0], 
        '2323':[335, 295, 295, 335, 0, 0, 335, 0, 0, 335, 0, 390, 0, 0, 0, 0, 335, 0, 240, 150, 0], 
        '2333':[390, 390, 390, 335, 0, 0, 335, 0, 0, 240, 0, 535, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '3113':[150, 150, 150, 150, 0, 0, 150, 0, 0, 150, 0, 0, 0, 0, 0, 0, 335, 0, 335, 150, 0], 
        '3123':[150, 445, 445, 535, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 150, 0], 
        '3133':[535, 535, 663, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '3213':[150, 390, 445, 295, 0, 0, 335, 0, 0, 335, 0, 0, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '3223':[335, 335, 295, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 295, 0, 240, 335, 0], 
        '3233':[390, 390, 390, 295, 0, 0, 335, 0, 0, 240, 0, 663, 0, 0, 0, 0, 335, 0, 240, 335, 0], 
        '3313':[295, 295, 295, 335, 0, 0, 335, 0, 0, 335, 0, 150, 0, 0, 0, 0, 150, 0, 240, 150, 0], 
        '3323':[295, 335, 295, 150, 0, 0, 295, 0, 0, 240, 0, 150, 0, 0, 0, 0, 150, 0, 295, 335, 0], 
        '3333':[390, 390, 390, 335, 0, 0, 240, 0, 0, 240, 0, 445, 0, 0, 0, 0, 335, 0, 295, 335, 0]

    }
    const paitanData = {
        '111':[-0.317,-0.317,-153.7,-153.7],
        '211':[-0.357,-0.357,-173.4,-173.4],
        '311':[-0.368,-0.368,-191.9,-191.9],
        '411':[-0.381,-0.381,-209.8,-209.8],
        '511':[-0.378,-0.378,-227.4,-227.4],
        '611':[-0.392,-0.392,-244.7,-244.7],
        '711':[-0.390,-0.390,-261.8,-261.8],
        '811':[-0.389,-0.389,-278.8,-278.8],
        '112':[-0.402,-0.402,-431.8,-431.2],
        '212':[-0.460,-0.460,-450.8,-450.3],
        '312':[-0.472,-0.472,-468.3,-468.3],
        '412':[-0.469,-0.469,-485.9,-485.9],
        '512':[-0.483,-0.483,-503.2,-503.2],
        '612':[-0.481,-0.481,-520.3,-520.3],
        '712':[-0.479,-0.479,-537.2,-537.9],
        '812':[-0.477,-0.477,-554.1,-554.1],
        '113':[-0.499,-0.500,-624.6,-706.3],
        '213':[-0.557,-0.558,-643.6,-725.1],
        '313':[-0.553,-0.555,-661.2,-742.7],
        '413':[-0.566,-0.568,-678.7,-760.0],
        '513':[-0.564,-0.566,-695.8,-777.0],
        '613':[-0.562,-0.564,-712.8,-794.0],
        '713':[-0.560,-0.563,-729.8,-810.8],
        '813':[-0.559,-0.561,-745.3,-827.5]
    }
    let paitanObj:LooseObject={}
    // let arrNotZero:any[]
    let spanValue = reactive([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    let paitanValue = reactive([0,0,0,0])
    let paitanArr:any = reactive([])
    interface LooseObject {
        [key: string]: any
    }
    // let tableShow:Array<any>=[]
    let tableShow:Array<any> = reactive([])
    function submit(){
        isTableShow.value = true
        tableShow = []
        paitanArr = []
        let arrNotZero:Array<any>=[]
        let beishuStr = guangfuValue11.value + guangfuValue15.value + guangfuValue16.value + shuidianValue.value
        if(beishuStr in guihuaData){
            let i:any
            for(i in guihuaData[beishuStr]){
                if(guihuaData[beishuStr][i] != 0){
                    // 获取到不为0的元素的位置坐标
                    arrNotZero.push(parseInt(i)+1)
                    spanValue[i] = guihuaData[beishuStr][i]
                }
            }
            console.log(spanValue)
            for(let i = 0; i<=28; i++){
                visiable[i] = false
            }
            for(i in arrNotZero){
                let xianluShow: LooseObject={}
                visiable[arrNotZero[i]] = true
                let strXianlu = '线路'+arrNotZero[i]
                console.log(i)
                console.log(arrNotZero[i])

                xianluShow.xianlu = strXianlu
                xianluShow.kuochong = spanValue[arrNotZero[i]-1]

                tableShow.push(xianluShow)


            }
            console.log(tableShow)

        }
        else{
            // console.log("nihao")
            ElMessageBox.alert('暂无此扩充容量信息，请重新预设参数', '提示', {
                confirmButtonText: 'OK',
            })
        }
        if(beishuStr in paitanData){
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
.diaImg{
    width: 100%;
}
.asideStyle{
    font-size: 12px;
}

.chaxunButton{
    margin-top: 30px;
    margin-left: 30%;
}

.beishu{
    margin-top: 30px;
}

.mainMap{
    background-image:url("../assets/jingning.png");
    background-repeat:no-repeat;  
    width:700px;   /*疑问？：div的尺寸如何自适应背景图的尺寸*/
    height:345px;
    background-size:100%;
    position: relative;
    left: 10px;
}

.mainMap>div{
    /* opacity: 1; */
    background-color: rebeccapurple;
}
.mainMap>span{
    /* opacity: 1; */
    color: red;
    font-size: 5px;
}
.showData{
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 710px;
    
}
.showPaitan1{
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 850px;
    top: 50px;
}
.showPaitan2{
    width: 150px;
    height: 345px;
    background-color: none;
    position: absolute;
    left: 850px;
    top: 200px;
}
.tableName1{
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
.tableName2{
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
.xiantiao1{
    width: 40px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 138px;
}
.xiantiao2{
    width: 37px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 179px;
}
.xiantiao3{
    width: 53px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 217px;
}
.xiantiao4{
    width: 28px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 270px;
}
.xiantiao5{
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 317px;
}

.xiantiao6{
    width: 7px;
    height: 47px;
    position: absolute;
    top: 147px;
    left: 281px;
}
.xiantiao7{
    width: 7px;
    height: 46px;
    position: absolute;
    top: 99px;
    left: 281px;
}
.xiantiao8{
    width: 7px;
    height: 47px;
    position: absolute;
    top: 52px;
    left: 281px;
}
.xiantiao9{
    width: 41px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 298px;
}
.xiantiao10{
    width: 33px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 340px;
}
.xiantiao11{
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 392px;
}

.xiantiao12{
    width: 45px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 373px;
}
.xiantiao13{
    width: 7px;
    height: 39px;
    position: absolute;
    top: 156px;
    left: 429px;
}

.xiantiao14{
    width: 7px;
    height: 44px;
    position: absolute;
    top: 111px;
    left: 429px;
}
.xiantiao15{
    width: 41px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 418px;
}
.xiantiao16{
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 477px;
}

.xiantiao17{
    width: 44px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 460px;
}
.xiantiao18{
    width: 7px;
    height: 33px;
    position: absolute;
    top: 247px;
    left: 522px;
}
.xiantiao19{
    width: 45px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 505px;
}

.xiantiao20{
    width: 7px;
    height: 36px;
    position: absolute;
    top: 184px;
    left: 569px;
}
.xiantiao21{
    width: 46px;
    height: 7px;
    position: absolute;
    top: 228px;
    left: 552px;
}
</style>
   
   