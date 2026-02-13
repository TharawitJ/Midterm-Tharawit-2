import {create} from "zustand"
import {persist} from "zustand/middleware"

//create setToken
const useUserStore = create(
    persist((set,get) => ({
        id:null,
        setId:(id)=>set({id}),
        token:null,
        setToken:(token)=>set({token}),
        // todoList:[],
        // setTodoList:(todoList)=>set({todoList}),
        logOut:()=> set({token:null},{id:null}, {todoList:[]})
    })),{name:'user-store'}
)
export default useUserStore