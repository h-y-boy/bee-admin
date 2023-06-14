import {defineStore} from 'pinia'

export const useSidebarStore = defineStore('siderbar',{
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