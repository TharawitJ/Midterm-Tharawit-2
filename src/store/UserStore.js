import {create} from "zustand"
import {persist} from "zustand/middleware"

//create setToken
const useUserStore = create(
    persist((set,get) => ({
        id:null,
        setId:(id)=>set({id}),
        token:null,
        setToken:(token)=>set({token}),
        logOut:()=> set({token:null},{id:null})
    })),{name:'user-store'}
)
export default useUserStore