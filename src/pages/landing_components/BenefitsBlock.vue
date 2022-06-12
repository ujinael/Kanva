<template>
<div>
    <h1>Наши преимущества:</h1>
<div class="benefits">
    <VBenefit v-for="(item, index) in benefits" :key="index"
    :label="item.label"
    :description="item.description"
    >
   <component :is="icons[item.ico]"></component>
    </VBenefit>
</div>
</div>

</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import VBenefit from '../../components/VBenefit.vue';
 import { icons, useBenefitsStore } from '../../stores/useBenefitsStore';
 const store = useBenefitsStore()
 const {benefits} = storeToRefs(store)

</script>
<style scoped>
.benefits{
    display: grid;
    gap:1rem;
}
@media (min-width:599px){
.benefits{
       grid-template-columns: 1fr 1fr;
 
}    
}
</style>