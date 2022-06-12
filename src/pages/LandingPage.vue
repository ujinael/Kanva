<template>
<div class="page">
<BaseBlock id="base-block"/>
<TextBlock />
<ChildrenBlock  id="children-block"/>
<AdultBlock id="adult-block"/>
<BenefitsBlock id="benefits-block"/>
<EmployersBlock id="teachers-block"/>
<FAQBlock id="faq-block"/>
<ReviewsBlock id = "reviews-block"/>
<PromotionsBlock id="promotions-block"/>
<PricesBlock id="prices-block"/>
<AppointmentBlock id="appointment-block"/> 
<Contacts id="contacts-block"/>
</div>
</template>
<script setup lang="ts">
import BaseBlock from './landing_components/BaseBlock.vue'
import TextBlock from './landing_components/TextBlock.vue'
import AdultBlock from './landing_components/AdultBlock.vue';
import ChildrenBlock from './landing_components/ChildrenBlock.vue';
import BenefitsBlock from './landing_components/BenefitsBlock.vue';
import EmployersBlock from './landing_components/EmployersBlock.vue';
import ReviewsBlock from './landing_components/ReviewsBlock.vue';
import PromotionsBlock from './landing_components/PromotionsBlock.vue';
import PricesBlock from './landing_components/PricesBlock.vue';
import AppointmentBlock from './landing_components/AppointmentBlock.vue';
import Contacts from './landing_components/Contacts.vue';
import FAQBlock from './landing_components/FAQBlock.vue';

</script>

<style lang="scss" scoped>
.page{
display: grid;
grid-auto-flow: row;
gap: 2rem;    
background-color: rgb(231,190,138);
width: 100%;

}

 @media(min-width: 599px){
  .page{
max-width: 1200px;

} 
 }
</style>