<template>
<button :class="classes">
<span>
  <slot></slot>  
</span>

</button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
color?:'green'|'blue'
}>()
const classes = computed(()=>{
return {
green:props.color === 'green'|| !props.color,
blue:props.color === 'blue'

}
})
</script>
<style scoped>
button{
--btn-height:2rem;
font-size: large;
/* box-sizing: border-box; */
padding: 1.2rem;
height:var(--btn-height);
border-radius: calc((var(--btn-height) + 1.2rem)/2);
border: 1px solid transparent;
/* background-clip:border-box; */
display: flex;
flex-direction: column;
justify-content: center;
}
.green{
background-color: green;
color: whitesmoke;
}
.blue{
background-color: blue;
color: whitesmoke;  
}
.green:hover{
transition: all 100ms ease-in-out; 
background-color: rgb(239, 252, 239);    
color: green;
border: 1px solid green;
}
button:hover{
cursor: pointer;
transition: all 100ms ease-in-out; 
background-color: rgb(224, 224, 248);    
color: blue;
border: 1px solid blue;
}
</style>