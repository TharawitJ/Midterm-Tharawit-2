import {create} from "zustand"
import {persist} from "zustand/middleware"

//create setToken
const useUserStore = create(
    persist((set,get) => ({
        objUserId:null,
        setId:(objUserId)=>set({objUserId}),
        token:null,
        setToken:(token)=>set({token}),
        logOut:()=> set({token:null},{id:null})
    })),{name:'user-store'}
)
export default useUserStore