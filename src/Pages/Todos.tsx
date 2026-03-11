import axios from "axios"
import { ChangeEvent, useState } from "react"
export type Todo = {
    title : string,
    descreption : string
}

export default function Todos(){
    const [ count , setCount ] = useState<number>(0)
    const [ Text , setText ] = useState<string>("")
    const [ TodoList , setTodoList ] = useState<Todo[] | null >(null)
    const title : string = "halim"
    var arr : any[] = ["jjsdajads" , 888 , true , {sd : 7}]

    function squar(x : number){
        return x * x
    }

    const getTodos = async(): Promise<Todo[]>  =>{
        const {data} = await axios.get("https://dummyjson.com/posts")
        return data.todos
    }

    return <div>
        <input type="text" onChange={(e :  React.ChangeEvent<HTMLInputElement>)=>{ setText(e.target.value) }} />
        <h1>count : {count} this is the square of the count {squar(count)}</h1>
        <button onClick={()=>{ setCount(count + 1)}}>inc</button>
        <Todo title={"hello"}  descreption={"hhasdhdsa hdsakhdaskhsda"} />
    </div>
}