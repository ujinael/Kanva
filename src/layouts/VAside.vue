<template>
<div class="overflow">
<div class="aside_wrapper">
<div class="close_area">
<div class="close_btn">
    <button @click="value = !value">
    <CloseIco/>
    </button>
</div>
</div>

<div class="tabs_area">
    <ul class="tabs">
     <li v-for="(item, index) in tabs" 
     :key="index"
     >
     <a :href="item.link" @click="value = !value">{{item.title}}</a>
     </li>
</ul>
</div>
</div>
</div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import CloseIco from '../assets/close-icon.svg'

const props = defineProps<{
modelValue:boolean
}>()
const emit = defineEmits(['update:modelValue'])
const value = computed<boolean>({
get(){return props.modelValue},
set(v){emit('update:modelValue',v)}
})
const tabs = [
    {title:'Детям',link:'#children-block'},
    {title:'Взрослым',link:'#adult-block'},
    {title:'Почему мы',link:'#benefits-block'},
    {title:'Наши учителя',link:'#teachers-block'},
        {title:'FAQ',link:'#faq-block'},
      {title:'Примеры работ',link:'#reviews-block'},
        {title:'Акции',link:'#promotions-block'},
    {title:'Наши цены',link:'#prices-block'},
]
</script>
<style scoped>
.overflow{
     z-index: 1001;
position: absolute;
top:0px;
width: 100%;
height: 100%;
left: 0px;
background-color: rgba(41, 41, 41,.6);
-webkit-backdrop-filter: blur(9px);
backdrop-filter: blur(9px);
}
.aside_wrapper{
position: sticky;
    top: 0px;
    left: 0px;
height: 100vh;
width: 60%;
background-color: rgb(193, 125, 0);
}
.close_area{
display: flex;
justify-content: flex-end;
padding-right: .5rem;    
}
.close_btn{
 padding-top: .5rem;  
}

button{
width: 1.5rem; 
 height: auto;
background-color: transparent;
border: none;
color: whitesmoke; 
font-size: large;
cursor: pointer;
}

.tabs_area{
    padding-top: 1rem;
width: 100%;
}
ul{
    box-sizing: border-box;
list-style: none;
width: 100%;
text-align: start;
display: grid;
gap: .5rem;
padding: 0 1rem;
}
li{
cursor: pointer;
}
a{
text-decoration: none;
color: aliceblue;
line-height: 2rem;
width: 100%;
height: 2rem;
}

li:hover{
background-color: rgb(248, 193, 90);
}
</style>