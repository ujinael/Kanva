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
border-top: 1.5px solid gray;
border-bottom: none;
}
.card{
background: linear-gradient(rgb(249, 230, 206), rgb(212, 162, 95));
box-shadow: .2rem .2rem .4rem rgb(161, 122, 50);
box-sizing: border-box;
border-radius: .4rem;
padding: 1rem 2rem;   
display: grid;
grid-template-rows: min-content 1fr auto 2rem;
flex-direction: column;
justify-content: space-between;
}
img{
width: 6rem;
height: auto;    
}
h2{
color: black;
font-size: large;
}


.title{
border-bottom: 1.5px solid gray;
padding-bottom: 1rem;
}
.description{
    box-sizing: border-box;
    border-bottom: 1.5px solid gray;
    padding:.5rem 0;
        color: black;
font-size: medium;
line-height: 1.5rem;
}

.coast{
            color: black;
font-weight:1000;
font-size: larger;
}
@media(min-width: 599px){

}
</style>