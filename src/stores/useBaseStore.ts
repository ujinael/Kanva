import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', {
  state: () => {
    return {
     benefits: [
        'ЖИВОПИСЬ ДЛЯ ВЗРОСЛЫХ И ДЕТЕЙ',
          'УЧИСЬ РИСОВАТЬ online из любой точки России',
          'УЧИСЬ РИСОВАТЬ offline в Иркутске',
          'УЧИСЬ ПО УНИКАЛЬНЫМ АВТОРСКИМ ПРОГРАММАМ',
          'УЧИСЬ В ЛЮБОЕ ВРЕМЯ ГОДА',
          'БЕСПЛАТНЫЙ ПЕРВЫЙ УРОК online|offline'
      ]
    }
  },
})

