import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      name: '',
      phone: '',
      formDisabled:false
    }
  },
  actions: {
    
   async formSubmit(description:'простая форма'|'горячее предложение' = 'простая форма'){
      await fetch("https://formsubmit.co/ajax/angelinacorsakova@yandex.ru", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          description:description,
            name: this.name,
            phone: this.phone
        })
    })
        .then(response => response.json())
        .then(data =>
        {this.formDisabled = false
        alert('Спасибо! Мы ответим в ближайшее время.')
        })
        .catch(error =>
        alert(`Ошибка отправки. Повторите позже. ${error}`)
        );


  }
  }
})