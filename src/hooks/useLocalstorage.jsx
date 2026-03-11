import { useState } from "react";

export function useLocalStorage(key , initialValue){

    const [value , setValue] = useState(()=> {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        } else {
            return initialValue
        }
     })

     function updateLocalstorage(newValue){
        setValue(newValue)
        localStorage.setItem(key , JSON.stringify(newValue))
     }

   return [value , updateLocalstorage]     
}

