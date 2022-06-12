<template>
    <VBLock :label="'Акции:'">
<div class="free_lesson">
<div class="promo_content">
 
 <div class="description">
<h2>
    Бесплатный урок online|offline 
 </h2>   
 <br>
    <p>Попробуй первый урок бесплатно!
    Познакомься с преподавателем, форматом занятий 
    и создай свою первую работу. </p>
    <p>Для взрослых, от 15 лет: очно в Иркутске, либо онлайн по всей России!</p>
    <p>Для детей, от 5 до 15 лет: очно в Иркутске, либо онлайн по всей России!</p>

 </div>

</div>
<div class="promo_photo">
    <img src="@/assets/free_lesson_image.png" alt="">   
 
 </div>
 <div class="promo_action">
      <VLink href="#appointment-block">Записаться</VLink>
</div>
</div>
    </VBLock>
</template>
<script setup lang="ts">
import VLink from '../../components/VLink.vue';
import VBLock from '../../components/VBLock.vue';

</script>
<style scoped>
.free_lesson{
    display: grid;
    justify-content: flex-start;
    gap: 1rem;
}
.promo_content{
    text-align: left;
    display: flex;
    flex-direction: column;
justify-content: space-between;    
 grid-row: 1/2;
grid-column: 2/3;  
}
.promo_photo{
 grid-row: 1/2;
grid-column: 1/2;   
}
.promo_action{
display: flex;
justify-content: center;  
 grid-row: 2/3;
grid-column: 1/3;    
}
p{
  font-weight: 200;
  font-size: large;

}
h2{
    text-align: center;
}
h2,p{
       color: black;
}



img{   

 border-radius: .4rem;   
 width: 5rem;
 height: auto;
}
@media(min-width: 599px){

.promo_content{
 grid-row: 1/2;
grid-column: 2/3;  
}
.promo_photo{
 grid-row: 1/3;
grid-column: 1/2;   
}
.promo_action{
 grid-row: 2/3;
grid-column: 2/3;  
}
img{   

 border-radius: .4rem;   
 width: 22rem;
 height: auto;
}
}
</style>