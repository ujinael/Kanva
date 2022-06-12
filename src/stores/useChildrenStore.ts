import { defineStore } from 'pinia'

export const useChildrenStore = defineStore('children', {
  state: () => {
    return {
      cards:[
        {
          imgTitle:'children_image_1.jpeg',
          link:'https://vk.com/uslugi-211582429?w=product-211582429_5755019',
          title:'Очный курс живописи и рисунка'
        ,description:'Занятия по рисованию в Иркутске! 1 раз в неделю 2 часа. Создаём собственную книгу-учебник со всеми базовыми техниками. Все материалы профессионального качества включены в стоимость и ждут вас в школе'}
        ,{
          imgTitle:'children_image_2.png',
          link:'https://vk.com/wall-211582429_14',
          title:'Рисование для детей ONLINE'
        ,description:'Занятия в онлайне с опытным преподавателем. Для детей 5-12 лет, используем базовые материалы, которые есть в доме у каждого. 1 раз в неделю в течении часа'}
    ] 
    }
  },
})