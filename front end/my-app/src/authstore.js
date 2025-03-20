import {create} from 'zustand';

export const useAuthstore =create((set)=>(
{
authuser:null,

setauthuser:(user)=>set({
    authuser:user
})
}
))
