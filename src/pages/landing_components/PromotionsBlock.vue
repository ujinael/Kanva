<template>
<div>
    <h1>Акции:</h1>
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
 <div class="action">
      <VButton>Записаться</VButton>
 </div>
</div>
<div class="promo_photo">
    <img src="@/assets/free_lesson_image.png" alt="">   
 
</div>
</div>
</div>
</template>
<script setup lang="ts">
import VButton from '../../components/VButton.vue';

</script>
<style scoped>
.free_lesson{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    justify-content: flex-start;
}
.promo_content{
    text-align: left;
    display: flex;
    flex-direction: column;
justify-content: space-between;    
}

p{
  font-weight: 200;
  font-size: larger;

}
h2,p{
       color: black;
  /* text-align: left; */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
line-height: 1.5rem;
}

img{   

 border-radius: .4rem;   
 width: 22rem;
 height: auto;
}
</style>