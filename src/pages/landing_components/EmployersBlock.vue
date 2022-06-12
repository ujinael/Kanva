<template>
<VBLock :label="'Наши преподаватели:'">
 <EmployerCard v-for="(item, index) in employers" :key="index" 
    :label="item.label"
    :positions="item.positions"
    :description="item.description"
    />
</VBLock>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import EmployerCard from '../../components/EmployerCard.vue';
import VBLock from '../../components/VBLock.vue';
import { useEmployersStore } from '../../stores/useEmployersStore';
const store = useEmployersStore()
const {employers} = storeToRefs(store)

</script>
<style scoped lang="scss">

</style>