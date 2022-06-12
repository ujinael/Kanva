<template>
<div class="contacts">
<p>Контакты:</p>
<p>
       <a href="tel:+7(952)626-22-26">т.: +7(952)626-22-26</a>
</p> 
<p>
    <a href="mailto:angelinacorsakova@yandex.ru">angelinacorsakova@yandex.ru</a>
</p>
<p>Корсакова Ангелина Руслановна</p>

ONLINE по всей России

<VSocials/>
</div>
</template>
<script setup lang="ts">
import VSocials from '../../components/VSocials.vue';

</script>

<style scoped lang="scss">
.contacts{
    display: grid;
    gap: .4rem;
}
a{
    text-decoration: none;
}
</style>