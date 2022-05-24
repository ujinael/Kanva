<template>
<div>
    <h1>Ка&vа для взрослых:</h1>
  <div class="cards">
   <Card v-for="(item, index) in cards" :key="index"
   :image-title="'adult_image_1'"
   :card-title="item.title"
   :card-description="item.description"
   /> 
  </div>
</div>
</template>
<script setup lang="ts">
import Card from '../../components/Card.vue';
const cards = [
    {title:'МК Живопись на холсте'
    ,description:'Мастер класс акрилом на холсте для взрослых: что бы выплеснуть эмоции, попробовать большой формат и написать собственную картину в свой дом. Даже если вы никогда не брали кисточку в руки, вы получите прекрасный результат и отлично проведёте время! Предварительно мы с вами обсудим все детали, выберем формат и цель'}
    ,{title:'Рисование для взрослых ONLINE'
    ,description:'Занятия по живописи с нуля. Под руководством опытного преподавателя, вы освоите новые навыки и научитесь создавать красивые картины.Расслабьтесь и отвлекитесь от рабочих будней в удобное для вас время, не выходя из дома! От 15 лет'}
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