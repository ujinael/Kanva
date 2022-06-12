import { defineStore } from 'pinia'

export const useReviewsStore = defineStore('reviews', {
  state: () => {
    return {
 
    }

  },
  getters: {
    slides() {
    return  [...(new Array(12).keys())].map(k=>{
        return {
            url:`rew_photo_${k+1}`
        }
        })
    }
  }, actions: {
     getURL:(url:string)=>{
      return new URL(`../assets/${url}.png`, import.meta.url).href
   }
  }
})