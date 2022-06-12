<template>
<VBLock
:label="'КANVA для детей:'"
>
 <div class="cards">
   <Card v-for="(item, index) in cards" :key="index"
   :image-title="item.imgTitle"
   :card-title="item.title"
   :card-description="item.description"
   :link="item.link"
   /> 
  </div>
</VBLock>
  
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Card from '../../components/Card.vue';
import { useChildrenStore } from '../../stores/useChildrenStore';
import VBLock from '../../components/VBLock.vue';
const store = useChildrenStore()
const {cards} = storeToRefs(store)
</script>
<style scoped lang="scss">


.cards{
display: grid;
justify-items: center;   
gap: 1rem;

}
 @media(min-width: 599px){
.cards{
grid-template-columns: 1fr 1fr; 
}
 }
</style>