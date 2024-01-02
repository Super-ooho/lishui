<template>
    <el-container class="container">
        <el-aside width="150px" class="asideStyle">
            <div>
                <div class="beishu">
                    <div class="jiedianButton">选择节点</div>
                    <el-select v-model="jiedian" class="m-2 jiedianButton" placeholder="Select">
                        <el-option v-for="item in jiedianOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="beishu">
                    <div class="jiedianButton">是否选择暂态</div>
                    <el-select v-model="zantai" class="m-2 jiedianButton" placeholder="Select">
                        <el-option v-for="item in zantaiOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <el-button :plain="true" @click="submit">查询</el-button>
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
                <div class="showData">
                    <div>该节点承载能力(kW)：</div>
                    <div>{{ showChengzai }}</div>
                </div>
            </div>
        </el-main>
        <img src="../../assets/chengzailinancheng.png" alt="" class="chengzailiImg">
    </el-container>
</template>

<script lang="ts" setup>

import { ReactiveFlags, reactive, ref } from 'vue'
const tableData = [
    {
        jiedian: '1',
        chengzai: '',
    },
    {
        jiedian: '2',
        chengzai: '',
    },
    {
        jiedian: '3',
        chengzai: '',
    },
    {
        jiedian: '4',
        chengzai: '',
    },
    {
        jiedian: '5',
        chengzai: '',
    },
    {
        jiedian: '6',
        chengzai: '',
    },
    {
        jiedian: '7',
        chengzai: '',
    },
    {
        jiedian: '8',
        chengzai: '',
    },
    {
        jiedian: '9',
        chengzai: '',
    },
    {
        jiedian: '10',
        chengzai: '',
    },
    {
        jiedian: '11',
        chengzai: '',
    },
    {
        jiedian: '12',
        chengzai: '',
    },
    {
        jiedian: '13',
        chengzai: '',
    },
    {
        jiedian: '14',
        chengzai: '',
    },
    {
        jiedian: '15',
        chengzai: '',
    },
    {
        jiedian: '16',
        chengzai: '',
    },
    {
        jiedian: '17',
        chengzai: '',
    },
    {
        jiedian: '18',
        chengzai: '',
    },
    {
        jiedian: '19',
        chengzai: '',
    },
    {
        jiedian: '20',
        chengzai: '',
    },
    {
        jiedian: '21',
        chengzai: '',
    },
    {
        jiedian: '22',
        chengzai: '',
    },
]
const jiedian = ref('')
const zantai = ref('')
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
    // {
    //     value: '11',
    //     label: '节点11',
    // },
    // {
    //     value: '12',
    //     label: '节点12',
    // },
    // {
    //     value: '13',
    //     label: '节点13',
    // },
    // {
    //     value: '14',
    //     label: '节点14',
    // },
    // {
    //     value: '15',
    //     label: '节点15',
    // },
    // {
    //     value: '16',
    //     label: '节点16',
    // },
    // {
    //     value: '17',
    //     label: '节点18',
    // },
    // {
    //     value: '18',
    //     label: '节点18',
    // },
    // {
    //     value: '19',
    //     label: '节点19',
    // },
    // {
    //     value: '20',
    //     label: '节点20',
    // },
    // {
    //     value: '21',
    //     label: '节点21',
    // },
    // {
    //     value: '21',
    //     label: '节点22',
    // }
]
const zantaiOptions = [
    {
        value: "0",
        label: "否"
    },
    {
        value: "1",
        label: "是"
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
    // '11': false,
    // '12': false,
    // '13': false,
    // '14': false,
    // '15': false,
    // '16': false,
    // '17': false,
    // '18': false,
    // '19': false,
    // '20': false,
    // '21': false,
    // '22': false,
})
let showChengzai: any = ref('')
const chengzaiNum = [0.00, 14082.78, 13139.54, 11021.43, 4776.28, 4487.66, 4850.76, 7313.41, 4912.01, 5639.67]
function submit() {
    // console.log(visiable[jiedian.value])
    for (let i = 1; i <= 22; i++) {
        visiable[i] = false
    }
    visiable[jiedian.value] = true
    let temp: any = Number(jiedian.value) - 1
    temp = temp.toString()
    showChengzai = chengzaiNum[temp]
}

</script>

<style scoped>
.container {
    position: relative;
}

.chengzailiImg {
    position: absolute;
    z-index: 1;
    width: 860px;
    height: 53px;
    top: 455px;
    left: 85px;
}


.jiedianButton {
    margin-bottom: 15px;
}

.jiedian>span {
    font-size: 20px;
    color: red;
    z-index: 1;
}

.jiedian1 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 223px;
    top: 194px;

}

.jiedian2 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 330px;
    top: 194px;
}

.jiedian3 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 461px;
    top: 194px;
}

.jiedian4 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 557px;
    top: 211px;
}

.jiedian5 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 284px;
    top: 71px;
}

.jiedian6 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 395px;
    top: 71px;
}

.jiedian7 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 396px;
    top: 328px;
}

.jiedian8 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 527px;
    top: 71px;
}

.jiedian9 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 621px;
    top: 326px;
}

.jiedian10 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 621px;
    top: 70px;
}

.jiedian11 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 363px;
    top: 221px;
}

.jiedian12 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 385px;
    top: 268px;
}

.jiedian13 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 408px;
    top: 221px;
}

.jiedian14 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 422px;
    top: 145px;
}

.jiedian15 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 422px;
    top: 100px;
}

.jiedian16 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 449px;
    top: 221px;
}

.jiedian17 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 470px;
    top: 268px;
}

.jiedian18 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 494px;
    top: 221px;
}

.jiedian19 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 515px;
    top: 268px;
}

.jiedian20 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 541px;
    top: 221px;
}

.jiedian21 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 562px;
    top: 174px;
}

.jiedian22 {
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 588px;
    top: 221px;
}

.showData {
    width: 185px;
    height: 350px;
    /* background-color: rebeccapurple; */
    position: absolute;
    left: 710px;
    font-size: 15px;
}

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
    margin-top: 15px;
}

.mainMap {
    background-image: url("../../assets/nancheng.png");
    background-repeat: no-repeat;
    width: 700px;
    /*疑问？：div的尺寸如何自适应背景图的尺寸*/
    height: 500px;
    background-size: 100%;
    position: relative;
    left: 30px;
}
</style>
   
   