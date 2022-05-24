<template>
 
    
<div class="layout-container">
<div class="header">
<div class="header_content">
<HeaderTabBar/>
   <div class="right_element h_element">
    <a href="tel:+7(911)111-22-33">+7(911)111-22-33</a>
   </div> 
</div>
</div>


     <div class="main-container">
  <router-view/>
</div>
<div class="footer"></div>
    </div>

</template>
<script lang="ts">
export default {
  name: 'main-layout'}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
import HeaderTabBar from './HeaderTabBar.vue';

const isOpen = ref(false)

</script>
<style scoped lang="scss">
.layout-container{

  background-color:rgb(248, 231, 224);
  display: grid;
  justify-items: center;
// grid-template-rows: var(--main_header_height) auto min-content;
grid-template-areas: 
"header"
"main"
"footer"
;
height: 100vh;
width: 100vw;
overflow: hidden;
}
  .header{
    width: 100%;
    background-color: rgb(235, 157, 31);
    box-shadow: .1rem 0.1rem .5rem lightsalmon;
  }
  a,.h_element{
color: whitesmoke;
text-decoration: none;
  }
.header_content{
   padding:0 1rem;
    font-size: x-large;
     display: flex;
    justify-content: space-between;
}
  .h_element{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // justify-content: space-between;
    // padding:0px var(--main_layout_padding);
  }
  .header_btn{
    // background-color: salmon;
    height: 100%;
  }
  .header_btn_content{
        height: 100%;
    // background-color: slateblue;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.main-container{
  grid-area: main;
  // padding-top: var(--main_layout_padding);
  padding-left:var(--main_layout_padding);
  padding-right: var(--main_layout_padding);
   overflow: scroll;

}
.footer{
  grid-area: footer;
  height: 10px;
}
.aside{
  grid-area:aside;
}
 @media(min-width: 599px){
.layout-container{
grid-template-columns: 1fr;
grid-template-areas:
"header"
"main"
"footer"
;

}
 }

 
  
</style>

