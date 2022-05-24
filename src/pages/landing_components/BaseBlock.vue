<template>
  <div class="base">
<h1>
     Я УЧУСЬ РИСОВАТЬ   
    </h1>
    <h2>
      курсы художественного развития  
    </h2>
  <div class="columns">
   <img src="@/assets/noroot.png" alt="лого"> 
  <div class="right_column">
    <div class="column_content">
       <ul>
    <li>ЖИВОПИСЬ ДЛЯ ВЗРОСЛЫХ И ДЕТЕЙ</li>
    <li>УЧИСЬ РИСОВАТЬ online из любой точки России</li>
    <li>УЧИСЬ РИСОВАТЬ offline в Иркутске</li>
    <li>УЧИСЬ ПО УНИКАЛЬНЫМ АВТОРСКИМ ПРОГРАММАМ</li>
    <li>УЧИСЬ В ЛЮБОЕ ВРЕМЯ ГОДА</li>
    <li>БЕСПЛАТНЫЙ ПЕРВЫЙ УРОК online|offline</li>
    
</ul> 
<div class="action">
  <VLink href="#appointment-block">Записаться</VLink>
  <!-- <form action="#appointment-block">
      <VButton  type="submit" :color="'green'">Записаться</VButton>
</form> -->

</div>
    </div>
  
  </div>
 
  </div>


</div>
</template>
<script setup lang="ts">
import VButton from '../../components/VButton.vue';
import VLink from '../../components/VLink.vue';

// const iconPath = computed<string>(()=>{
//   return new URL(`@/assets/noroot.png`, import.meta.url).href
// })
</script>
<style scoped lang="scss">
.base{
box-sizing:border-box;
padding:2rem;
background: linear-gradient(rgb(249, 230, 206), rgb(231,190,138));

font-size:large;
}
.columns{
padding-top: 1rem;
display:grid;
grid-template-columns: 1fr 1fr;
justify-content:space-between;    
}
img{
width:18rem;
height:18rem;
filter: drop-shadow(0 0 0.5rem rgb(246, 170, 141));
}
.right_column{
box-sizing: border-box;
padding: 1.5rem;
background-color: rgb(253, 235, 205);
border-radius: .4rem;
box-shadow: .2rem .2rem .8rem rgb(148, 134, 110);
// border: 2px dotted lightsalmon;

}
.column_content{
  display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
}
ul{
  list-style:disc;
  align-self: flex-start;
    text-align: left;
}
.action{
  justify-self: center;
}
</style>