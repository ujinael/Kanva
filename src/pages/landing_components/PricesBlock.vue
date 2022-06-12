<template>
<VBLock :label="'Наши цены:'">
  <h1></h1>
    <div class="cards">

    <PriceCard :item = item  v-for="(item, index) in abonements" 
    :key="index"

    />
    </div>
</VBLock>
  

</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PriceCard from '../../components/PriceCard.vue';
import { usePriceStore } from '../../stores/usePriceStore';
import VBLock from '../../components/VBLock.vue';
const store = usePriceStore()
const {abonements} = storeToRefs(store)
</script>
<style scoped lang="scss">

.cards{
 display: grid;
gap: 1rem;
}
@media(min-width: 599px){
.cards{
grid-template-columns: repeat(4, 1fr);


}
}
</style>