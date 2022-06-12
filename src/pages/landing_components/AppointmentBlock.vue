<template>
<VBLock :label="'Обратная связь:'">
 <VForm/>
</VBLock>
</template>
<script setup lang="ts">
import VForm from '../../components/VForm.vue';
import VBLock from '../../components/VBLock.vue';

</script>
<style scoped>
.block{
padding: 2rem;  
display: grid;
gap:2rem;
}
</style>