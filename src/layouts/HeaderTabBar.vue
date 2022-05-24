<template>
<ul class="">
    <li><a  href="#base-block">
        <img src="@/assets/kanva_logo_image.png" alt=""></a></li>
    <li><a href="#children-block">Детям</a></li>
    <li> <a href="#adult-block">Взрослым</a></li>
    <li> <a href="#benefits-block">Почему мы</a></li>
    <li> <a href="#teachers-block">Наши учителя</a></li>
    <li> <a href="#prices-block">Наши цены</a></li>


</ul>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
ul{
display: grid;
grid-template-columns: repeat(6,1fr);

}
img{
filter: drop-shadow(0rem 0rem .5rem bisque);
height: 2.2rem;
width: auto;
}
li{
    list-style:none;
    padding: .4rem;
    margin: 0;
    justify-self:flex-start;
}
a{
    color: whitesmoke;
    text-align: left;
    text-decoration: none;
}
</style>