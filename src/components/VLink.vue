<template>
<a :class="classes">
<span>
  <slot></slot>  
</span>

</a>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
color?:'green'|'blue'|'pinky'
}>()
const classes = computed(()=>{
return {
green:props.color === 'green'|| !props.color,
pinky:props.color === 'pinky',
blue:props.color === 'blue'
}
})
</script>
<style scoped lang="scss">
a{
  text-decoration: none;
--btn-height:2rem;
font-size: large;
box-sizing: border-box;
padding: 1.2rem;
height:var(--btn-height);
border-radius: calc((var(--btn-height) + 1.2rem)/2);
border: 1px solid transparent;
display: flex;
flex-direction: column;
justify-content: center;
}
.green{
background-color: rgb(9, 197, 9);
color: whitesmoke;
}
.blue{
background-color: steelblue;
color: whitesmoke;  
}
.pinky{
  /* background-color: aqua; */
  background-color: rgb(254,109,146);
  color: whitesmoke;

}
.pinky:hover{
transition: all 100ms ease-in-out; 
background-color: rgb(239, 252, 239);    
color: rgb(254,109,146);
border: 1px solid rgb(254,109,146);
}
.green:hover{
transition: all 100ms ease-in-out; 
background-color: rgb(239, 252, 239);    
color: rgb(9, 197, 9);
border: 1px solid rgb(9, 197, 9);
}
a:hover{
cursor: pointer;
transition: all 100ms ease-in-out; 
background-color: rgb(234, 243, 250);    
color: steelblue;
border: 1px solid steelblue;
}
span{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: bold;
}
</style>