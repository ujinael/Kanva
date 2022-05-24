<template>
<div class="info-card">
    <div class="card_image">
        <img src="@/assets/children_image_1.jpeg" alt="">
    </div>
<div class="card_title">
    <h2>{{cardTitle}}</h2>
    </div>
<div class="card_description">
    <span>
        {{cardDescription}}
    </span>
    <div class="card_action">
        <slot>
            <VButton :color="'blue'">Подробнее</VButton>
        </slot>
    </div>
</div>
</div>
</template>
<script setup lang="ts">
import VButton from './VButton.vue';
const props = defineProps<{
imageTitle:string,
cardTitle:string,
cardDescription:string
}>()
</script>
<style scoped>
.info-card{
    position: relative;
height: 650px;
width:500px;
background-color: white;    
padding: .8rem;
border-radius: .2rem;
box-shadow: .2rem .2rem .2rem brown;
}
img{
width: 430px;
height: 430px;    
}
.card_action{
   position: absolute;
   bottom: 1rem; 
   left: 0px;
   width: 100%;
   display: flex;
   justify-content: center;
}
</style>