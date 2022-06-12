<template>
  <div class="socials">
    <ul>
<li><a href="https://wa.me/+79526262226"><WhatsAppIco class="icon"/></a></li>
<li><a href="https://t.me/artschoollina"><TelegarmIco class="icon"/></a></li>
<li><a href="https://vk.com/im?sel=-211582429"><VKIco class="icon"/></a></li>

    </ul>
  </div>
</template>
<script setup lang="ts">
import WhatsAppIco from '../assets/whatsapp_icon.svg';
import TelegarmIco from '../assets/telegram.svg';
import VKIco from '../assets/vk-round-line-color.svg';
</script>
<style scoped lang="scss">
ul{
  list-style: none;
  display: grid;
  grid-auto-flow: column;

  justify-content: center;
  gap: 2rem;
}
.icon{
 width: 4rem;
 height: auto; 
}
a{
  cursor: pointer;
}
</style>