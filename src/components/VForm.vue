<template>
<div class="form_body">
 <form>
    <label>Как к вам обращаться:
        </label>  
               <input placeholder="ФИО">

     <label>Телефон:
         </label>   
               <input placeholder="+7(XXX)XXX-XX-XX"
               type="tel"
               >

     <VButton>Отправить</VButton>
 </form>   
</div>
</template>
<script setup lang="ts">
import VButton from './VButton.vue';
// defineProps<{
// }>()
</script>
<style scoped>
.form_body{
background-color: antiquewhite;    
border-radius: .4rem;
box-shadow: .2rem .2rem .4rem rgb(193, 161, 148);
}
form{
    padding: .5rem;
    display: grid;
grid-auto-flow: row;
gap: .5rem;
justify-items: center;
}
label{
 text-align: left;   
    color: black;
  /* text-align: left; */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
/* font-weight: 200; */
font-size: larger;
line-height: 1.5rem;
}
input{
    border-radius: .4rem;
    box-sizing: border-box;
    background-clip: padding-box;
    padding: 1.25rem .5rem;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: large;

width: 30rem;
height: 2rem;
border: 2px solid bisque;
}
input:focus{
outline: none;
border-color: lightsalmon;
transition: all 250ms ease-in-out;
}
</style>