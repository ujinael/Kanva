<template>
<ul>
 
    <li><a href="#children-block">Детям</a></li>
    <li> <a href="#adult-block">Взрослым</a></li>
    <li> <a href="#benefits-block">Почему мы</a></li>
    <li> <a href="#teachers-block">Наши учителя</a></li>
    <li> <a href="#faq-block">FAQ</a></li>
        <li> <a href="#reviews-block">Примеры работ</a></li>
        <li> <a href="#promotions-block">Акции</a></li>
    <li> <a href="#prices-block">Наши цены</a></li>


</ul>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">

ul{
display: none;
padding:0 .2rem;
grid-auto-flow: column;
gap: 1px;
}

li{
    height: 2rem;
    list-style:none;
    padding: .4rem;
    margin: 0;
    justify-self:flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
li:hover{
    box-shadow: 0px 1px 8px saddlebrown;
    transition: all 250ms ease-in-out;}
a{
   font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    color: whitesmoke;
    text-align: left;
    text-decoration: none;
}

@media(min-width: 599px){

    ul{
        display: grid;
    }
}
</style>