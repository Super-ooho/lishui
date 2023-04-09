<template>
    <el-container>
      <el-aside width="150px" class="asideStyle">
        <div>
            <div class="beishu">
                <span>选择节点</span>
                <el-select v-model="jiedian" class="m-2" placeholder="Select">
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
            <div class="jiedian1"></div>
            <div class="jiedian2"></div>
            <div class="jiedian3"></div>
            <div class="jiedian4"></div>
            <div class="jiedian5"></div>
            <div class="jiedian6"></div>
            <div class="jiedian7"></div>
            <div class="jiedian8"></div>
            <div class="jiedian9"></div>
            <div class="jiedian10"></div>
            <div class="jiedian11"></div>
            <div class="jiedian12"></div>
            <div class="jiedian13"></div>
            <div class="jiedian14"></div>
            <div class="jiedian15"></div>
            <div class="jiedian16"></div>
            <div class="jiedian17"></div>
            <div class="jiedian18"></div>
            <div class="jiedian19"></div>
            <div class="jiedian20"></div>
            <div class="jiedian21"></div>
            <div class="jiedian22"></div>

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
        '23': false,
        '24': false,
        '25': false,
        '26': false,
        '27': false,
        '28': false,
    })

    function submit(){

    }

    function appear1(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[1] = true
    }
    function appear2(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[2] = true
    }
    function appear3(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[3] = true
    }
    function appear4(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[4] = true
    }
    function appear5(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[5] = true
        visiable[6] = true
    }
    function appear6(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[7] = true
        visiable[8] = true
    }
    function appear7(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[9] = true
    }
    function appear8(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
    }
    function appear9(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[11] = true
    }
    function appear10(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
    }
    function appear11(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[13] = true
        visiable[14] = true
    }
    function appear12(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[15] = true
    }
    function appear13(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[16] = true
        visiable[17] = true
    }
    function appear14(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[18] = true
    }
    function appear15(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[19] = true
    }
    function appear16(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[20] = true
        visiable[21] = true
    }
    function appear17(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[22] = true
    }
    function appear18(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[23] = true
        visiable[24] = true
    }
    function appear19(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[25] = true
    }
    function appear20(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[26] = true
        visiable[27] = true
    }
    function appear21(event:any){
        for(let i = 0; i<=28; i++){
            visiable[i] = false
        }
        visiable[28] = true
    }

</script>

<style scoped>
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
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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
.jiedian1{
    width: 20px;
    height: 20px;
    background-color: rebeccapurple;
    border-radius: 10px;
    position: absolute;
    left: 127px;
    top: 221px;
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

</style>
   
   