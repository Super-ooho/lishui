<template>
    <el-container>
      <el-aside width="150px" class="asideStyle">
        <div>
            <div class="beishu">
                <div class="jiedianButton">选择节点</div>
                <el-select v-model="jiedian" class="m-2 jiedianButton" placeholder="Select">
                    <el-option
                    v-for="item in jiedianOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <el-button :plain="true" @click="submit">success</el-button>
        </div>
      </el-aside>
      <el-main>
        <div class="mainMap">
            <div v-show="visiable[1]" class="jiedian">
                <div class="jiedian1"></div>
                <span class="jiedian1">{{ chengzaiNum[0] }}</span>
            </div>
            <div v-show="visiable[2]" class="jiedian">
                <div class="jiedian2"></div>
                <span class="jiedian2">{{ chengzaiNum[1] }}</span>
            </div>
            <div v-show="visiable[3]" class="jiedian">
                <div class="jiedian3"></div>
                <span class="jiedian3">{{ chengzaiNum[2] }}</span>
            </div>
            <div v-show="visiable[4]" class="jiedian">
                <div class="jiedian4"></div>
                <span class="jiedian4">{{ chengzaiNum[3] }}</span>
            </div>
            <div v-show="visiable[5]" class="jiedian">
                <div class="jiedian5"></div>
                <span class="jiedian5">{{ chengzaiNum[4] }}</span>
            </div>
            <div v-show="visiable[6]" class="jiedian">
                <div class="jiedian6"></div>
                <span class="jiedian6">{{ chengzaiNum[5] }}</span>
            </div>
            <div v-show="visiable[7]" class="jiedian">
                <div class="jiedian7"></div>
                <span class="jiedian7">{{ chengzaiNum[6] }}</span>
            </div>
            <div v-show="visiable[8]" class="jiedian">
                <div class="jiedian8"></div>
                <span class="jiedian8">{{ chengzaiNum[7] }}</span>
            </div>
            <div v-show="visiable[9]" class="jiedian">
                <div class="jiedian9"></div>
                <span class="jiedian9">{{ chengzaiNum[8] }}</span>
            </div>
            <div v-show="visiable[10]" class="jiedian">
                <div class="jiedian10"></div>
                <span class="jiedian10">{{ chengzaiNum[9] }}</span>
            </div>
            <div v-show="visiable[11]" class="jiedian">
                <div class="jiedian11"></div>
                <span class="jiedian11">{{ chengzaiNum[10] }}</span>
            </div>
            <div v-show="visiable[12]" class="jiedian">
                <div class="jiedian12"></div>
                <span class="jiedian12">{{ chengzaiNum[11] }}</span>
            </div>
            <div v-show="visiable[13]" class="jiedian">
                <div class="jiedian13"></div>
                <span class="jiedian13">{{ chengzaiNum[12] }}</span>
            </div>
            <div v-show="visiable[14]" class="jiedian">
                <div class="jiedian14"></div>
                <span class="jiedian14">{{ chengzaiNum[13] }}</span>
            </div>
            <div v-show="visiable[15]" class="jiedian">
                <div class="jiedian15"></div>
                <span class="jiedian15">{{ chengzaiNum[14] }}</span>
            </div>
            <div v-show="visiable[16]" class="jiedian">
                <div class="jiedian16"></div>
                <span class="jiedian16">{{ chengzaiNum[15] }}</span>
            </div>
            <div v-show="visiable[17]" class="jiedian">
                <div class="jiedian17"></div>
                <span class="jiedian17">{{ chengzaiNum[16] }}</span>
            </div>
            <div v-show="visiable[18]" class="jiedian">
                <div class="jiedian18"></div>
                <span class="jiedian18">{{ chengzaiNum[17] }}</span>
            </div>
            <div v-show="visiable[19]" class="jiedian">
                <div class="jiedian19"></div>
                <span class="jiedian19">{{ chengzaiNum[18] }}</span>
            </div>
            <div v-show="visiable[20]" class="jiedian">
                <div class="jiedian20"></div>
                <span class="jiedian20">{{ chengzaiNum[19] }}</span>
            </div>
            <div v-show="visiable[21]" class="jiedian">
                <div class="jiedian21"></div>
                <span class="jiedian21">{{ chengzaiNum[20] }}</span>
            </div>
            <div v-show="visiable[22]" class="jiedian">
                <div class="jiedian22"></div>
                <span class="jiedian22">{{ chengzaiNum[21] }}</span>
            </div>
            <div class="showData">
                <div>该节点承载能力：</div>
                <div>{{ showChengzai }}</div>
            </div>
        </div>
      </el-main>
    </el-container>
