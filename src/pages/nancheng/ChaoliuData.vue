<template>
    <el-container>
        <el-aside width="150px" class="asideStyle">
            <div>
                <div>
                    <span>季节选择</span>
                    <el-select v-model="seasonvalue" class="m-2" placeholder="Select">
                        <el-option v-for="item in seasonoptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>负荷倍数1</span>
                    <el-select v-model="beishuvalue1" class="m-2" placeholder="Select">
                        <el-option v-for="item in beishu1Options" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <span>负荷倍数2</span>
                    <el-select v-model="beishuvalue2" class="m-2" placeholder="Select">
                        <el-option v-for="item in beishu2Options" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <!-- <el-button type="primary" class="chaxunButton">查询</el-button> -->
                <el-button :plain="true" @click="open2">查询</el-button>
            </div>
        </el-aside>
        <el-main>
            <div class="mainMap">
                <div class="xiantiao1" v-show="visiable[1]"></div>
                <span class="xiantiao1" @click="appear1($event)"></span>
                <div class="xiantiao2" v-show="visiable[2]"></div>
                <span class="xiantiao2" @click="appear2($event)"></span>
                <div class="xiantiao3" v-show="visiable[3]"></div>
                <span class="xiantiao3" @click="appear3($event)"></span>
                <div class="xiantiao41" v-show="visiable[4]"></div>
                <span class="xiantiao41" @click="appear4($event)"></span>
                <div class="xiantiao42" v-show="visiable[5]"></div>
                <span class="xiantiao42" @click="appear4($event)"></span>
                <div class="xiantiao43" v-show="visiable[6]"></div>
                <span class="xiantiao43" @click="appear4($event)"></span>
                <div class="xiantiao51" v-show="visiable[7]"></div>
                <span class="xiantiao51" @click="appear5($event)"></span>
                <div class="xiantiao52" v-show="visiable[8]"></div>
                <span class="xiantiao52" @click="appear5($event)"></span>
                <div class="xiantiao53" v-show="visiable[9]"></div>
                <span class="xiantiao53" @click="appear5($event)"></span>
                <div class="xiantiao61" v-show="visiable[10]"></div>
                <span class="xiantiao61" @click="appear6($event)"></span>
                <div class="xiantiao62" v-show="visiable[11]"></div>
                <span class="xiantiao62" @click="appear6($event)"></span>
                <div class="xiantiao63" v-show="visiable[12]"></div>
                <span class="xiantiao63" @click="appear6($event)"></span>
                <div class="xiantiao71" v-show="visiable[13]"></div>
                <span class="xiantiao71" @click="appear7($event)"></span>
                <div class="xiantiao72" v-show="visiable[14]"></div>
                <span class="xiantiao72" @click="appear7($event)"></span>
                <div class="xiantiao73" v-show="visiable[15]"></div>
                <span class="xiantiao73" @click="appear7($event)"></span>
                <div class="xiantiao81" v-show="visiable[16]"></div>
                <span class="xiantiao81" @click="appear8($event)"></span>
                <div class="xiantiao82" v-show="visiable[17]"></div>
                <span class="xiantiao82" @click="appear8($event)"></span>
                <div class="xiantiao91" v-show="visiable[18]"></div>
                <span class="xiantiao91" @click="appear9($event)"></span>
                <div class="xiantiao92" v-show="visiable[19]"></div>
                <span class="xiantiao92" @click="appear9($event)"></span>
                <div class="xiantiao93" v-show="visiable[20]"></div>
                <span class="xiantiao93" @click="appear9($event)"></span>

            </div>
            <el-dialog v-model="centerDialogVisible1" title="数据展示" width="80%" align-center>
                <img src="../../assets/xianlu1.png" class="diaImg" v-if="dialogIsShow.p1">
                <img src="../../assets/xianlu2.png" class="diaImg" v-if="dialogIsShow.p2">
                <img src="../../assets/xianlu3.png" class="diaImg" v-if="dialogIsShow.p3">
                <img src="../../assets/xianlu4.png" class="diaImg" v-if="dialogIsShow.p4">
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="centerDialogVisible1 = false">Cancel</el-button>
                        <el-button type="primary" @click="centerDialogVisible1 = false">
                            Confirm
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

