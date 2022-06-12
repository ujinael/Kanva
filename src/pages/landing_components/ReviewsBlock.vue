<template>
<VBLock :label="'Работы наших учеников'">
 <VCarousel class="mobile"
    :slides-count="slides.length" 
    :slides="slides"
    >
    </VCarousel>
    <div class="desktop">
        <div class="cards">
            <div class="card" v-for="(item, index) in slides" 
            :key="index">
<img :src="store.getURL(item.url)" :alt="item.url">
            </div>
        </div>
    </div>
</VBLock>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import VCarousel from '../../components/VCarousel.vue';
import { useReviewsStore } from '../../stores/useReviewsStore';
import VBLock from '../../components/VBLock.vue';
const store = useReviewsStore()
const {slides} = storeToRefs(store)

</script>
<style scoped lang="scss">
.mobile{
    display: block;
}
.desktop{
    display: none;
}
@media (min-width:599px) {
.desktop{
    display: flex;
    justify-content: center;
    width: 100%;
}
.mobile{
    display: none;
}
.cards{
display: grid;
grid-template-columns: repeat(3,min-content);
gap:1rem;
}
img{
    width: 300px;
    height: auto;
}
}

</style>