</template>

<script lang="ts" setup>

    import { ReactiveFlags, reactive, ref } from 'vue'
    const jiedian = ref('')
    const jiedianOptions = [
    {
        value: '1',
        label: '节点1',
    },
    {
        value: '2',
        label: '节点2',
    },
    {
        value: '3',
        label: '节点3',
    },
    {
        value: '4',
        label: '节点4',
    },
    {
        value: '5',
        label: '节点5',
    },
    {
        value: '6',
        label: '节点6',
    },
    {
        value: '7',
        label: '节点7',
    },
    {
        value: '8',
        label: '节点8',
    },
    {
        value: '9',
        label: '节点9',
    },
    {
        value: '10',
        label: '节点10',
    },
    {
        value: '11',
        label: '节点11',
    },
    {
        value: '12',
        label: '节点12',
    },
    {
        value: '13',
        label: '节点13',
    },
    {
        value: '14',
        label: '节点14',
    },
    {
        value: '15',
        label: '节点15',
    },
    {
        value: '16',
        label: '节点16',
    },
    {
        value: '17',
        label: '节点18',
    },
    {
        value: '18',
        label: '节点18',
    },
    {
        value: '19',
        label: '节点19',
    },
    {
        value: '20',
        label: '节点20',
    },
    {
        value: '21',
        label: '节点21',
    },
    {
        value: '21',
        label: '节点22',
    }
    ]
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
    })
    let showChengzai:any = ref('')
    const chengzaiNum = [0.00,7677.21,7677.21,7677.21,7642.91,3329.64,5135.79,5135.79,5135.79,7484.61,7484.61,4103.59,7456.29,4839.41,4839.41,7456.29,7456.29,4400.26,4400.26,3045.79,3045.79,3045.79]
    function submit(){
        // console.log(visiable[jiedian.value])
        for(let i=1; i<=22; i++){
            visiable[i] = false
        }
        visiable[jiedian.value] = true
        let temp:any = Number(jiedian.value) - 1
        temp = temp.toString()
        showChengzai = chengzaiNum[temp]
    }

</script>

<style scoped>
.jiedianButton{
    margin-bottom: 15px;
}
.jiedian > span{
    font-size: 20px;
    color: red;
    z-index: 1;
} 
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
}
.jiedian2{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 168px;
    top: 221px;
}
.jiedian3{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 205px;
    top: 221px;
}
.jiedian4{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 260px;
    top: 221px;
}
.jiedian5{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 287px;
    top: 221px;
}
.jiedian6{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 309px;
    top: 270px;
}
.jiedian7{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 274px;
    top: 136px;
}
.jiedian8{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 274px;
    top: 90px;
}
.jiedian9{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 274px;
    top: 43px;
}
.jiedian10{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 330px;
    top: 221px;
}
.jiedian11{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 363px;
    top: 221px;
}
.jiedian12{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 385px;
    top: 268px;
}
.jiedian13{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 408px;
    top: 221px;
}
.jiedian14{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 422px;
    top: 145px;
}
.jiedian15{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 422px;
    top: 100px;
}
.jiedian16{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 449px;
    top: 221px;
}
.jiedian17{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 470px;
    top: 268px;
}
.jiedian18{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 494px;
    top: 221px;
}
.jiedian19{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 515px;
    top: 268px;
}
.jiedian20{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 541px;
    top: 221px;
}
.jiedian21{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 562px;
    top: 174px;
}
.jiedian22{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 588px;
    top: 221px;
}
.showData{
    width: 170px;
    height: 100px;
    /* background-color: rebeccapurple; */
    position: absolute;
    left: 710px;
    font-size: 21px;
}
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
    margin-top: 15px;
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

</style>
   
   