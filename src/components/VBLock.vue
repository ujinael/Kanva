<template>
<div class="block">
<h1>
    {{label}}
</h1>
<slot>

</slot>

</div>
</template>
<script setup lang="ts">
defineProps<{
label:string
}>()
</script>
<style scoped lang="scss">
.block{
box-sizing:border-box;
padding: 1rem;
width: 100%;
font-size:large;  
 scroll-margin-top: 2.5rem;
  color: black;
}
h1{
  font-size: x-large;
  padding-bottom: 1rem;
}
</style>