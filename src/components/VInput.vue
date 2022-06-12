<template>
<input v-model="value">
</template>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
modelValue:string

}>()
const emit = defineEmits(['update:modelValue'])
const value = computed<string>({
get(){return props.modelValue},
set(v){emit('update:modelValue',v)}
})
</script>
<style scoped lang="scss">
input{
    border-radius: .4rem;
    box-sizing: border-box;
    background-clip: padding-box;
    padding: 1.25rem .5rem;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-size: large;
width: 90%;
height: 2rem;
border: 2px solid bisque;
}
input:focus{
outline: none;
border-color: lightsalmon;
transition: all 250ms ease-in-out;
}
@media(min-width: 599px){
    input{
       width: 30rem;
    }

}
</style>