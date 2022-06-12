import { defineStore } from 'pinia'
import StarIco from '../assets/Tilda_Icons_2web_sta.svg'
      import GiftIco from '../assets/gift_ico.svg'
      import CalIco from '../assets/Tilda_Icons_2web_cal.svg'
      import RoubIco from '../assets/Tilda_Icons_24fn_rou.svg'
      import TeacIco from '../assets/Tilda_Icons_1ed_teac.svg'
      import SecIco from '../assets/Tilda_Icons_16cf_sec.svg'
 export const icons = {
      star:StarIco,
      gift:GiftIco,
      calendar:CalIco,
      roub:RoubIco,
      teacher:TeacIco,
      sec:SecIco
      }      
export interface Benefit{
  ico:keyof typeof icons,label:string,description:string
}
type BenefitSate = {
  benefits:Benefit[]
}
export const useBenefitsStore = defineStore('benefits', {
  state: ():BenefitSate => {
    return {
       benefits:[
          {
          ico:'star',
          label:'Авторские программы'
          ,description:'Во всех наших программах оптимальное соотношение: обучения, творческой атмосферы и личного развития. Мы постепенно даём ученикам всю информацию, сохраняя его индивидуальность и поддерживая творческую радость в работе'
          },
          {
               ico:'sec',
               label:'Разнообразие курсов'
          ,description:'Мы хотим помочь всем! Вне зависимости от местоположения или возраста, у нас найдется для вас подходящий формат обучения'
          },
          {
              ico:'calendar',
              label:'Занятия круглый год'
          ,description:'В нашей школе вы можете заниматься без перерыва: и зимой и летом!'
          },
          {
               ico:'gift',
               label:'Пробное занятие бесплатно'
          ,description:'Для всех, кто еще не знаком с нами мы дарим первое занятие! Никаких оплат: живое общение и результат всего за 1 час'
          },
           {ico:'roub',
           label:'Доступность'
          ,description:'Наша школа придерживается демократической политики в вопросах ценообразования. Стоимость наших услуг в среднем составляет 500 рублей/час, что эквивалентно разовому посещению кинотеатра или кафе'
          },
           {ico:'teacher',
           label:'Опытный преподаватель'
          ,description:'Занятие ведёт квалифицированный специалист, с большим опытом работы'
          },
      ]
    }
  },
})