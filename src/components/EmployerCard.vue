<template>
<div class="card">
    <div class="content">
<div class="ico">
<img src="@/assets/teacher_1.jpg">
</div>
<br>
   <h2>
    {{label}}
</h2>
<div class="positions">
    {{positions}}
</div>

    
    </div>
<div class="description">
    {{description}}
</div> 
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
label:string
positions:string
description:string
}>()
</script>
<style scoped>
.card{
width: 100%;
display: grid;
}
img{
width: 100%;
height: auto;   
border-radius: .4rem; 
} 
.positions{
font-size: large;    
color: rgb(43, 42, 42);
padding: 1rem;
}
h2{
font-weight:normal;
}


.description{
      color: black;
  text-align: left;
line-height: 1.4rem; 
font-size: medium;
}
@media(min-width: 599px){
    img{
        width: 80%;
    }
.card{
grid-template-columns: 1fr 1fr;
}
.description{
font-size: large;
line-height: 2rem;
}
}
</style>