const seasonvalue = ref('')
const beishuvalue1 = ref('')
const beishuvalue2 = ref('')
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
})
const visiable2 = visiable
const seasonoptions = [
    {
        value: 'summer',
        label: '夏季',
    },
    {
        value: 'guodu',
        label: '过渡季',
    },
    {
        value: 'winter',
        label: '冬季',
    },
]
const beishu1Options = [
    {
        value: '1',
        label: '300',
    }
]
const beishu2Options = [
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
    {
        value: '4',
        label: '3200',
    },

    {
        value: '5',
        label: '4000',
    },
    {
        value: '6',
        label: '4800',
    },
]
const centerDialogVisible1 = ref(false)
const centerDialogVisible2 = ref(false)
const dialogIsShow = reactive({
    'p1': false,
    'p2': false,
    'p3': false,
    'p4': false
})
function legalRongliang() {
    const rongliang1 = (beishuvalue2.value == '1')
    const rongliang2 = (beishuvalue2.value == '2')
    const rongliang3 = (beishuvalue2.value == '3')
    const rongliang4 = (beishuvalue2.value == '4')
    const rongliang5 = (beishuvalue2.value == '5')
    const rongliang6 = (beishuvalue2.value == '6')
    const rongliang7 = (beishuvalue1.value != '')
    const ifRongliang = (rongliang1 || rongliang2 || rongliang3 || rongliang4 || rongliang5 || rongliang6 && rongliang7)
    return ifRongliang
}
function open2() {
    const ifRongliang = legalRongliang()
    if (ifRongliang && seasonvalue.value != '') {
        ElMessage({
            message: '潮流数据填入成功！',
            type: 'success',
        })
    } else {
        ElMessageBox.alert('暂无此潮流信息，请重新预设参数', '提示', {
            confirmButtonText: 'OK',
        })
    }
}
function appear1(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p1 = true
    visiable[1] = true
    centerDialogVisible1.value = true
}
function appear2(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p2 = true
    visiable[2] = true
    centerDialogVisible1.value = true
}
function appear3(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p3 = true
    visiable[3] = true
    centerDialogVisible1.value = true

}
function appear4(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[4] = true
    visiable[5] = true
    visiable[6] = true

    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p4 = true
    centerDialogVisible1.value = true
}
function appear5(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[7] = true
    visiable[8] = true
    visiable[9] = true
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p1 = true
    centerDialogVisible1.value = true
}
function appear6(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[10] = true
    visiable[11] = true
    visiable[12] = true
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p2 = true
    centerDialogVisible1.value = true
}
function appear7(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[13] = true
    visiable[14] = true
    visiable[15] = true
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p3 = true
    centerDialogVisible1.value = true
}
function appear8(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[16] = true
    visiable[17] = true
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p4 = true
    centerDialogVisible1.value = true
}
function appear9(event: any) {
    for (let i = 0; i <= 28; i++) {
        visiable[i] = false
    }
    visiable[18] = true
    visiable[19] = true
    visiable[20] = true
    dialogIsShow.p1 = false
    dialogIsShow.p2 = false
    dialogIsShow.p3 = false
    dialogIsShow.p4 = false
    dialogIsShow.p1 = true
    centerDialogVisible1.value = true
}


</script>

<style scoped>
.diaImg {
    width: 100%;
}

.asideStyle {
    font-size: 20px;
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
    left: 30px;
}

.mainMap>div {
    /* opacity: 1; */
    background-color: rebeccapurple;
}

.mainMap>span {
    opacity: 0;
    z-index: 1;
    /* background-color: red; */
}

.xiantiao1 {
    width: 108px;
    height: 7px;
    position: absolute;
    top: 202px;
    left: 233px;
}

.xiantiao2 {
    width: 129px;
    height: 7px;
    position: absolute;
    top: 202px;
    left: 342px;
}

.xiantiao3 {
    width: 95px;
    height: 7px;
    position: absolute;
    top: 218px;
    left: 471px;
}

.xiantiao41 {
    width: 7px;
    height: 65px;
    position: absolute;
    top: 180px;
    left: 338px;
}

.xiantiao42 {
    width: 47px;
    height: 7px;
    position: absolute;
    top: 180px;
    left: 291px;
}

.xiantiao43 {
    width: 7px;
    height: 98px;
    position: absolute;
    top: 83px;
    left: 291px;
}


.xiantiao51 {
    width: 7px;
    height: 65px;
    position: absolute;
    top: 180px;
    left: 338px;
}

.xiantiao52 {
    width: 69px;
    height: 7px;
    position: absolute;
    top: 180px;
    left: 340px;
}

.xiantiao53 {
    width: 7px;
    height: 98px;
    position: absolute;
    top: 83px;
    left: 402px;
}

.xiantiao61 {
    width: 71px;
    height: 7px;
    position: absolute;
    top: 231px;
    left: 339px;
}

.xiantiao62 {
    width: 7px;
    height: 108px;
    position: absolute;
    top: 231px;
    left: 403px;
}

.xiantiao63 {
    width: 7px;
    height: 47px;
    position: absolute;
    top: 147px;
    left: 281px;
}

.xiantiao71 {
    width: 7px;
    height: 57px;
    position: absolute;
    top: 180px;
    left: 468px;
}

.xiantiao72 {
    width: 65px;
    height: 7px;
    position: absolute;
    top: 180px;
    left: 474px;
}

.xiantiao73 {
    width: 7px;
    height: 98px;
    position: absolute;
    top: 83px;
    left: 532px;
}

.xiantiao81 {
    width: 66px;
    height: 7px;
    position: absolute;
    top: 236px;
    left: 567px;
}

.xiantiao82 {
    width: 7px;
    height: 95px;
    position: absolute;
    top: 242px;
    left: 626px;
}

.xiantiao91 {
    width: 7px;
    height: 23px;
    position: absolute;
    top: 202px;
    left: 564px;
}

.xiantiao92 {
    width: 69px;
    height: 7px;
    position: absolute;
    top: 202px;
    left: 564px;
}

.xiantiao93 {
    width: 7px;
    height: 121px;
    position: absolute;
    top: 83px;
    left: 626px;
}
</style>
   
   