import { defineStore } from "pinia";

export const useColor =  defineStore('main', {
    state : () => ({
        colorSet : "#7b34dd",
        colorSet2 : "#a45deb"
    }),
    actions : {
        reset(){
            this.colorSet = "#7b34dd"
            this.colorSet2 = "#a45deb"
        },
        change(color : string, color2:string){
            this.colorSet = color,
            this.colorSet2 = color2
        }
    }
})