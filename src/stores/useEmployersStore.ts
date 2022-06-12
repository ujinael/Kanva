import { defineStore } from 'pinia'

export const useEmployersStore = defineStore('employers', {
  state: () => {
    return {
      employers:[
        {
        label:'Корсакова Ангелина Руслановна',
        positions:'преподаватель, методист, автор курсов',
        description:'\"Здраствуйте, друзья! Ведь всех, кто интересуется творчеством я готова назвать другом.\nМоя мечта - помочь каждому желающему получать удовольствие от создания своих работ. Когда что-то не получается и взрослые, и дети ведут себя одинаково - им это не нравится. Суть моей методики заключается в том, что бы научить простым базовым правилам, используя которые, вам начнёт нравится не только процесс, но и результат! Сама я так же пишу картины, училась этому всю свою жизнь и знаю как помочь с этим другим! Мой опыт работы с детьми уже более 6 лет, я имею художественное и педагогическое образование, проработав в 5 разных школах я почувствовала потребность в создании собственного авторского курса, который будет гармонично сочетать обучение, творчество и помогать достигать собственных результатов!\"'
        }]
    }
  },
})