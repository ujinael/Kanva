<template>
<transition>
<div class="popup_overflow" v-if="value" @click="close">
      <div @click.stop class="popup_wrapper">
     <div class="close_area">
<div class="close_btn">
    <button @click.stop="close">
    <CloseIco/>
    </button>
</div>
</div> 
<div class="popup_content">
  <p>
    При записи на первый урок сейчас,скидка до 15%
  </p>
<form ref="form" @submit.prevent="onSubmit">
 <VInput v-model="store.name" type="text" placeholder="ФИО" required/> 
<VInput v-model="store.phone" type="tel" placeholder="+7(XXX)XXX-XX-XX" required/>
     <VButton :color="'pinky'" :disable="store.formDisabled" type="submit">Отправить</VButton></form>
</div>
    </div>
</div>
</transition>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import CloseIco from '../assets/close-icon.svg'
import { useFormStore } from '../stores';
import VInput from './VInput.vue';
import VButton from './VButton.vue';

const store = useFormStore()
const props = defineProps<{
modelValue:boolean
}>()
const emit = defineEmits(['update:modelValue'])
const value = computed<boolean>({
get(){return props.modelValue},
set(v){emit('update:modelValue',v)}
})
const close = ()=>{
  store.$reset()
  value.value = ! value.value
}
onMounted(()=>{
  store.$reset()
})
const onSubmit = async ()=>{
    if(store.formDisabled){
    await store.formSubmit('горячее предложение')
    }
}
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

p{
  color: black;
}
.popup_content{
background-color: antiquewhite;    
  width: 100%;
 border-radius: .4rem;
}
form{
display: grid;
 gap: 1rem;
 padding: .8rem;
}
input{
  width: auto;
}
.popup_overflow{
  z-index: 1001;
position: absolute;
top:0px;
width: 100%;
height: 100%;
left: 0px;
background-color: rgba(41, 41, 41,.6);
-webkit-backdrop-filter: blur(9px);
backdrop-filter: blur(9px);
display: flex;
justify-content: center;
}
.popup_wrapper{
position: sticky;
    top: calc(25%);
    left: 0px;
height: fit-content;
 padding: 1rem;
  box-sizing: border-box;

}
.close_area{
display: flex;
justify-content: flex-end;
}
.close_btn{
 padding-top: .5rem;  
}

.close_btn button{
width: 1.5rem; 
 height: auto;
background-color: transparent;
border: none;
color: whitesmoke; 
font-size: large;
cursor: pointer;
}

</style>