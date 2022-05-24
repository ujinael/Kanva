<template>
<div class="card">
<div class="logo">
 <img src="@/assets/kanva_logo_image.png">
</div>
<div class="title">
<h2>
    {{item.label}}
</h2>
</div>
<div class="descriptions">
    <hr>
<div class="description" v-for="(desc, index) 
in item.descriptions"
 :key="index">
 
 {{desc}}
 </div>


</div>
<div class="coast">
<span>{{item.coast}}</span>
</div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
item:{label:string,descriptions:string[],coast:string}    
}>()
</script>
<style scoped>
hr{
border-top: 1.5px solid whitesmoke;
border-bottom: none;
}
.card{
    background-color: rgb(231,190,138);

/* border-right: 1.5px solid whitesmoke;  */
padding: 0 2rem;   
display: flex;
flex-direction: column;
justify-content: space-between;
/* height: 100%; */
}
img{
width: 6rem;
height: auto;    
}
h2{
color: black;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
}
/* .descriptions{
    height: 80px;
} */
.description{
    /* width: 12rem; */
    box-sizing: border-box;
    border-bottom: 1.5px solid whitesmoke;
    padding:.5rem 0;
        color: black;
  /* text-align: left; */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 200;
font-size: larger;
line-height: 1.5rem;
}

.coast{
            color: black;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight:500;
font-size: larger;
}
</style>