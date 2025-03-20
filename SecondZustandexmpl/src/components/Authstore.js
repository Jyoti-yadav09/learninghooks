import {create} from "zustand";

const useAuthorStore=create((set)=>

({
    isAuthenticated:false,
   login:()=>set({isAuthenticated:true}),
   logout:()=>set({isAuthenticated:false})



})


);
 export default useAuthorStore;