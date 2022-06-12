<template>
  <component :is="layout">
  <router-view></router-view>
  </component>

</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// import { defineComponent } from 'vue'
const defaultLayout = 'layout-not-connected'
const route = useRoute()
   const layout = computed(()=> {
      return (route.meta.layout || defaultLayout)
    }
   )
</script>
<style>
:root{
--main_header_height:2.5rem;
--main_layout_padding:.8rem;
 --border-radius:5px;
--primary-color:rgb(0, 140, 255);
--primary-btn-color:var(--primary-color);
--primary-btn-hovered-color:rgb(64, 166, 250);
--primary-text-color:rgb(95, 95, 95);
--subtitle-text-color:gray;
--prize-region-color:rgb(255, 0, 0);
--count-region-color:cornflowerblue;
--count-text-color-secondary:white;
--count-text-color-primary:var(--primary-text-color);
--stepper-button-color:var(--count-region-color);
--modal-wrapper-bg-color:whitesmoke;

--fieldset-color:white;
--line-height:1.2rem;
--font-size: calc(var(--line-height) * 0.8);
--font-family:'Times New Roman', Times, serif;
--legend-font-size: calc(var(--line-height) * 0.7);
--legend-color:gray;
--fieldset-border-color:lightgray;
--fieldset-hover-border-color:lightskyblue;
--fieldset-horizontal-padding:0.4rem;
--fieldset-bottom-padding:0.0rem;
--fieldset-top-padding:0.0rem;
--li-height:calc(var(--line-height) + .4rem + .4rem);
--min-row-height:calc(var(--line-height) + var(--fieldset-bottom-padding) + var(--fieldset-top-padding));
}
* {
  
    scroll-behavior: smooth;

 margin:0;
 padding: 0;
 /* @import '@/assets/base.css'; */
}
h1,h3{
  padding-bottom: .5rem;
  font-family: 'Caveat', cursive;
}
h1,h2{
    font-size: larger;
    /* font-family: Arial, Helvetica, sans-serif; */

line-height: 1.4rem;
  color: black;
}
#app {
color: black;
font-family:'Source Code Pro', monospace;
font-weight: 200;
font-size: larger;
line-height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;

}


</style>

