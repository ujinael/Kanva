<template>
<div>
    <h1>Ка&vа для детей:</h1>
  <div class="cards">
   <Card v-for="(item, index) in cards" :key="index"
   :image-title="'children_image_1'"
   :card-title="item.title"
   :card-description="item.description"
   /> 
  </div>
</div>
</template>
<script setup lang="ts">
import Card from '../../components/Card.vue';
const cards = [
    {title:'Очный курс живописи и рисунка'
    ,description:'Занятия по рисованию в Иркутске! 1 раз в неделю 2 часа. Создаём собственную книгу-учебник со всеми базовыми техниками. Все материалы профессионального качества включены в стоимость и ждут вас в школе'}
    ,{title:'Рисование для детей ONLINE'
    ,description:'Занятия в онлайне с опытным преподавателем. Для детей 5-12 лет, используем базовые материалы, которые есть в доме у каждого. 1 раз в неделю в течении часа'}
] 
</script>
<style scoped lang="scss">
h1{
 padding-bottom: 1rem;   
}
.cards{
display: grid;
grid-template-columns: 1fr 1fr; 
justify-items: center;   
}
</style>