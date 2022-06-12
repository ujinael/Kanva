<template>
    
<div class="layout-container">
<div class="header">
<div class="header_content">
  <div class="ico element">
     <a  href="#base-block">
        <img src="@/assets/kanva_logo_image.png" alt="">
        </a>  
</div>
<span class="menu element" @click="isOpen = !isOpen">
<MenuIco class="menu_ico"/>
</span>
<HeaderTabBar class="tabs element"/>
   <div class="phone element">
    <a  href="tel:+7(952)626-22-26">
      <span class="desktop">+7(952)626-22-26</span>
       <PhoneIco class="mobile"/>
      </a>
   </div> 
</div>
</div>


     <div class="main-container">
  <router-view/>
</div>
<div class="footer">
      <a href="https://webmaster.yandex.ru/siteinfo/?site=www.risovaniekanva.ru"><img width="88" height="31" alt="" border="0" src="https://yandex.ru/cycounter?www.risovaniekanva.ru&theme=light&lang=ru"/></a>

</div> 
<transition>
<VAside class="aside" v-model="isOpen"  v-if="isOpen"/>
</transition>
<div class="sticky_button_container">
  <div class="sticky_button" @click="showPopup = true">
      <GiftIco class="gift_ico" />
  </div>
</div>
<VPopup  v-model="showPopup"/>

    </div>

</template>
<script lang="ts">
export default {
  name: 'main-layout'}
</script>
<script lang="ts" setup>
import { ref } from 'vue';
import GiftIco from '../assets/gift_ico.svg'
import PhoneIco from '../assets/phone_ringing.svg'
import MenuIco from '../assets/menu_icon.svg'
import HeaderTabBar from './HeaderTabBar.vue';
import VAside from './VAside.vue';
import VPopup from '../components/VPopup.vue';
const isOpen = ref(false)
const showPopup = ref(false)
</script>
<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.layout-container{
  scroll-behavior: smooth;
  position: relative;
  background-color:rgb(248, 231, 224);
  display: grid;
height: min-content;
width:100vw ;
}
@keyframes sticky_button {
  from{
opacity: 1;
  }
  to{
opacity: .5;
  }
}

.sticky_button_container{
 
position: fixed;
box-sizing: border-box;
display: flex;
justify-content: right;
padding-right: .5rem;
padding-bottom: env(safe-area-inset-bottom);
top:calc(100vh - 5rem);
opacity: .8;
width: 100%;
cursor: pointer;
}
.sticky_button{ 
  animation-name: sticky_button;
  animation-timing-function: ease-out;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  height: 4rem;
width: 4rem;
border-radius: 2rem;
background-color: rgb(235, 157, 31);
border: 3px solid rgb(235, 157, 31);
box-shadow: 3px 3px 12px gray;
box-sizing: border-box;
padding: .2rem;

}
.gift_ico{
  height: 3rem;
width: 3rem;
filter: invert(1);
-webkit-filter: invert(1);
}
 .header{
    position: sticky;
    z-index: 1000;
    top: 0px;
    left: 0px;
    width:100vw ;
    background-color: rgb(235, 157, 31);
    box-shadow: .1rem 0.1rem .5rem lightsalmon;
  }

  img{
height: 2.2rem;
width: auto;
}
a{
  text-decoration: none;
  color: whitesmoke;
}
.element{
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:0 .8rem;
}
  .mobile{
    width: 2rem;
    height: auto;
  }
  .desktop{
    display: none;
  }
.header_content{
display: grid;
grid-template-areas: "men ico phone";
}
.ico{
grid-area: ico;
}
.phone{
font-weight: bold;
justify-self: flex-end;
grid-area: phone;
}
.menu{
  justify-self:flex-start;
  grid-area: men;
}
.tabs{
  display: none;
}
 
.main-container{
  display: flex;
  justify-content: center;
  //  overflow-x:scroll;
scroll-behavior: smooth;

}
.footer{
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color:rgb(248, 231, 224);

}
.aside{
  display: block;
}

 @media(min-width: 599px){
   .footer{
     max-width: 1200px;
   }
.header{
  width: 100%;
}
   .header_content{
grid-template-areas: "ico men phone";
}

.ico{
justify-self: flex-start;
grid-area: ico;
}
.menu{
  display: none;
}
.tabs {
  display: grid;
}
.phone{
justify-self: flex-end;
grid-area: phone;
}
 .aside{
  display: none;
}
.mobile{
  display: none;
}
.desktop{
  display: block;
}
 }

 
  
</style>

