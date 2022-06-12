<template>
<div class="form_body">
 <form @submit.prevent="onSubmit" action="https://formsubmit.co/1d373bb13e600438693e6e09d18c5a14" ref="form" method="POST">
    <label>Как к вам обращаться:
        </label>  
           <VInput v-model="store.name" type="text" placeholder="ФИО" required/>
     <label>Телефон:
         </label>   
            <VInput v-model="store.phone" type="tel" placeholder="+7(XXX)XXX-XX-XX" required/>
     <VButton :color="'pinky'" :disable="store.formDisabled" type="submit">Отправить</VButton>
 </form>   
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import VButton from './VButton.vue';
import VInput from './VInput.vue';
import { useFormStore } from '../stores/useFormStore';
const form = ref<HTMLFormElement>()
const store = useFormStore()
const onSubmit = async ()=>{
    if(form && !store.formDisabled){
     store.formSubmit()
    }
}
</script>
<style scoped>
.form_body{
background-color: antiquewhite;    
border-radius: .4rem;
box-shadow: .2rem .2rem .4rem rgb(193, 161, 148);
}
form{
    display: grid;
grid-auto-flow: row;
gap: .5rem;
justify-items: center;
padding-bottom: 1rem;
}
label{
 text-align: left;   
    color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: larger;
line-height: 1.5rem;
}

</style>