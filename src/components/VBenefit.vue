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
  color: black;
fill-rule:nonzero;
fill: black;
width: 2.9rem;
height: auto;
}
h3{
  color: black;
font-weight:n
ormal;
}
.benefit{
text-align:left;
font-size: medium;
font-weight: lighter;
display: grid;
grid-template-columns: min-content 1fr;
gap: 1.5rem;
 }
</style>