<template>
<div class="info-card">
    <div class="card_image">
        <img :src="getURL(imageTitle)" alt="">
    </div>
<div class="card_title">
    <h2>{{cardTitle}}</h2>
    </div>
<div class="card_description">
    <span>
        {{cardDescription}}
    </span>
 
</div> 
  <div class="card_action">
        <slot>
            <VLink :href="link" :color="'blue'">Подробнее</VLink>
        </slot>
    </div>
</div>
</template>
<script setup lang="ts">
import VLink from './VLink.vue';
const props = defineProps<{
imageTitle:string,
cardTitle:string,
cardDescription:string,
link:string
}>()
const getURL = (title:string)=>{
    return new URL(`../assets/${title}`,import.meta.url).href
}
</script>
<style scoped lang="scss">
.info-card{
width:100%;
background-color: antiquewhite;    
display: grid;
height: 100%;
border-radius: .4rem;
box-shadow: .0rem .2rem .6rem rgb(175, 146, 146);
}
img{
width: 100%;
height: auto;  
border-top-left-radius: .4rem;
border-top-right-radius: .4rem;

}
.card_action{
    align-self: flex-end;
    padding:.9rem 0;
   bottom: 1rem; 
   left: 0px;
   width: 100%;
   display: flex;
   justify-content: center;
}
h2,.card_description{
   font-size: medium;
line-height: 1.2rem;
padding: .4rem;
}
@media(min-width:599px){
.info-card{
    width:430px;
}
img{
width: 100%;
height: auto;    
}
}
</style>