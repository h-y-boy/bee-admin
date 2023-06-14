import {defineStore} from 'pinia'

export const useSidebarStore = defineStore('user',{
    state:()=>{
        return{
            collaspe:true
        }
    },
    getters:{},
    actions:{
        handleCollaspe(){
            this.collaspe=!this.collaspe
        }
    }
})