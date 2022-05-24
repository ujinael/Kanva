<template>
<div class="benefit">
<div class="ico">
 <slot></slot>   
</div>
<div class="content">
  <h3>
{{label}}
</h3>
<div class="description">
{{description}}
</div>  
</div>

</div>
</template>
<script setup lang="ts">
const props = defineProps<{
label:string,
description:string
}>()
</script>
<style scoped>
.ico{
width: 2.9rem;
height: auto;
}
h3{
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight:normal;
}
.benefit{
text-align:left;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: lighter;
display: grid;
grid-template-columns: min-content 1fr;
gap: 1.5rem;
 }
</style>