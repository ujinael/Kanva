import { defineStore } from 'pinia'

export const useFaqStore = defineStore('faq', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      rows: [{
        question: 'Как проходят занятие в онлайне?',
        answer:'Занятия и для взрослых и для детей в онлайне проходят один раз в неделю. В определённое время мы подключаемся  по видеосвязи  и занимаемся 1 час. Преподаватель поэтапно рисует, обьясняет и показывает каждую деталь при создании картины. Ученики самостоятельно повторяют, и, показывая в камеру свои работы после каждого этапа, получают индивидуальные замечания и корректировки. На каждом занятии мы проходим новые техники рисования и создаём небольшие картины. '
     ,expand:false
      },
        {
          question: 'Дети занимаются вместе со взрослыми?',
          answer: 'Нет, на наших занятиях группы разделены по возрасту. Дети 5-12 лет и взрослые от 16 лет'
          , expand: false
        },
        {
          question: 'Ребёнку 5 лет, маме надо присутствовать на занятии?',
          answer: 'Дети рисуют полностью самостоятельно. Для онлайн занятий взрослые могут помочь подготовить рабочее место: настроить компьютер/планшет, включить конференцию и подготовить материалы. Далее ребёнок обучается и рисует работу под чутким руководством преподавателя, без вмешательства родителей.'
          , expand: false
        },
        {
          question: 'Кому нужны индивидуальные занятия?',
          answer: 'Индивидуальные занятия подходят абсолютно всем. Особенно, если обучающийся обладает ярковыраженными способности и его потенциал требует бОльшего внимания. Либо обучающийся обладаем большим желанием рисовать, но испытывает трудности в процессе. В обоих случаях программа корректируется индивидуально под человека, учитывая его цель и имеющийся уровень.'
          , expand: false},
        {
          question: 'Что нужно иметь для занятий онлайн?',
          answer: 'По технической стороне, для занятия  необходимо иметь: устройство с камерой, микрофоном и стабильный интернет. Для творческого процесса, минимум, который нам потребуется: бумага для рисования, ёмкость под воду, кисточки разных размеров(лучше всего -синтетика или нейлон), краски (гуашь или акварель), чёрный маркер или фломастер.'
          , expand: false},
        {
          question: 'Можно заниматься не включая свою камеру?',
          answer: 'Да, вы можете не включать камеру и микрофон, а только слушать и наблюдать за процессом создании картины. В таком случае, у вас больше самостоятельной работы, поскольку преподаватель не сможет скорректировать процесс выполнения вашей работы и дать индивидуальные рекомендации.'
          , expand: false},
        {
          question: 'Качество обучения в онлайн хуже, чем оффлайн?',
          answer: 'Благодаря современным технологиям - качество обучения онлайн не уступает физическому присутствию в школе. Это не видеоуроки, а прямая связь с преподавателем. Обучающиеся видят не только процесс создания картины, но и как обращаться с материалами, держать кисть, нажимать на карандаш. А опытный преподаватель корректирует в нужном направлении.'
          , expand: false},
        {
          question: 'Что рисуют взрослые?',
          answer: 'На занятиях со взрослыми главным материалом является акварель. Мы учимся не просто академическим правилам и законам, но самое главное - мы учимся выполнять небольшие картины  и скетчи так, что бы они получались красивыми, нравились нам и радовали других. Ученики наших курсов украшают своими работами свой дом и дарят близким в качестве презента или открытки. Начиная с простых форм, мы постепенно усложняем наши работы и на примере рисунков с каждого занятия можно чётко увидеть прогресс.'
          , expand: false},
        {
          question: 'Как часто проходят занятия?',
          answer: 'Занятия проходят один раз в неделю. Это минимум, за который мы постепенно изучаем материалы и техники, без перенапряжения, что бы так же успевать получать удовольствие от процесса.'
        },
        {
          question: 'Сколько стоит обучение в вашей школе?',
          answer: 'Стоимость обучения зависит от выбранной программы, в среднем, месяц занятий в нашей школе составляет 1500 рублей.'
          , expand: false},
        {
          question: 'Сколько длится обучение',
          answer: 'Программа онлайн курса рассчитана на 1 год, но курс имеет циклическую систему и вы можете начать в любое время года.'
          , expand: false},
        {
          question: 'Вы готовите к поступлению в художественный вуз?',
          answer: 'Да, мы занимаемся профессиональной подготовкой по академическим направлениям. Занятия индивидуальные, программа составляется специально под вас, учитывая такие критерии, как: в какое учебное заведение поступаете/какие навыки имеете на данном этапе/сколько времени до поступления и т.д.'
          , expand: false},
      ]
    }
  },
  actions: {
    toggle(index: number) {
    
      this.rows[index].expand = !this.rows[index].expand
    }
  }
})

