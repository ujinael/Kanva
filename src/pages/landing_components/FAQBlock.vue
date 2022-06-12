<template>
    <VBLock :label="'Вопрос-ответ'">
  <ol>
        <li v-for="(item, index) in store.rows" 
        :key="index">
        <div class="question">
    <ArrowIco class="ico" :class="{ico_ex:item.expand}"/>
    <span :class="{expand:item.expand}" @click="store.toggle(index)">{{item.question}}</span>
        </div>
     <transition>
         <ul v-if="item.expand" >  
             <li>{{item.answer}}</li>
        </ul>  
     </transition>
   
        </li>
    </ol>
    </VBLock>
</template>
<script setup lang="ts">
import { useFaqStore } from '../../stores/useFaqStore';
import ArrowIco from '../../assets/up-arrow.svg'
import VBLock from '../../components/VBLock.vue';
const store = useFaqStore()
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.block_content{
    box-sizing: border-box;
    padding: 2rem;
}
span{
    cursor: pointer;
}
ol{
    list-style-position: inside;
    text-align: left;
    list-style: none;
    display: grid;
    gap:.5rem;
}

.question_ex{
    display: block;
    visibility: visible;
    transition: all .25s ease-in;
}
.question_close{
    display: none;
    visibility: collapse;
}
.question{
display: grid;
grid-template-columns: 1rem 1fr;
gap: 1rem;
}
.ico{
transform: rotate(180deg);
height: 100%;
width: 100%;
}
.ico_ex{
  transform: rotate(0deg);
fill: whitesmoke;
}
span{
    font-size: large;
    font-weight: bold;
}
li>ul{
    box-sizing: border-box;
    list-style: none;
    // margin-left: 2rem;
}
ul>li{
    border: 2px dashed whitesmoke;
    box-sizing: border-box;
    padding: .5rem;
}
.expand, .ico_ex{
    color: whitesmoke;
    transition: all .25s ease-in;
}
</style>