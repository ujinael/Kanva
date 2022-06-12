<template>
  <VBLock :label="'КANVA для взрослых:'">
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
import { useAdultStore } from '../../stores/useAdultStore';
import VBLock from '../../components/VBLock.vue';
const store = useAdultStore()
const {cards} = storeToRefs(store)
</script>
<style scoped lang="scss">

.cards{
display: grid;
justify-items: center;   
gap:1rem;
}
 @media(min-width: 599px){
.cards{
grid-template-columns: 1fr 1fr;
grid-auto-rows: max-content; 
gap:1rem;
}
 }

</style>