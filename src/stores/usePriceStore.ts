import { defineStore } from 'pinia'

export const usePriceStore = defineStore('prices', {
  state: () => {
    return {
      abonements:[
        {
        label:'Очный курс живописи и рисунка',
        descriptions:[
        'Проходит в Иркутске'
        ,'Все материалы включены в стоимость'
        ,'Создаём собственную книгу-учебник со всеми базовыми техниками'
        ,'1раз в неделю-2часа'],   
        coast:'2500-3600 ₽/месяц' 
        },
        {
            label:'Рисование для детей ONLINE',
        descriptions:[
        'На платформе ZOOM, из любой точки мира',
        'Используем базовые материалами, которые есть дома у каждого',
        'Не требуется присутствие взрослых',
        '1раз в неделю-1час'
        ],   
        coast:'1500 ₽/месяц' 
        },
        {
            label:'Индивидуальные занятия ONLINE',
        descriptions:[
        'На платформе ZOOM, из любой точки мира',
        'Индивидуально подбираем программу под ваши цели и возможности',
        'Для взрослых и детей',
        'В удобное для вас время'],   
        coast:'600 ₽/час' 
        },
        {
            label:'Рисование для взрослых ONLINE',
        descriptions:[
        'На платформе ZOOM, из любой точки мира',
        'Используем базовые материалами, которые есть дома у каждого',
        'Обучение с нуля',
        '1раз в неделю-1час'],   
        coast:'1500 ₽/месяц' 
        },   
        ]
    }
  },
})