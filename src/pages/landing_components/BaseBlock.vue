<template>
  <!-- <div > -->
    <VBLock class="base" :label="'Я УЧУСЬ РИСОВАТЬ'">
  <h2>
      курсы художественного развития  
    </h2>
  <div class="columns">
    <div class="logo">
         <img src="@/assets/kanva_logo_image.png" alt="лого"> 
    </div>
  <div class="right_column">
    <div class="column_content">
       <ul>
         <li v-for="(item, index) in benefits"
          :key="index">{{item}}</li> 
</ul> 
<div class="action">
  <VLink :color="'pinky'" href="#appointment-block">Записаться</VLink>
</div>
    </div>
  </div>
  <VSocials class="socials"/>
  </div>
    </VBLock>

</template>
<script setup lang="ts">

import VLink from '../../components/VLink.vue';
import VSocials from '../../components/VSocials.vue';
import VBLock from '../../components/VBLock.vue';
import { useBaseStore } from '../../stores/useBaseStore';
import { storeToRefs } from 'pinia';
const store = useBaseStore()
const {benefits} = storeToRefs(store)



</script>
<style scoped lang="scss">
h1{
font-size: 35px;
margin-top: 1rem;
}

.base{
background: linear-gradient(rgb(249, 230, 206), rgb(231,190,138));
}
.columns{
padding-top: 1rem;
display:grid;
justify-content:space-between;    
gap:1rem 0;
}
img{
width:6rem;
height:auto;
}
.right_column{
box-sizing: border-box;
padding: 1.5rem;
background-color: rgb(253, 235, 205);
border-radius: .4rem;
box-shadow: .2rem .2rem .8rem rgb(148, 134, 110);

}
.column_content{
  display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
box-sizing: border-box;  
padding-left: .4rem;
gap:.5rem;
}
ul{
  list-style-position: outside;
  list-style:disc;
  align-self: flex-start;
    text-align: left;
    font-size: medium;
}
.action{
  justify-self: center;
}

@media(min-width: 599px){
  img{
width: 20rem;
  }
.logo{
  justify-self: flex-start;
}
.columns{
  grid-template-columns: 1fr 1fr;

}
.socials{
  grid-row: 2/3;
  grid-column: 2/3;
}
}
</style>