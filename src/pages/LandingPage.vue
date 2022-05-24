<template>
<div class="page">
<BaseBlock id="base-block"/>
<TextBlock>
   <p> Живопись - это наука. Она имеет свои подразделы,теорию, 
 терминологию, обладает системностью и доказывается на практике.
 В живописи есть свои правила и законы. Если вы хотите самостоятельно рисовать 
 любые картины - вам следует 
 знать эти правила. Но не торопитесь, каждый закон - наслаждение.</p>
<p>
 Наши преподаватели постепенно погрузят вас в мир красоты, помогут получить 
удовольствие от процесса обучения, овладеть новыми навыками и насладиться результатом. 
И не важно: 5 вам лет или 55, находитесь вы в одном городе или за тысячи километров. 
У нас есть образовательные программы для взрослых и детей, индивидуальные и групповые
 сеансы, длительные курсы и краткосрочные мастер-классы.      
</p>  
</TextBlock>
<ChildrenBlock id="children-block"/>
<AdultBlock id="adult-block"/>
<BenefitsBlock id="benefits-block"/>
<EmployersBlock id="teachers-block"/>
<PromotionsBlock id="promotions-block"/>
<PricesBlock id="prices-block"/>
<AppointmentBlock id="appointment-block"/>
</div>
</template>
<script setup lang="ts">
import BaseBlock from './landing_components/BaseBlock.vue'
import TextBlock from './landing_components/TextBlock.vue'
import AdultBlock from './landing_components/AdultBlock.vue';
import ChildrenBlock from './landing_components/ChildrenBlock.vue';
import BenefitsBlock from './landing_components/BenefitsBlock.vue';
import EmployersBlock from './landing_components/EmployersBlock.vue';
import PromotionsBlock from './landing_components/PromotionsBlock.vue';
import PricesBlock from './landing_components/PricesBlock.vue';
import AppointmentBlock from './landing_components/AppointmentBlock.vue';

</script>

<style lang="scss" scoped>
.page{
display: grid;
max-width: 1200px;
// padding: 0 1rem;
grid-auto-flow: row;
gap: 2rem;    
background-color: rgb(231,190,138);

}

</style>