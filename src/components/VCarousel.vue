<template>
<div class="carousel">
<div class="content">
  <VCarouselSlide v-for="(item, index) 
    in slides" 
    :key="item.url"
    :visibleSlide="visibleSlide"
    :index="index"
    :direction="direction"
    :url="item.url"
    >
    </VCarouselSlide>  
</div>
<button @click="prev"   class="prev">
Prev</button>

<button @click="next"  class="next">
Next</button>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import VCarouselSlide from './VCarouselSlide.vue';

const props = defineProps<{
slides:{url:string}[],
slidesCount:number
}>()
const visibleSlide = ref(0)
const direction = ref<'next'|'prev'>('next')
const getURL = (url:string)=>{
   return new URL(`../assets/${url}.png`, import.meta.url).href
}
const currentLeft = ref(0)
const prev = ()=>{

direction.value = 'prev'
visibleSlide.value = visibleSlide.value - 1 < 0 ? 0 : visibleSlide.value - 1
}
const next = ()=>{

  direction.value = 'next'
  visibleSlide.value = visibleSlide.value + 1 > props.slides.length-1 ? props.slides.length - 1 : visibleSlide.value + 1
var hiddenElement = document.getElementById(`slide_${visibleSlide.value}`);
 hiddenElement?.scrollIntoView({block: "nearest", behavior: "smooth"});

}
const timer = ref<any>(null)
const onScroll = (ev:Event)=>{
  if(timer.value!=null)clearTimeout(timer.value)
 timer.value = setTimeout(()=>{
 let scrollLeft = (ev.target as HTMLDivElement).scrollLeft
direction.value = (currentLeft.value - scrollLeft)<0?'next':'prev'
currentLeft.value = scrollLeft
if(direction.value === 'next'){
  visibleSlide.value = visibleSlide.value + 1 > props.slides.length-1 ? props.slides.length - 1 : visibleSlide.value + 1

}else{
visibleSlide.value = visibleSlide.value - 1 < 0 ? 0 : visibleSlide.value - 1

}
  },200)
 

}
</script>
<style scoped lang="scss">
// .slides {
//   scrollbar-width: thin;
//   scrollbar-color: blue orange;
  
// }

// /* Works on Chrome, Edge, and Safari */
// .slides::-webkit-scrollbar {
//   width: 5px;
// }

// .slides::-webkit-scrollbar-track {
//   background: rgba(255, 255, 255,0.2);
// }

// .slides::-webkit-scrollbar-thumb {
//   background-color: gray;
//   border-radius: .5rem;
//   border: 1px solid gray;
// }
.slides{
  width: 350px;
display: grid;
grid-auto-flow: column;
overflow-x: scroll;
scroll-snap-type:x mandatory;
scroll-behavior: smooth;
scrollbar-width:thin;
// scrollbar-gutter:1rem;
}
.slide{
  scroll-snap-align:start;
width: 350px;
height:auto;
scroll-behavior: smooth;

}
.carousel{
  width: 100%;
  height: 18rem;
  position: relative;
}
.content{
  width: 100%;
  height: 100%;
}
img{
  width: 95%;
  height: auto;
}
button{
background-color: transparent;
color: white;
border-radius: 50%;
box-sizing: border-box;
border: 1px solid transparent;
opacity: .4;
padding: 1rem;
height: 4rem;
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
top:calc(50% - 2rem);

}
a{
width: 4rem;
height: 4rem;
}
button:hover{
opacity: .5;  
cursor: pointer;
}
 .prev {
  left:0px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
}

 .next {
  right: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
}
@media(min-width:499px) {
  .carousel{
    // height: 50rem;
    width: auto;
  }
}
</style>