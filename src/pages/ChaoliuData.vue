<template>
    <el-container>
      <el-aside width="150px" class="asideStyle">
        <div>
            <div>
                <span>季节选择</span>
                <el-select v-model="seasonvalue" class="m-2" placeholder="Select">
                    <el-option
                    v-for="item in seasonoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div class="beishu">
                <span>光伏倍数</span>
                <el-select v-model="beishuvalue1" class="m-2" placeholder="Select">
                    <el-option
                    v-for="item in beishu1Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div class="beishu">
                <span>水电倍数</span>
                <el-select v-model="beishuvalue2" class="m-2" placeholder="Select">
                    <el-option
                    v-for="item in beishu2Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
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
            <div class="xiantiao4" v-show="visiable[4]"></div>
            <span class="xiantiao4" @click="appear4($event)"></span>
            <div class="xiantiao5" v-show="visiable[5]"></div>
            <span class="xiantiao5" @click="appear5($event)"></span>
            <div class="xiantiao51" v-show="visiable[6]"></div>
            <span class="xiantiao51" @click="appear5($event)"></span>
            <div class="xiantiao6" v-show="visiable[7]"></div>
            <span class="xiantiao6" @click="appear6($event)"></span>
            <div class="xiantiao61" v-show="visiable[8]"></div>
            <span class="xiantiao61" @click="appear6($event)"></span>
            <div class="xiantiao7" v-show="visiable[9]"></div>
            <span class="xiantiao7" @click="appear7($event)"></span>
            <div class="xiantiao8" v-show="visiable[10]"></div>
            <span class="xiantiao8" @click="appear8($event)"></span>
            <div class="xiantiao9" v-show="visiable[11]"></div>
            <span class="xiantiao9" @click="appear9($event)"></span>
            <div class="xiantiao10" v-show="visiable[12]"></div>
            <span class="xiantiao10" @click="appear10($event)"></span>
            <div class="xiantiao11" v-show="visiable[13]"></div>
            <span class="xiantiao11" @click="appear11($event)"></span>
            <div class="xiantiao111" v-show="visiable[14]"></div>
            <span class="xiantiao111" @click="appear11($event)"></span>
            <div class="xiantiao12" v-show="visiable[15]"></div>
            <span class="xiantiao12" @click="appear12($event)"></span>
            <div class="xiantiao13" v-show="visiable[16]"></div>
            <span class="xiantiao13" @click="appear13($event)"></span>
            <div class="xiantiao131" v-show="visiable[17]"></div>
            <span class="xiantiao131" @click="appear13($event)"></span>
            <div class="xiantiao14" v-show="visiable[18]"></div>
            <span class="xiantiao14" @click="appear14($event)"></span>
            <div class="xiantiao15" v-show="visiable[19]"></div>
            <span class="xiantiao15" @click="appear15($event)"></span>
            <div class="xiantiao16" v-show="visiable[20]"></div>
            <span class="xiantiao16" @click="appear16($event)"></span>
            <div class="xiantiao161" v-show="visiable[21]"></div>
            <span class="xiantiao161" @click="appear16($event)"></span>
            <div class="xiantiao17" v-show="visiable[22]"></div>
            <span class="xiantiao17" @click="appear17($event)"></span>
            <div class="xiantiao18" v-show="visiable[23]"></div>
            <span class="xiantiao18" @click="appear18($event)"></span>
            <div class="xiantiao181" v-show="visiable[24]"></div>
            <span class="xiantiao181" @click="appear18($event)"></span>
            <div class="xiantiao19" v-show="visiable[25]"></div>
            <span class="xiantiao19" @click="appear19($event)"></span>
            <div class="xiantiao20" v-show="visiable[26]"></div>
            <span class="xiantiao20" @click="appear20($event)"></span>
            <div class="xiantiao201" v-show="visiable[27]"></div>
            <span class="xiantiao201" @click="appear20($event)"></span>
            <div class="xiantiao21" v-show="visiable[28]"></div>
            <span class="xiantiao21" @click="appear21($event)"></span>
        </div>
        <el-dialog
            v-model="centerDialogVisible1"
            title="数据展示"
            width="80%"
            align-center>
            <img src="../assets/xianlu1.png" class="diaImg" v-if="dialogIsShow.p1">
            <img src="../assets/xianlu2.png" class="diaImg" v-if="dialogIsShow.p2">
            <img src="../assets/xianlu3.png" class="diaImg" v-if="dialogIsShow.p3">
            <img src="../assets/xianlu4.png" class="diaImg" v-if="dialogIsShow.p4">
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
    import { ElMessage, ElMessageBox} from 'element-plus'
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
        '22': false,
        '23': false,
        '24': false,
        '25': false,
        '26': false,
        '27': false,
        '28': false,
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
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
    },
    ]
    const beishu2Options = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
    {
        value: '3',
        label: '3',
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
    // const rongliang1 = (beishuvalue1.value=='1' && beishuvalue2.value=='1')
    // const rongliang2 = (beishuvalue1.value=='1' && beishuvalue2.value=='3')
    // const rongliang3 = (beishuvalue1.value=='2' && beishuvalue2.value=='3')
    // const rongliang4 = (beishuvalue1.value=='3' && beishuvalue2.value=='3')
    // const rongliang5 = (beishuvalue1.value=='4' && beishuvalue2.value=='3')
    // const rongliang6 = (beishuvalue1.value=='5' && beishuvalue2.value=='3')
    // const rongliang7 = (beishuvalue1.value=='6' && beishuvalue2.value=='3')
    // const rongliang8 = (beishuvalue1.value=='7' && beishuvalue2.value=='3')
    // const rongliang9 = (beishuvalue1.value=='8' && beishuvalue2.value=='3')
    // const ifRongliang = (rongliang1 || rongliang2 || rongliang3 || rongliang4 || rongliang5 || rongliang6 || rongliang7 || rongliang8 || rongliang9)
    function legalRongliang(){
        const rongliang1 = (beishuvalue1.value=='1' && beishuvalue2.value=='1')
        const rongliang2 = (beishuvalue1.value=='1' && beishuvalue2.value=='3')
        const rongliang3 = (beishuvalue1.value=='2' && beishuvalue2.value=='3')
        const rongliang4 = (beishuvalue1.value=='3' && beishuvalue2.value=='3')
        const rongliang5 = (beishuvalue1.value=='4' && beishuvalue2.value=='3')
        const rongliang6 = (beishuvalue1.value=='5' && beishuvalue2.value=='3')
        const rongliang7 = (beishuvalue1.value=='6' && beishuvalue2.value=='3')
        const rongliang8 = (beishuvalue1.value=='7' && beishuvalue2.value=='3')
        const rongliang9 = (beishuvalue1.value=='8' && beishuvalue2.value=='3')
        const ifRongliang = (rongliang1 || rongliang2 || rongliang3 || rongliang4 || rongliang5 || rongliang6 || rongliang7 || rongliang8 || rongliang9)
        return ifRongliang
    }
    function open2(){
        const ifRongliang = legalRongliang()
        if(ifRongliang && seasonvalue.value!==''){
            ElMessage({
                message: '潮流数据填入成功！',
                type: 'success',
            })
        }else{
            ElMessageBox.alert('暂无此潮流信息，请重新预设参数', '提示', {
                confirmButtonText: 'OK',
            })
        }
    }
    function appear1(event:any){
        for(let i = 0; i<=28; i++){
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
    function appear2(event:any){
        for(let i = 0; i<=28; i++){
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
    function appear3(event:any){
        for(let i = 0; i<=28; i++){
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
    function appear4(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[4] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p4 = true
        centerDialogVisible1.value = true
    }
    function appear5(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[5] = true
        visiable[6] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p1 = true
        centerDialogVisible1.value = true
    }
    function appear6(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[7] = true
        visiable[8] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p2 = true
        centerDialogVisible1.value = true
    }
    function appear7(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[9] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p3 = true
        centerDialogVisible1.value = true
    }
    function appear8(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[10] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p4 = true
        centerDialogVisible1.value = true
    }
    function appear9(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[11] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p1 = true
        centerDialogVisible1.value = true
    }
    function appear10(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[12] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p2 = true
        centerDialogVisible1.value = true
    }
    function appear11(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[13] = true
        visiable[14] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p3 = true
        centerDialogVisible1.value = true
    }
    function appear12(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[15] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p4 = true
        centerDialogVisible1.value = true
    }
    function appear13(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[16] = true
        visiable[17] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p1 = true
        centerDialogVisible1.value = true
    }
    function appear14(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[18] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p2 = true
        centerDialogVisible1.value = true
    }
    function appear15(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[19] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p3 = true
        centerDialogVisible1.value = true
    }
    function appear16(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[20] = true
        visiable[21] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p4 = true
        centerDialogVisible1.value = true
    }
    function appear17(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[22] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p1 = true
        centerDialogVisible1.value = true
    }
    function appear18(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[23] = true
        visiable[24] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p2 = true
        centerDialogVisible1.value = true
    }
    function appear19(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[25] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p3 = true
        centerDialogVisible1.value = true
    }
    function appear20(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[26] = true
        visiable[27] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p4 = true
        centerDialogVisible1.value = true
    }
    function appear21(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[28] = true
        dialogIsShow.p1 = false
        dialogIsShow.p2 = false
        dialogIsShow.p3 = false
        dialogIsShow.p4 = false
        dialogIsShow.p1 = true
        centerDialogVisible1.value = true
    }

</script>

<style scoped>
.diaImg{
    width: 100%;
}
.asideStyle{
    font-size: 20px;
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
    left: 30px;
}
.mainMap>div{
    /* opacity: 1; */
    background-color: rebeccapurple;
}
.mainMap>span{
    opacity: 0;
    z-index:1;
    /* background-color: red; */
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
    width: 26px;
    height: 7px;
    position: absolute;
    top: 240px;
    left: 298px;
}
.xiantiao51{
    width: 7px;
    height: 34px;
    position: absolute;
    top: 246px;
    left: 317px;
}
.xiantiao6{
    width: 18px;
    height: 7px;
    position: absolute;
    top: 193px;
    left: 270px;
}
.xiantiao61{
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
    width: 26px;
    height: 7px;
    position: absolute;
    top: 240px;
    left: 373px;
}

.xiantiao111{
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
    width: 18px;
    height: 7px;
    position: absolute;
    top: 193px;
    left: 418px;
}
.xiantiao131{
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
    width: 24px;
    height: 7px;
    position: absolute;
    top: 240px;
    left: 460px;
}
.xiantiao161{
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
    width: 24px;
    height: 7px;
    position: absolute;
    top: 240px;
    left: 505px;
}
.xiantiao181{
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
    width: 24px;
    height: 7px;
    position: absolute;
    top: 219px;
    left: 552px;
}
.xiantiao201{
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
   
   