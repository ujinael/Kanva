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
grid-template-columns: 1fr 1fr;

}
img{
width: 60%;
height: auto;   
border-radius: .4rem; 
} 
h2{
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight:normal;
}

.content{
    color: black;
  /* text-align: left; */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 200;
font-size: larger;
line-height: 1.5rem;
}
.description{
      color: black;
  text-align: left;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 200;
font-size: larger;
line-height: 2rem; 
}
</style>