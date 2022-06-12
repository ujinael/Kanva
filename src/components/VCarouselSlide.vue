<template>
<transition :name="direction" mode="in-out">
<div v-if="visibleSlide === index" class="carousel_slide">
    <!-- <slot> -->

        <img :src="getURL(url)" alt="Фото"/>

    <!-- </slot> -->
</div>
</transition>
</template>
<script setup lang="ts">
const props = defineProps<{
visibleSlide:number
index:number  
direction:'next'|'prev'  
url:string
}>()
const getURL = (url:string)=>{
   return new URL(`../assets/${url}.png`, import.meta.url).href
}
</script>
<style scoped lang="scss">
.carousel_slide{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
}
img{
  width: 95%;
  height: 100%;
  }
.prev-enter-active{
animation: prevInAnimation .4s ease-in-out;
}
.prev-leave-active{
animation: prevOutAnimation .4s ease-in-out;
}

@keyframes prevInAnimation {
 from{transform:translateX(-100%);  }
 to{transform: translateX(0%);}
}
@keyframes prevOutAnimation {
    from{transform:translateX(0%);  }
 to{transform: translateX(+100%);}
}

.next-enter-active{
animation: nextInAnimation .4s ease-in-out;
}
.next-leave-active{
animation: nextOutAnimation .4s ease-in-out;
}

@keyframes nextInAnimation {
 from{transform:translateX(100%);  }
 to{transform: translateX(0%);}
}
@keyframes nextOutAnimation {
    from{transform:translateX(0%);  }
 to{transform: translateX(-100%);}
}
</style>